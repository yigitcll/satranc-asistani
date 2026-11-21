from __future__ import annotations

import json
import os
import re
import subprocess
import threading
import unicodedata
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

try:
    import chess
    import chess.engine
    import chess.pgn
except ImportError as exc:
    raise SystemExit(
        "python-chess kurulu değil. Proje klasöründe setup.bat dosyasını çalıştır."
    ) from exc


APP_DIR = Path(__file__).resolve().parent
WEB_DIR = APP_DIR / "web"
SQUARE_PATTERN = re.compile(r"(?<![a-z0-9])[a-h][1-8](?![a-z0-9])", re.IGNORECASE)
COORDINATE_PATTERN = re.compile(
    r"^([a-h][1-8])\s*(?:(?:-|–|→|to|naar)\s*)?([a-h][1-8])([qrbn]?)$",
    re.IGNORECASE,
)
MOVE_NUMBER_PATTERN = re.compile(r"^\d+\.(?:\.\.)?\s*")

PIECE_WORDS = {
    chess.PAWN: ("piyon", "pawn"),
    chess.KNIGHT: ("at", "knight", "horse"),
    chess.BISHOP: ("fil", "bishop"),
    chess.ROOK: ("kale", "rook"),
    chess.QUEEN: ("vezir", "queen"),
    chess.KING: ("şah", "sah", "kral", "king"),
}
class MoveParseError(Exception):
    def __init__(self, code: str, candidates: list[str] | None = None):
        super().__init__(code)
        self.code = code
        self.candidates = candidates or []


def find_stockfish() -> str:
    settings = APP_DIR / "settings.json"
    try:
        saved = json.loads(settings.read_text(encoding="utf-8")).get("stockfish_path")
        if saved and Path(saved).is_file():
            return str(Path(saved))
    except (OSError, ValueError, TypeError, AttributeError):
        pass

    from_environment = os.environ.get("STOCKFISH_EXECUTABLE")
    if from_environment and Path(from_environment).is_file():
        return from_environment

    for candidate in (APP_DIR / "stockfish.exe", APP_DIR / "Stockfish.exe"):
        if candidate.is_file():
            return str(candidate)

    for engine_dir in (APP_DIR / "stockfish", APP_DIR / "Stockfish"):
        if engine_dir.is_dir():
            for candidate in sorted(engine_dir.glob("stockfish*.exe")):
                if candidate.is_file():
                    return str(candidate)
    return ""


def _normalize_language(text: str) -> str:
    folded = text.casefold().replace("ı", "i")
    return "".join(
        character for character in unicodedata.normalize("NFKD", folded)
        if not unicodedata.combining(character)
    )


def _piece_type_from_words(text: str) -> int | None:
    words = re.findall(r"[^\W_]+", _normalize_language(text), flags=re.UNICODE)
    matches: list[tuple[int, int]] = []
    for piece_type, synonyms in PIECE_WORDS.items():
        for word in words:
            for synonym in synonyms:
                normalized = _normalize_language(synonym)
                if word == normalized or (word.startswith(normalized) and len(word) - len(normalized) <= 3):
                    matches.append((len(normalized), piece_type))
    return max(matches, key=lambda match: match[0])[1] if matches else None


def _choose_promotion(moves: list[chess.Move], promotion: str = "") -> chess.Move | None:
    if not moves:
        return None
    promotions = [move for move in moves if move.promotion]
    if not promotions:
        return moves[0] if len(moves) == 1 else None
    symbol = promotion.casefold()
    requested = {"q": chess.QUEEN, "r": chess.ROOK, "b": chess.BISHOP, "n": chess.KNIGHT}.get(symbol)
    preferred = requested or chess.QUEEN
    return next((move for move in moves if move.promotion == preferred), promotions[0])


