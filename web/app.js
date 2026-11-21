(() => {
  const $ = (id) => document.getElementById(id);
  const pieces = { K: "king", Q: "queen", R: "rook", B: "bishop", N: "knight", P: "pawn", k: "king", q: "queen", r: "rook", b: "bishop", n: "knight", p: "pawn" };
  const pieceNames = {
    tr: { K: "Şah", Q: "Vezir", R: "Kale", B: "Fil", N: "At", P: "Piyon", k: "Şah", q: "Vezir", r: "Kale", b: "Fil", n: "At", p: "Piyon" },
    en: { K: "King", Q: "Queen", R: "Rook", B: "Bishop", N: "Knight", P: "Pawn", k: "King", q: "Queen", r: "Rook", b: "Bishop", n: "Knight", p: "Pawn" },
  };
  const text = {
    tr: {
      brand: "Satranç Asistanı", tagline: "Konumunu gör, hamleni anla, daha iyi oyna.", playAs: "Rengim", white: "Beyaz", black: "Siyah", thinkTime: "Analiz",
      fast: "Hızlı · 1 sn", balanced: "Dengeli · 2 sn", strong: "Güçlü · 5 sn", deep: "Derin · 10 sn", newGame: "Yeni oyun", downloadStockfish: "Stockfish indir",
      engineOpponent: "Stockfish analizi", you: "Sen", yourSide: "Beyaz taşlar", boardHint: "Taşa tıkla veya sürükle; yasal kareler gösterilsin.", selectedPieceMoves: "{piece} seçildi · {count} yasal hedef", capturedLabel: "Alınan taşlar: {pieces}", flipBoard: "Tahtayı çevir",
      gameStatus: "OYUN DURUMU", loading: "Yükleniyor…", connecting: "Motor ve tahta hazırlanıyor.", bestMove: "EN İYİ HAMLE", stockfish: "Stockfish",
      analysisWaiting: "Analiz sonucu burada görünür", playedIt: "Bu hamleyi oynadım", alternatives: "ALTERNATİF DEVAMLAR", topLines: "En iyi 3 çizgi", noLines: "Analiz bekleniyor…",
      enterMove: "HAMLE GİR", enterOpponent: "Rakibin hamlesini yaz veya tahtadan seç.", submitMove: "Hamleyi işle", examples: "Örnekler", moveHistory: "HAMLELER", fen: "FEN", copyPgn: "PGN kopyala", noMoves: "Henüz hamle yok.",
      localEngine: "Yerel Stockfish analizi", timeDisclaimer: "Öneriler analiz süresi ve donanıma bağlıdır.", loadPosition: "KONUM YÜKLE", pasteFen: "FEN konumunu yapıştır", cancel: "İptal", loadPositionButton: "Konumu yükle",
      sideWhite: "Beyaz taşlarla oynuyorsun.", sideBlack: "Siyah taşlarla oynuyorsun.", yourTurn: "Sıra sende", opponentTurn: "Rakibin hamlesini gir", thinking: "Stockfish konumu inceliyor…", waitAnalysis: "Analiz tamamlanınca en iyi hamle burada gösterilecek.",
      recommendIntro: "Önerilen hamle", playRecommended: "Bu hamleyi oynayabilir veya kendi hamleni girebilirsin.", waitingOpponent: "Rakibin hamlesini notasyonla yazabilir ya da tahtada oynatabilirsin.", gameOver: "Oyun bitti", result: "Sonuç", check: "Şah var", checkmate: "Şah mat", stalemate: "Pat", analysis: "Analiz", depth: "Derinlik", nodes: "düğüm", nodesPlural: "düğüm", noEngine: "Stockfish bulunamadı. Proje klasöründeki stockfish klasörünü kontrol et.", engineFailed: "Stockfish başlatılamadı. Motor dosyasını veya güvenlik izinlerini kontrol et.",
      err_empty: "Bir hamle yaz veya tahtadan hamle seç.", err_missing_square: "Hamlede hedef kareyi belirt. Örnek: kale h8 veya e2-e4.", err_not_legal: "Bu hamle mevcut konumda yasal görünmüyor. Tahtadaki olası kareleri kontrol et.", err_ambiguous: "Bu tarif birden fazla hamleye uyuyor. Şunlardan birini yaz: {moves}", err_invalid_fen: "FEN konumu geçersiz ya da satranç kurallarına aykırı.", err_nothing_to_undo: "Geri alınacak hamle yok.", err_no_suggestion: "Henüz oynanabilir bir öneri yok; analiz bitince tekrar dene.", err_invalid_time: "Bu analiz süresi desteklenmiyor.", err_not_found: "İstenen işlem bulunamadı.", err_invalid_request: "İstek okunamadı. Tekrar dene.", err_unknown: "İşlem tamamlanamadı. Tekrar dene.",
      moveAccepted: "Hamle işlendi.", fenLoaded: "Konum yüklendi.", pgnCopied: "PGN panoya kopyalandı.", pgnCopyFail: "PGN kopyalanamadı.", inputPlaceholder: "Örn. kale h8'e · a8'den h8'e · Nf3", boardLabel: "Satranç tahtası", evaluation: "Konum değerlendirmesi", moveLabel: "{piece} {from} karesinden {to} karesine", moveAria: "{square} karesine git", checkSuffix: "şah", mateScore: "Mat {n}",
    },
    en: {
      brand: "Chess Assistant", tagline: "Read the position, understand your move, play better.", playAs: "Play as", white: "White", black: "Black", thinkTime: "Analysis",
      fast: "Fast · 1 sec", balanced: "Balanced · 2 sec", strong: "Strong · 5 sec", deep: "Deep · 10 sec", newGame: "New game", downloadStockfish: "Get Stockfish",
      engineOpponent: "Stockfish analysis", you: "You", yourSide: "White pieces", boardHint: "Click or drag a piece to see its legal squares.", selectedPieceMoves: "{piece} selected · {count} legal targets", capturedLabel: "Captured pieces: {pieces}", flipBoard: "Flip board",
      gameStatus: "GAME STATUS", loading: "Loading…", connecting: "Preparing the engine and board.", bestMove: "BEST MOVE", stockfish: "Stockfish",
      analysisWaiting: "The analysis will appear here", playedIt: "I played this move", alternatives: "ALTERNATIVE LINES", topLines: "Top 3 lines", noLines: "Waiting for analysis…",
      enterMove: "ENTER A MOVE", enterOpponent: "Type the opponent's move or play it on the board.", submitMove: "Submit move", examples: "Examples", moveHistory: "MOVES", fen: "FEN", copyPgn: "Copy PGN", noMoves: "No moves yet.",
      localEngine: "Local Stockfish analysis", timeDisclaimer: "Suggestions depend on analysis time and hardware.", loadPosition: "LOAD POSITION", pasteFen: "Paste a FEN position", cancel: "Cancel", loadPositionButton: "Load position",
      sideWhite: "You are playing White.", sideBlack: "You are playing Black.", yourTurn: "Your turn", opponentTurn: "Enter opponent's move", thinking: "Stockfish is analyzing the position…", waitAnalysis: "The best move will appear here when analysis finishes.",
      recommendIntro: "Recommended move", playRecommended: "Play the suggestion or enter the move you chose.", waitingOpponent: "Enter the opponent's notation or play their move on the board.", gameOver: "Game over", result: "Result", check: "Check", checkmate: "Checkmate", stalemate: "Stalemate", analysis: "Analysis", depth: "Depth", nodes: "nodes", nodesPlural: "nodes", noEngine: "Stockfish was not found. Check the stockfish folder in the project.", engineFailed: "Stockfish could not start. Check the engine file and its permissions.",
      err_empty: "Enter a move or choose one on the board.", err_missing_square: "Include the destination square. Example: rook h8 or e2-e4.", err_not_legal: "That move is not legal in this position. Check the highlighted legal squares.", err_ambiguous: "This description matches more than one move. Choose one: {moves}", err_invalid_fen: "The FEN position is invalid or violates chess rules.", err_nothing_to_undo: "There are no moves to undo.", err_no_suggestion: "There is no move suggestion yet. Try again after analysis finishes.", err_invalid_time: "This analysis time is not supported.", err_not_found: "The requested action was not found.", err_invalid_request: "The request could not be read. Try again.", err_unknown: "The action could not be completed. Try again.",
      moveAccepted: "Move recorded.", fenLoaded: "Position loaded.", pgnCopied: "PGN copied to clipboard.", pgnCopyFail: "Could not copy the PGN.", inputPlaceholder: "e.g. rook to h8 · a8 to h8 · Nf3", boardLabel: "Chess board", evaluation: "Position evaluation", moveLabel: "{piece} from {from} to {to}", moveAria: "Move to {square}", checkSuffix: "check", mateScore: "Mate {n}",
    },
  };

  let lang = localStorage.getItem("chess-assistant-language") || "tr";
  if (!text[lang]) lang = "tr";
  let state = null;
  let selected = null;
  let flipped = false;
  let busy = false;
  let toastTimer = 0;
  let pollTimer = 0;
  let draggedFrom = null;
  const boardEl = $("board");

  const t = (key, vars = {}) => (text[lang][key] || key).replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
  const sideName = (side) => side === "white" ? t("white") : t("black");
  const setText = (id, value) => { const el = $(id); if (el) el.textContent = value; };
  const squareName = (file, rank) => String.fromCharCode(97 + file) + (rank + 1);
  const parseFen = (fen) => {
    const map = new Map();
    const rows = (fen || "").split(" ")[0].split("/");
    rows.forEach((row, rowIndex) => {
      let file = 0;
      for (const char of row) {
        if (/\d/.test(char)) file += Number(char);
        else { map.set(squareName(file, 7 - rowIndex), char); file += 1; }
      }
    });
    return map;
  };
  const coord = (uci, start = false) => uci && uci.length >= 4 ? (start ? uci.slice(0, 2) : uci.slice(2, 4)) : "";
  const friendlyMove = (uci, boardMap = parseFen(state?.fen), compact = true) => {
    const from = coord(uci, true), to = coord(uci);
    const p = boardMap.get(from) || "P";
    const piece = pieceNames[lang][p];
    const move = compact ? `${piece} ${from} → ${to}` : t("moveLabel", { piece, from, to });
    const promotion = uci?.length > 4 ? `=${lang === "tr" ? ({ Q: "Vezir", R: "Kale", B: "Fil", N: "At" }[uci.at(-1).toUpperCase()] || uci.at(-1).toUpperCase()) : ({ Q: "Queen", R: "Rook", B: "Bishop", N: "Knight" }[uci.at(-1).toUpperCase()] || uci.at(-1).toUpperCase())}` : "";
    return `${move}${promotion}`;
  };
  const friendlyLine = (line) => {
    const map = parseFen(state?.fen);
    return (line || []).map((item) => {
      const move = item.uci;
      const result = friendlyMove(move, map, true);
      const piece = map.get(coord(move, true));
      map.delete(coord(move, true));
      map.set(coord(move), move?.length > 4 ? move.at(-1).toUpperCase() : piece);
      return result;
    }).join("  ·  ");
  };
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = t("brand");
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $("languageSelect").value = lang;
    $("moveInput").placeholder = t("inputPlaceholder");
    $("board").setAttribute("aria-label", t("boardLabel"));
    $("evaluationLabel").setAttribute("aria-label", t("evaluation"));
    $("undoButton").title = lang === "tr" ? "Geri al" : "Undo";
    $("undoButton").setAttribute("aria-label", $("undoButton").title);
    $("fenButton").title = lang === "tr" ? "FEN konumu yükle" : "Load FEN position";
    $("pgnButton").title = lang === "tr" ? "Oyunu PGN olarak kopyala" : "Copy game as PGN";
    document.querySelectorAll("[data-example-tr]").forEach((button) => {
      button.textContent = lang === "tr" ? button.dataset.exampleTr : button.dataset.exampleEn;
    });
    if (state) {
      render(state);
      renderBoard();
    }
  }

  function showToast(message, success = false) {
    const toast = $("toast");
    toast.textContent = message;
    toast.classList.toggle("success", success);
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 4400);
  }

  function friendlyError(code, candidates = []) {
    const key = `err_${code}`;
    const localized = candidates.map((candidate) => /^[a-h][1-8][a-h][1-8][qrbn]?$/i.test(candidate)
      ? friendlyMove(candidate, parseFen(state?.fen), true)
      : candidate);
    return t(key === "err_undefined" ? "err_unknown" : key, { moves: localized.join(", ") }) || t("err_unknown");
  }

  async function request(path, body) {
    const response = await fetch(path, body ? { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) } : {});
    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json") ? await response.json() : await response.text();
    if (!response.ok) {
      const code = typeof data === "object" ? data.error : "unknown";
      throw Object.assign(new Error(friendlyError(code, data.candidates)), { code });
    }
    return data;
  }

  function renderBoard() {
    if (!state) return;
    const map = parseFen(state.fen);
    const legal = (state.legalMoves || []).filter((move) => coord(move, true) === selected);
    const legalDestinations = new Set(legal.map((move) => coord(move)));
    const lastFrom = coord(state.lastMove, true), lastTo = coord(state.lastMove);
    const isWhite = state.turn === "white";
    let checkSquare = "";
    if (state.inCheck) {
      const king = isWhite ? "K" : "k";
      for (const [square, piece] of map) if (piece === king) checkSquare = square;
    }
    const files = flipped ? [7, 6, 5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5, 6, 7];
    const ranks = flipped ? [0, 1, 2, 3, 4, 5, 6, 7] : [7, 6, 5, 4, 3, 2, 1, 0];
    const fragment = document.createDocumentFragment();
    ranks.forEach((rank, row) => files.forEach((file, col) => {
      const square = squareName(file, rank);
      const piece = map.get(square);
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = `square ${(file + rank) % 2 ? "dark" : "light"}`;
      cell.dataset.square = square;
      cell.setAttribute("role", "gridcell");
      cell.setAttribute("aria-label", piece ? `${pieceNames[lang][piece]}, ${square}` : square);
      cell.draggable = Boolean(piece && (piece === piece.toUpperCase()) === isWhite);
      if (square === selected) cell.classList.add("selected");
      if (square === lastFrom || square === lastTo) cell.classList.add("last-move");
      if (square === checkSquare) cell.classList.add("check");
      if (legalDestinations.has(square)) {
        cell.classList.add("legal-target");
        cell.setAttribute("aria-label", `${piece ? `${pieceNames[lang][piece]}, ` : ""}${t("moveAria", { square })}`);
        const marker = document.createElement("span");
        marker.className = map.has(square) ? "legal-capture" : "legal-dot";
        cell.append(marker);
      }
      if (piece) {
        const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        icon.setAttribute("class", `piece ${piece === piece.toUpperCase() ? "white" : "black"}`);
        icon.setAttribute("viewBox", "0 0 100 100");
        icon.setAttribute("aria-hidden", "true");
        const symbol = document.createElementNS("http://www.w3.org/2000/svg", "use");
        symbol.setAttribute("href", `#piece-${pieces[piece]}`);
        icon.append(symbol);
        cell.append(icon);
      }
      if (col === 0) {
        const rankLabel = document.createElement("span");
        rankLabel.className = "coordinate rank";
        rankLabel.textContent = String(rank + 1);
        cell.append(rankLabel);
      }
      if (row === 7) {
        const fileLabel = document.createElement("span");
        fileLabel.className = "coordinate file";
        fileLabel.textContent = String.fromCharCode(97 + file);
        cell.append(fileLabel);
      }
      fragment.append(cell);
    }));
    boardEl.replaceChildren(fragment);
    if (selected) {
      const selectedPiece = map.get(selected);
      const count = legalDestinations.size;
      setText("boardHintText", t("selectedPieceMoves", { piece: selectedPiece ? pieceNames[lang][selectedPiece] : "", count }));
    } else {
      setText("boardHintText", t("boardHint"));
    }
  }

  function renderCapturedPieces() {
    const captured = state.capturedPieces || {};
    const opponentColor = state.humanColor === "white" ? "black" : "white";
    [["humanCaptured", state.humanColor], ["opponentCaptured", opponentColor]].forEach(([id, color]) => {
      const element = $(id);
      const taken = captured[color] || [];
      element.innerHTML = taken.map((piece) => `<svg class="captured-piece ${piece === piece.toUpperCase() ? "white" : "black"}" viewBox="0 0 100 100" aria-hidden="true"><use href="#piece-${pieces[piece]}"></use></svg>`).join("");
      const names = taken.map((piece) => pieceNames[lang][piece]).join(", ");
      element.setAttribute("aria-label", t("capturedLabel", { pieces: names || "—" }));
      element.title = names;
    });
  }

  function renderHistory() {
    const rows = state.moveHistory || [];
    const root = $("moveHistory");
    if (!rows.length) {
      root.innerHTML = `<div class="history-empty">${escapeHtml(t("noMoves"))}</div>`;
      return;
    }
    root.innerHTML = rows.map((row) => `<div class="history-row"><span class="history-number">${row.number}.</span><span class="history-move">${escapeHtml(row.white || "…")}</span><span class="history-move">${escapeHtml(row.black || "")}</span></div>`).join("");
    root.scrollTop = root.scrollHeight;
  }

  function renderAnalysis() {
    const reco = state.recommendation;
    $("engineBanner").hidden = state.engineAvailable && !state.analysisError;
    if (!state.engineAvailable || state.analysisError) setText("engineBannerText", t(state.analysisError === "engine_failed" ? "engineFailed" : "noEngine"));
    const engineDot = $("engineBadge").querySelector(".engine-dot");
    engineDot.style.background = state.engineAvailable && !state.analysisError ? "var(--mint)" : "var(--danger)";
    setText("bestMoveFriendly", reco ? friendlyMove(reco.uci, undefined, false) : "—");
    setText("bestMoveSan", reco ? `${t("analysis")}: ${reco.san}` : "");
    const score = reco?.scoreCp;
    let scoreText = "—";
    if (reco?.mate != null) scoreText = t("mateScore", { n: reco.mate });
    else if (score != null) scoreText = `${score >= 0 ? "+" : ""}${(score / 100).toFixed(2)}`;
    setText("bestScore", scoreText);
    setText("depthDetail", state.thinking ? t("thinking") : reco ? `${t("depth")} ${reco.depth || "—"}${reco.seldepth ? ` / ${reco.seldepth}` : ""}` : state.analysisError ? t(state.analysisError === "engine_missing" ? "noEngine" : "engineFailed") : t("analysisWaiting"));
    setText("nodesDetail", reco?.nodes ? `${Number(reco.nodes).toLocaleString(lang === "tr" ? "tr-TR" : "en-US")} ${t("nodes")}` : "");
    $("playSuggestionButton").disabled = busy || state.thinking || !reco || state.turn !== state.humanColor || state.gameOver;
    const humanWhiteScore = (score || 0) * (state.humanColor === "white" ? 1 : -1);
    const whitePercent = Math.max(5, Math.min(95, 50 + 40 * Math.tanh(humanWhiteScore / 500)));
    $("evaluationFill").style.height = `${whitePercent}%`;
    setText("evaluationLabel", reco?.mate != null ? `M${reco.mate}` : score == null ? "—" : scoreText);
    const variations = state.variations || [];
    $("variationsList").innerHTML = variations.length ? variations.map((line, index) => {
      const number = line.mate != null ? `M${line.mate}` : line.scoreCp == null ? "—" : `${line.scoreCp >= 0 ? "+" : ""}${(line.scoreCp / 100).toFixed(2)}`;
      return `<button type="button" class="variation-row" data-variation="${index}" title="${escapeHtml(friendlyLine(line.line))}"><span class="variation-rank">${index + 1}.</span><span class="variation-line">${escapeHtml(friendlyLine(line.line))}</span><span class="variation-score">${escapeHtml(number)}</span></button>`;
    }).join("") : `<div class="empty-line">${escapeHtml(state.thinking ? t("thinking") : t("noLines"))}</div>`;
  }

  function renderStatus() {
    const myTurn = state.turn === state.humanColor;
    const sideCaption = state.humanColor === "white" ? t("yourSide") : (lang === "tr" ? "Siyah taşlar" : "Black pieces");
    setText("humanCaption", sideCaption);
    setText("opponentName", "Stockfish");
    setText("opponentCaption", t("engineOpponent"));
    $("humanAvatar").textContent = state.humanColor === "white" ? "♙" : "♟";
    $("opponentAvatar")?.setAttribute("aria-hidden", "true");
    renderCapturedPieces();
    const captionEl = $("inputPrompt");
    captionEl.textContent = state.gameOver ? `${t("result")}: ${state.result}` : myTurn ? t("playRecommended") : t("waitingOpponent");
    if (state.gameOver) {
      setText("turnTitle", `${t("gameOver")} · ${state.result}`);
      setText("turnDescription", state.termination === "checkmate" ? t("checkmate") : state.termination === "stalemate" ? t("stalemate") : t("result"));
    } else if (state.thinking) {
      setText("turnTitle", t("thinking"));
      setText("turnDescription", `${sideName(state.humanColor)} · ${t("waitAnalysis")}`);
    } else if (myTurn) {
      setText("turnTitle", t("yourTurn"));
      setText("turnDescription", `${state.humanColor === "white" ? t("sideWhite") : t("sideBlack")} ${state.inCheck ? `· ${t("check")}` : ""}`);
    } else {
      setText("turnTitle", t("opponentTurn"));
      setText("turnDescription", `${sideName(state.turn)} ${state.inCheck ? `· ${t("check")}` : ""}`);
    }
    $("sideSelect").value = state.humanColor;
    $("timeSelect").value = String(state.analysisTime);
    $("undoButton").disabled = !state.moveHistory?.length || busy;
    $("submitMoveButton").disabled = busy;
    $("newGameButton").disabled = busy;
    $("moveInput").disabled = busy;
  }

  function render(nextState) {
    const sideChanged = state && state.humanColor !== nextState.humanColor;
    const changedPosition = state?.fen !== nextState.fen;
    const firstRender = state === null;
    const boardChanged = firstRender || sideChanged || changedPosition || state.lastMove !== nextState.lastMove;
    if (firstRender || sideChanged) flipped = nextState.humanColor === "black";
    state = nextState;
    if (changedPosition) selected = null;
    if (boardChanged) renderBoard();
    renderStatus();
    renderAnalysis();
    renderHistory();
    clearTimeout(pollTimer);
    if (state.thinking) pollTimer = setTimeout(sync, 450);
  }

  async function sync() {
    if (busy) {
      pollTimer = setTimeout(sync, 450);
      return;
    }
    try { render(await request("/api/state")); }
    catch {
      setText("turnTitle", t("err_unknown"));
      if (state?.thinking) pollTimer = setTimeout(sync, 700);
    }
  }

  async function act(path, body, successMessage = "") {
    if (busy) return null;
    busy = true;
    renderStatus();
    try {
      const next = await request(path, body);
      render(next);
      if (successMessage) showToast(t(successMessage), true);
      return next;
    } catch (error) {
      showToast(error.message || t("err_unknown"));
      return null;
    } finally {
      busy = false;
      if (state) { renderStatus(); renderAnalysis(); }
    }
  }

  function legalMove(from, to) {
    return (state?.legalMoves || []).find((move) => coord(move, true) === from && coord(move) === to);
  }

  async function playBoardMove(from, to) {
    if (!legalMove(from, to)) return null;
    selected = null;
    draggedFrom = null;
    return act("/api/move", { notation: `${from}${to}` }, "moveAccepted");
  }

  function chooseSquare(square) {
    const map = parseFen(state.fen);
    if (selected && legalMove(selected, square)) {
      void playBoardMove(selected, square);
      return;
    }
    const piece = map.get(square);
    const isTurnPiece = piece && (piece === piece.toUpperCase()) === (state.turn === "white");
    selected = isTurnPiece ? square : null;
    renderBoard();
  }

  boardEl.addEventListener("dragstart", (event) => {
    const cell = event.target.closest("[data-square]");
    if (!cell || !state || busy || state.gameOver || !cell.draggable) {
      event.preventDefault();
      return;
    }
    draggedFrom = cell.dataset.square;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", draggedFrom);
    cell.classList.add("drag-origin");
  });

  boardEl.addEventListener("dragover", (event) => {
    const cell = event.target.closest("[data-square]");
    if (draggedFrom && cell && legalMove(draggedFrom, cell.dataset.square)) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    }
  });

  boardEl.addEventListener("drop", async (event) => {
    const cell = event.target.closest("[data-square]");
    if (!draggedFrom || !cell) return;
    event.preventDefault();
    const from = draggedFrom;
    await playBoardMove(from, cell.dataset.square);
    renderBoard();
  });

  boardEl.addEventListener("dragend", () => {
    draggedFrom = null;
    if (state) renderBoard();
  });

  boardEl.addEventListener("click", async (event) => {
    const cell = event.target.closest("[data-square]");
    if (!cell || !state || busy || state.gameOver) return;
    chooseSquare(cell.dataset.square);
  });

  $("moveForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const notation = $("moveInput").value.trim();
    if (!notation) { showToast(t("err_empty")); return; }
    const next = await act("/api/move", { notation }, "moveAccepted");
    if (next) $("moveInput").value = "";
  });
  document.querySelectorAll("[data-example-tr]").forEach((button) => {
    button.addEventListener("click", () => {
      $("moveInput").value = lang === "tr" ? button.dataset.exampleTr : button.dataset.exampleEn;
      $("moveInput").focus();
    });
  });
  $("playSuggestionButton").addEventListener("click", () => act("/api/play-suggestion", {}, "moveAccepted"));
  $("newGameButton").addEventListener("click", () => act("/api/new", { humanColor: $("sideSelect").value }));
  $("sideSelect").addEventListener("change", () => act("/api/new", { humanColor: $("sideSelect").value }));
  $("timeSelect").addEventListener("change", () => act("/api/settings", { analysisTime: Number($("timeSelect").value) }));
  $("languageSelect").addEventListener("change", () => {
    lang = $("languageSelect").value;
    localStorage.setItem("chess-assistant-language", lang);
    applyLanguage();
  });
  $("flipBoardButton").addEventListener("click", () => { flipped = !flipped; renderBoard(); });
  $("undoButton").addEventListener("click", () => act("/api/undo", {}, ""));
  $("fenButton").addEventListener("click", () => {
    $("fenInput").value = state?.fen || "";
    $("fenDialog").showModal();
  });
  $("closeFenDialog").addEventListener("click", () => $("fenDialog").close());
  $("cancelFenButton").addEventListener("click", () => $("fenDialog").close());
  $("fenForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const next = await act("/api/fen", { fen: $("fenInput").value }, "fenLoaded");
    if (next) $("fenDialog").close();
  });
  $("pgnButton").addEventListener("click", async () => {
    try {
      const pgn = await request("/api/pgn");
      await navigator.clipboard.writeText(pgn);
      showToast(t("pgnCopied"), true);
    } catch { showToast(t("pgnCopyFail")); }
  });

  applyLanguage();
  sync();
})();