def parse_move(board: chess.Board, raw: str) -> chess.Move:
    text = raw.strip()
    if not text:
        raise MoveParseError("empty")

    text = MOVE_NUMBER_PATTERN.sub("", text)
    text = text.replace("0-0-0", "O-O-O").replace("0-0", "O-O")
    compact = re.sub(r"\s+", "", text)

    # Spoken-style castling descriptions in Turkish and English.
    normalized = re.sub(r"[^a-z0-9]+", " ", _normalize_language(text)).strip()
    castle_aliases = {
        "kingside": chess.KING,
        "king side": chess.KING,
        "short": chess.KING,
        "kisa": chess.KING,
        "sah kanadi": chess.KING,
        "sah kanadina": chess.KING,
        "queenside": chess.QUEEN,
        "queen side": chess.QUEEN,
        "long": chess.QUEEN,
        "uzun": chess.QUEEN,
        "vezir kanadi": chess.QUEEN,
        "vezir kanadina": chess.QUEEN,
    }
    castle_moves = [move for move in board.legal_moves if board.is_castling(move)]
    castle_side = next((side for phrase, side in castle_aliases.items()
                        if phrase in normalized and ("rok" in normalized or "castle" in normalized or "castling" in normalized)), None)
    if castle_side is not None:
        matching = [move for move in castle_moves if (chess.square_file(move.to_square) == 6) == (castle_side == chess.KING)]
        if len(matching) == 1:
            return matching[0]
        if matching:
            raise MoveParseError("ambiguous", [board.san(move) for move in matching])
    elif normalized in {"rok", "castle", "castling", "rok yap", "castle now"}:
        if len(castle_moves) == 1:
            return castle_moves[0]
        if castle_moves:
            raise MoveParseError("ambiguous", [board.san(move) for move in castle_moves])

    # Coordinate forms: e2e4, e2-e4, e2 e4, or a promotion such as e7e8q.
    coordinate_match = COORDINATE_PATTERN.fullmatch(compact)
    if coordinate_match:
        origin, destination, promotion = coordinate_match.groups()
        try:
            origin_square = chess.parse_square(origin.lower())
            destination_square = chess.parse_square(destination.lower())
        except ValueError:
            origin_square = destination_square = -1
        moves = [
            move for move in board.legal_moves
            if move.from_square == origin_square and move.to_square == destination_square
        ]
        selected = _choose_promotion(moves, promotion)
        if selected:
            return selected
        if moves:
            raise MoveParseError("ambiguous", [move.uci() for move in moves])

    # Standard algebraic notation: Nf3, O-O, Rxd8+, and so on.
    for candidate in (text, re.sub(r"[!?+#]+$", "", text)):
        if not candidate:
            continue
        try:
            return board.parse_san(candidate)
        except ValueError:
            pass

    # Friendly coordinates: “kale h8”, “rook h8”, “at f3”, “bishop c4”.
    squares = [square.lower() for square in SQUARE_PATTERN.findall(text)]
    piece_type = _piece_type_from_words(text)
    capture_only = bool(re.search(r"\b(?:al|alir|take|takes|capture|captures|captured)\b|\bx\b", _normalize_language(text)))

    if len(squares) >= 2:
        origin = chess.parse_square(squares[0])
        destination = chess.parse_square(squares[1])
        source_reference = re.search(
            r"\b(?:from|off)\s+([a-h][1-8])\b|\b([a-h][1-8])\s+(?:den|dan)\b",
            normalized,
        )
        if source_reference:
            source_name = source_reference.group(1) or source_reference.group(2)
            if source_name in squares:
                destination_name = next((square for square in squares if square != source_name), None)
                if destination_name:
                    origin = chess.parse_square(source_name)
                    destination = chess.parse_square(destination_name)
        moves = [
            move for move in board.legal_moves
            if move.from_square == origin
            and move.to_square == destination
            and (piece_type is None or board.piece_at(move.from_square).piece_type == piece_type)
            and (not capture_only or board.is_capture(move))
        ]
    elif len(squares) == 1:
        destination = chess.parse_square(squares[0])
        moves = [
            move for move in board.legal_moves
            if move.to_square == destination
            and (piece_type is None or board.piece_at(move.from_square).piece_type == piece_type)
            and (not capture_only or board.is_capture(move))
        ]
    else:
        raise MoveParseError("missing_square")

    if not moves:
        raise MoveParseError("not_legal")
    selected = _choose_promotion(moves)
    if selected:
        return selected

    raise MoveParseError("ambiguous", [move.uci() for move in moves])


class GameSession:
    def __init__(self) -> None:
        self.lock = threading.RLock()
        self.engine_lock = threading.Lock()
        self.board = chess.Board()
        self.human_color = chess.WHITE
        self.analysis_seconds = 2
        self.engine_path = find_stockfish()
        self.engine: chess.engine.SimpleEngine | None = None
        self.engine_path_running = ""
        self.pending_move: chess.Move | None = None
        self.analysis_lines: list[dict] = []
        self.analysis_error = ""
        self.thinking = False
        self.revision = 0
        self.request_id = 0

    def _clear_analysis_locked(self) -> None:
        self.pending_move = None
        self.analysis_lines = []
        self.analysis_error = ""
        self.thinking = False

    def new_game(self, side: str) -> dict:
        with self.lock:
            self.human_color = chess.WHITE if side == "white" else chess.BLACK
            self.board = chess.Board()
            self.revision += 1
            self.request_id += 1
            self._clear_analysis_locked()
        self.schedule_analysis()
        return self.state()

    def play_text(self, notation: str) -> tuple[dict | None, MoveParseError | None]:
        with self.lock:
            try:
                move = parse_move(self.board, notation)
            except MoveParseError as exc:
                return None, exc
            self._push_locked(move)
        self.schedule_analysis()
        return self.state(), None

    def play_suggestion(self) -> tuple[dict | None, str | None]:
        with self.lock:
            if self.pending_move is None or self.board.turn != self.human_color:
                return None, "no_suggestion"
            self._push_locked(self.pending_move)
        self.schedule_analysis()
        return self.state(), None

    def undo(self) -> tuple[dict | None, str | None]:
        with self.lock:
            if not self.board.move_stack:
                return None, "nothing_to_undo"
            self.board.pop()
            self.revision += 1
            self.request_id += 1
            self._clear_analysis_locked()
        self.schedule_analysis()
        return self.state(), None

    def load_fen(self, fen: str) -> tuple[dict | None, str | None]:
        try:
            new_board = chess.Board(fen.strip())
        except ValueError:
            return None, "invalid_fen"
        if not new_board.is_valid():
            return None, "invalid_fen"
        with self.lock:
            self.board = new_board
            self.revision += 1
            self.request_id += 1
            self._clear_analysis_locked()
        self.schedule_analysis()
        return self.state(), None

    def set_analysis_time(self, seconds: int) -> tuple[dict | None, str | None]:
        if seconds not in (1, 2, 5, 10):
            return None, "invalid_time"
        with self.lock:
            self.analysis_seconds = seconds
            self.request_id += 1
            self._clear_analysis_locked()
        self.schedule_analysis()
        return self.state(), None

    def _push_locked(self, move: chess.Move) -> None:
        self.board.push(move)
        self.revision += 1
        self.request_id += 1
        self._clear_analysis_locked()

    def schedule_analysis(self) -> None:
        with self.lock:
            if self.board.is_game_over(claim_draw=True) or self.board.turn != self.human_color:
                return
            if not self.engine_path:
                self.analysis_error = "engine_missing"
                return
            self.request_id += 1
            request_id = self.request_id
            revision = self.revision
            board_snapshot = self.board.copy(stack=True)
            seconds = self.analysis_seconds
            self.pending_move = None
            self.analysis_lines = []
            self.analysis_error = ""
            self.thinking = True
        threading.Thread(
            target=self._analyze,
            args=(request_id, revision, board_snapshot, seconds),
            name="stockfish-analysis",
            daemon=True,
        ).start()

    def _analyze(self, request_id: int, revision: int, board: chess.Board, seconds: int) -> None:
        try:
            with self.engine_lock:
                if not Path(self.engine_path).is_file():
                    raise FileNotFoundError("engine_missing")
                if self.engine is None or self.engine_path_running != self.engine_path:
                    if self.engine:
                        try:
                            self.engine.quit()
                        except Exception:
                            pass
                    self.engine = chess.engine.SimpleEngine.popen_uci(self.engine_path, timeout=25.0)
                    self.engine_path_running = self.engine_path

                options = self.engine.options
                config = {}
                if "Threads" in options:
                    config["Threads"] = min(max(1, (os.cpu_count() or 2) - 1), 8, options["Threads"].max)
                if "Hash" in options:
                    config["Hash"] = min(256, options["Hash"].max)
                if config:
                    self.engine.configure(config)
                count = min(3, board.legal_moves.count())
                infos = self.engine.analyse(
                    board,
                    chess.engine.Limit(time=float(seconds)),
                    multipv=count,
                    info=chess.engine.INFO_ALL,
                )
                if isinstance(infos, dict):
                    infos = [infos]
        except Exception as exc:
            with self.lock:
                if request_id == self.request_id:
                    self.analysis_error = "engine_missing" if isinstance(exc, FileNotFoundError) else "engine_failed"
                    self.thinking = False
            return

        lines = []
        for info in infos[:3]:
            pv = info.get("pv", [])
            if not pv:
                continue
            variation_board = board.copy(stack=False)
            sequence = []
            for move in pv[:8]:
                if move not in variation_board.legal_moves:
                    break
                sequence.append({"uci": move.uci(), "san": variation_board.san(move)})
                variation_board.push(move)
            if not sequence:
                continue
            score = info.get("score")
            with self.lock:
                pov = self.human_color
            relative = score.pov(pov) if score else None
            mate = relative.mate() if relative else None
            cp = relative.score(mate_score=100000) if relative else None
            lines.append({
                "uci": sequence[0]["uci"],
                "san": sequence[0]["san"],
                "scoreCp": cp,
                "mate": mate,
                "depth": info.get("depth"),
                "seldepth": info.get("seldepth"),
                "nodes": info.get("nodes"),
                "line": sequence,
            })

        with self.lock:
            if request_id != self.request_id or revision != self.revision or board.fen() != self.board.fen():
                return
            if lines:
                self.analysis_lines = lines
                self.pending_move = chess.Move.from_uci(lines[0]["uci"])
            self.thinking = False

    def state(self) -> dict:
        with self.lock:
            outcome = self.board.outcome(claim_draw=True)
            return {
                "fen": self.board.fen(),
                "humanColor": "white" if self.human_color == chess.WHITE else "black",
                "turn": "white" if self.board.turn == chess.WHITE else "black",
                "legalMoves": [move.uci() for move in self.board.legal_moves],
                "lastMove": self.board.peek().uci() if self.board.move_stack else None,
                "moveHistory": self._move_history_locked(),
                "capturedPieces": self._captured_pieces_locked(),
                "inCheck": self.board.is_check(),
                "thinking": self.thinking,
                "engineAvailable": bool(self.engine_path),
                "analysisError": self.analysis_error,
                "analysisTime": self.analysis_seconds,
                "recommendation": self.analysis_lines[0] if self.analysis_lines else None,
                "variations": self.analysis_lines,
                "gameOver": outcome is not None,
                "result": outcome.result() if outcome else None,
                "termination": outcome.termination.name.lower() if outcome else None,
            }

    def _captured_pieces_locked(self) -> dict[str, list[str]]:
        cursor = self.board.root()
        captured = {chess.WHITE: [], chess.BLACK: []}
        for move in self.board.move_stack:
            if cursor.is_capture(move):
                victim = cursor.piece_at(move.to_square)
                if victim is None and cursor.is_en_passant(move):
                    victim = chess.Piece(chess.PAWN, not cursor.turn)
                if victim:
                    symbol = chess.piece_symbol(victim.piece_type)
                    captured[cursor.turn].append(symbol.upper() if victim.color else symbol)
            cursor.push(move)
        return {
            "white": captured[chess.WHITE],
            "black": captured[chess.BLACK],
        }

    def _move_history_locked(self) -> list[dict]:
        cursor = self.board.root()
        history: list[dict] = []
        for move in self.board.move_stack:
            san = cursor.san(move)
            number = cursor.fullmove_number
            if cursor.turn == chess.WHITE:
                history.append({"number": number, "white": san, "black": ""})
            elif history and history[-1]["number"] == number:
                history[-1]["black"] = san
            else:
                history.append({"number": number, "white": "", "black": san})
            cursor.push(move)
        return history

    def pgn(self) -> str:
        with self.lock:
            game = chess.pgn.Game.from_board(self.board)
            game.headers["Event"] = "Chess Assistant"
            game.headers["White"] = "White" if self.human_color == chess.WHITE else "Opponent"
            game.headers["Black"] = "Opponent" if self.human_color == chess.WHITE else "Black"
            return game.accept(chess.pgn.StringExporter(headers=True, variations=False, comments=False))

    def close_engine(self) -> None:
        with self.engine_lock:
            if self.engine:
                try:
                    self.engine.quit()
                except Exception:
                    pass
                self.engine = None


GAME = GameSession()


class RequestHandler(BaseHTTPRequestHandler):
    server_version = "ChessAssistant/2"

    def log_message(self, _format: str, *_args) -> None:
        return

    def _headers(self, content_type: str, length: int) -> None:
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(length))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Content-Security-Policy", "default-src 'self'; style-src 'self'; script-src 'self'; connect-src 'self'; img-src 'self' data:")

    def _send_json(self, status: int, value: dict) -> None:
        payload = json.dumps(value, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self._headers("application/json; charset=utf-8", len(payload))
        self.end_headers()
        self.wfile.write(payload)

    def _send_text(self, status: int, text: str, content_type: str) -> None:
        payload = text.encode("utf-8")
        self.send_response(status)
        self._headers(content_type, len(payload))
        self.end_headers()
        self.wfile.write(payload)

    def _read_json(self) -> dict:
        size = int(self.headers.get("Content-Length", "0"))
        if size > 1_000_000:
            raise ValueError("request_too_large")
        data = self.rfile.read(size) if size else b"{}"
        value = json.loads(data.decode("utf-8"))
        return value if isinstance(value, dict) else {}

    def do_GET(self) -> None:
        path = urlparse(self.path).path
        if path == "/api/state":
            self._send_json(200, GAME.state())
            return
        if path == "/api/pgn":
            self._send_text(200, GAME.pgn(), "application/x-chess-pgn; charset=utf-8")
            return

        static_files = {
            "/": (WEB_DIR / "index.html", "text/html; charset=utf-8"),
            "/style.css": (WEB_DIR / "style.css", "text/css; charset=utf-8"),
            "/app.js": (WEB_DIR / "app.js", "text/javascript; charset=utf-8"),
            "/manifest.webmanifest": (WEB_DIR / "manifest.webmanifest", "application/manifest+json; charset=utf-8"),
            "/app-icon.svg": (WEB_DIR / "app-icon.svg", "image/svg+xml; charset=utf-8"),
        }
        entry = static_files.get(path)
        if not entry:
            self._send_text(404, "Not found", "text/plain; charset=utf-8")
            return
        file_path, content_type = entry
        try:
            self._send_text(200, file_path.read_text(encoding="utf-8"), content_type)
        except OSError:
            self._send_text(500, "Application files are missing", "text/plain; charset=utf-8")

    def do_POST(self) -> None:
        path = urlparse(self.path).path
        try:
            body = self._read_json()
        except (ValueError, UnicodeDecodeError, json.JSONDecodeError):
            self._send_json(400, {"error": "invalid_request"})
            return

        if path == "/api/new":
            self._send_json(200, GAME.new_game("black" if body.get("humanColor") == "black" else "white"))
            return
        if path == "/api/move":
            state, error = GAME.play_text(str(body.get("notation", "")))
            if error:
                self._send_json(422, {"error": error.code, "candidates": error.candidates})
            else:
                self._send_json(200, state or GAME.state())
            return
        if path == "/api/play-suggestion":
            state, error = GAME.play_suggestion()
            if error:
                self._send_json(409, {"error": error})
            else:
                self._send_json(200, state or GAME.state())
            return
        if path == "/api/undo":
            state, error = GAME.undo()
            if error:
                self._send_json(409, {"error": error})
            else:
                self._send_json(200, state or GAME.state())
            return
        if path == "/api/fen":
            state, error = GAME.load_fen(str(body.get("fen", "")))
            if error:
                self._send_json(422, {"error": error})
            else:
                self._send_json(200, state or GAME.state())
            return
        if path == "/api/settings":
            try:
                seconds = int(body.get("analysisTime", 2))
            except (TypeError, ValueError):
                seconds = 2
            state, error = GAME.set_analysis_time(seconds)
            if error:
                self._send_json(422, {"error": error})
            else:
                self._send_json(200, state or GAME.state())
            return
        self._send_json(404, {"error": "not_found"})


def open_app_window(url: str) -> None:
    program_files = os.environ.get("PROGRAMFILES(X86)", r"C:\Program Files (x86)")
    edge_candidates = (
        Path(program_files) / "Microsoft/Edge/Application/msedge.exe",
        Path(os.environ.get("PROGRAMFILES", r"C:\Program Files")) / "Microsoft/Edge/Application/msedge.exe",
    )
    edge = next((candidate for candidate in edge_candidates if candidate.is_file()), None)
    if edge:
        try:
            subprocess.Popen([str(edge), f"--app={url}"])
            return
        except OSError:
            pass
    webbrowser.open(url)


def main() -> None:
    if not WEB_DIR.is_dir():
        raise SystemExit("web klasörü bulunamadı; proje dosyalarını birlikte tut.")

    server = None
    for port in range(8765, 8790):
        try:
            server = ThreadingHTTPServer(("127.0.0.1", port), RequestHandler)
            break
        except OSError:
            continue
    if server is None:
        raise SystemExit("Yerel uygulama için uygun bir port bulunamadı.")

    server.daemon_threads = True
    url = f"http://127.0.0.1:{server.server_address[1]}"
    GAME.schedule_analysis()
    print(f"Satranç Asistanı hazır: {url}")
    threading.Timer(0.8, lambda: open_app_window(url)).start()
    try:
        server.serve_forever(poll_interval=0.25)
    except KeyboardInterrupt:
        print("Satranç Asistanı kapatılıyor…")
    finally:
        server.server_close()
        GAME.close_engine()


if __name__ == "__main__":
    main()

