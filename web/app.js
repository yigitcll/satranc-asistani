(() => {
  const $ = (id) => document.getElementById(id);
  const pieces = { K: "king", Q: "queen", R: "rook", B: "bishop", N: "knight", P: "pawn", k: "king", q: "queen", r: "rook", b: "bishop", n: "knight", p: "pawn" };
  const pieceNames = {
    tr: { K: "Şah", Q: "Vezir", R: "Kale", B: "Fil", N: "At", P: "Piyon", k: "Şah", q: "Vezir", r: "Kale", b: "Fil", n: "At", p: "Piyon" },
    en: { K: "King", Q: "Queen", R: "Rook", B: "Bishop", N: "Knight", P: "Pawn", k: "King", q: "Queen", r: "Rook", b: "Bishop", n: "Knight", p: "Pawn" },
    es: { K: "Rey", Q: "Dama", R: "Torre", B: "Alfil", N: "Caballo", P: "Peón", k: "Rey", q: "Dama", r: "Torre", b: "Alfil", n: "Caballo", p: "Peón" },
    ru: { K: "Король", Q: "Ферзь", R: "Ладья", B: "Слон", N: "Конь", P: "Пешка", k: "Король", q: "Ферзь", r: "Ладья", b: "Слон", n: "Конь", p: "Пешка" },
  };
  const promotionNames = {
    tr: { Q: "Vezir", R: "Kale", B: "Fil", N: "At" },
    en: { Q: "Queen", R: "Rook", B: "Bishop", N: "Knight" },
    es: { Q: "Dama", R: "Torre", B: "Alfil", N: "Caballo" },
    ru: { Q: "Ферзь", R: "Ладья", B: "Слон", N: "Конь" },
  };
  const text = {
    tr: {
      brand: "Satranç Asistanı", tagline: "Konumunu gör, hamleni anla, daha iyi oyna.", playAs: "Rengim", white: "Beyaz", black: "Siyah", thinkTime: "Analiz",
      fast: "Hızlı · 1 sn", balanced: "Dengeli · 2 sn", strong: "Güçlü · 5 sn", deep: "Derin · 10 sn", newGame: "Yeni oyun", downloadStockfish: "Stockfish indir",
      engineOpponent: "Stockfish analizi", you: "Sen", yourSide: "Beyaz taşlar", boardHint: "Sağ tık+sürükle: ok · sağ tık: daire · Esc: temizle.", selectedPieceMoves: "{piece} seçildi · {count} yasal hedef", capturedLabel: "Alınan taşlar: {pieces}", flipBoard: "Tahtayı çevir", clearMarks: "İşaretleri temizle", lineShown: "Devam yolu tahtada gösterildi.", whiteAdvantage: "Beyaz avantajı {score}", analyzing: "Stockfish analiz ediyor", markColors: "Shift ile kırmızı, Ctrl ile mavi ok veya daire çiz.",
      gameStatus: "OYUN DURUMU", loading: "Yükleniyor…", connecting: "Motor ve tahta hazırlanıyor.", bestMove: "EN İYİ HAMLE", stockfish: "Stockfish",
      analysisWaiting: "Analiz sonucu burada görünür", playedIt: "Bu hamleyi oynadım", alternatives: "ALTERNATİF DEVAMLAR", topLines: "En iyi 3 çizgi", noLines: "Analiz bekleniyor…",
      enterMove: "HAMLE GİR", enterOpponent: "Rakibin hamlesini yaz veya tahtadan seç.", submitMove: "Hamleyi işle", examples: "Örnekler", moveHistory: "HAMLELER", fen: "FEN", copyPgn: "PGN kopyala", loadPgn: "PGN yükle", noMoves: "Henüz hamle yok.",
      localEngine: "Yerel Stockfish analizi", timeDisclaimer: "Öneriler analiz süresi ve donanıma bağlıdır.", loadPosition: "KONUM YÜKLE", pasteFen: "FEN konumunu yapıştır", cancel: "İptal", loadPositionButton: "Konumu yükle",
      sideWhite: "Beyaz taşlarla oynuyorsun.", sideBlack: "Siyah taşlarla oynuyorsun.", yourTurn: "Sıra sende", opponentTurn: "Rakibin hamlesini gir", thinking: "Stockfish konumu inceliyor…", waitAnalysis: "Analiz tamamlanınca en iyi hamle burada gösterilecek.",
      recommendIntro: "Önerilen hamle", playRecommended: "Bu hamleyi oynayabilir veya kendi hamleni girebilirsin.", waitingOpponent: "Rakibin hamlesini notasyonla yazabilir ya da tahtada oynatabilirsin.", gameOver: "Oyun bitti", result: "Sonuç", check: "Şah var", checkmate: "Şah mat", stalemate: "Pat", analysis: "Analiz", depth: "Derinlik", nodes: "düğüm", nodesPlural: "düğüm", noEngine: "Stockfish bulunamadı. Proje klasöründeki stockfish klasörünü kontrol et.", engineFailed: "Stockfish başlatılamadı. Motor dosyasını veya güvenlik izinlerini kontrol et.",
      err_empty: "Bir hamle yaz veya tahtadan hamle seç.", err_missing_square: "Hamlede hedef kareyi belirt. Örnek: kale h8 veya e2-e4.", err_not_legal: "Bu hamle mevcut konumda yasal görünmüyor. Tahtadaki olası kareleri kontrol et.", err_ambiguous: "Bu tarif birden fazla hamleye uyuyor. Şunlardan birini yaz: {moves}", err_invalid_fen: "FEN konumu geçersiz ya da satranç kurallarına aykırı.", err_nothing_to_undo: "Geri alınacak hamle yok.", err_no_suggestion: "Henüz oynanabilir bir öneri yok; analiz bitince tekrar dene.", err_invalid_time: "Bu analiz süresi desteklenmiyor.", err_not_found: "İstenen işlem bulunamadı.", err_invalid_request: "İstek okunamadı. Tekrar dene.", err_unknown: "İşlem tamamlanamadı. Tekrar dene.",
      moveAccepted: "Hamle işlendi.", fenLoaded: "Konum yüklendi.", pgnCopied: "PGN panoya kopyalandı.", pgnCopyFail: "PGN kopyalanamadı.", pgnLoaded: "Parti içe aktarıldı; hamle geçmişinden konum seçebilirsin.", loadPgnButton: "Partiyi içe aktar", pastePgn: "Tamamlanmış oyunun PGN metnini yapıştır", err_empty_pgn: "İçe aktarmak için PGN metnini yapıştır.", err_invalid_pgn: "Bu PGN okunamadı. Tamamlanmış oyunun PGN metnini kontrol et.", err_invalid_review_ply: "Bu hamle konumu açılamadı.", err_not_reviewing_pgn: "Önce bir PGN partisi yükle.", reviewHint: "Bir hamleye tıklayarak o konumu Stockfish ile incele.", reviewAfterMove: "{move} hamlesinden sonraki konumu göster", reviewingPosition: "Parti incelemesi", reviewSideToMove: "Sıradaki taraf: {side}", reviewModeCaption: "Bitmiş oyunun hamlelerini inceleyebilirsin.", inputPlaceholder: "Örn. kale h8'e · a8'den h8'e · Nf3", boardLabel: "Satranç tahtası", evaluation: "Konum değerlendirmesi", moveLabel: "{piece} {from} karesinden {to} karesine", moveAria: "{square} karesine git", checkSuffix: "şah", mateScore: "Mat {n}", blackPieces: "Siyah taşlar", undoTitle: "Geri al", loadFenTitle: "FEN konumu yükle", copyPgnTitle: "Oyunu PGN olarak kopyala", closeDialog: "Kapat", languageLabel: "Dil",
    },
    en: {
      brand: "Chess Assistant", tagline: "Read the position, understand your move, play better.", playAs: "Play as", white: "White", black: "Black", thinkTime: "Analysis",
      fast: "Fast · 1 sec", balanced: "Balanced · 2 sec", strong: "Strong · 5 sec", deep: "Deep · 10 sec", newGame: "New game", downloadStockfish: "Get Stockfish",
      engineOpponent: "Stockfish analysis", you: "You", yourSide: "White pieces", boardHint: "Right-drag: arrow · right-click: circle · Esc: clear.", selectedPieceMoves: "{piece} selected · {count} legal targets", capturedLabel: "Captured pieces: {pieces}", flipBoard: "Flip board", clearMarks: "Clear marks", lineShown: "Continuation shown on the board.", whiteAdvantage: "White advantage {score}", analyzing: "Stockfish is analyzing", markColors: "Hold Shift for red or Ctrl for blue annotations.",
      gameStatus: "GAME STATUS", loading: "Loading…", connecting: "Preparing the engine and board.", bestMove: "BEST MOVE", stockfish: "Stockfish",
      analysisWaiting: "The analysis will appear here", playedIt: "I played this move", alternatives: "ALTERNATIVE LINES", topLines: "Top 3 lines", noLines: "Waiting for analysis…",
      enterMove: "ENTER A MOVE", enterOpponent: "Type the opponent's move or play it on the board.", submitMove: "Submit move", examples: "Examples", moveHistory: "MOVES", fen: "FEN", copyPgn: "Copy PGN", loadPgn: "Load PGN", noMoves: "No moves yet.",
      localEngine: "Local Stockfish analysis", timeDisclaimer: "Suggestions depend on analysis time and hardware.", loadPosition: "LOAD POSITION", pasteFen: "Paste a FEN position", cancel: "Cancel", loadPositionButton: "Load position",
      sideWhite: "You are playing White.", sideBlack: "You are playing Black.", yourTurn: "Your turn", opponentTurn: "Enter opponent's move", thinking: "Stockfish is analyzing the position…", waitAnalysis: "The best move will appear here when analysis finishes.",
      recommendIntro: "Recommended move", playRecommended: "Play the suggestion or enter the move you chose.", waitingOpponent: "Enter the opponent's notation or play their move on the board.", gameOver: "Game over", result: "Result", check: "Check", checkmate: "Checkmate", stalemate: "Stalemate", analysis: "Analysis", depth: "Depth", nodes: "nodes", nodesPlural: "nodes", noEngine: "Stockfish was not found. Check the stockfish folder in the project.", engineFailed: "Stockfish could not start. Check the engine file and its permissions.",
      err_empty: "Enter a move or choose one on the board.", err_missing_square: "Include the destination square. Example: rook h8 or e2-e4.", err_not_legal: "That move is not legal in this position. Check the highlighted legal squares.", err_ambiguous: "This description matches more than one move. Choose one: {moves}", err_invalid_fen: "The FEN position is invalid or violates chess rules.", err_nothing_to_undo: "There are no moves to undo.", err_no_suggestion: "There is no move suggestion yet. Try again after analysis finishes.", err_invalid_time: "This analysis time is not supported.", err_not_found: "The requested action was not found.", err_invalid_request: "The request could not be read. Try again.", err_unknown: "The action could not be completed. Try again.",
      moveAccepted: "Move recorded.", fenLoaded: "Position loaded.", pgnCopied: "PGN copied to clipboard.", pgnCopyFail: "Could not copy the PGN.", pgnLoaded: "Game imported; click a move to review its position.", loadPgnButton: "Import game", pastePgn: "Paste the PGN text of a finished game", err_empty_pgn: "Paste PGN text to import.", err_invalid_pgn: "This PGN could not be read. Check the finished game's PGN text.", err_invalid_review_ply: "That move position could not be opened.", err_not_reviewing_pgn: "Load a PGN game first.", reviewHint: "Click a move to review that position with Stockfish.", reviewAfterMove: "Show position after {move}", reviewingPosition: "Game review", reviewSideToMove: "Side to move: {side}", reviewModeCaption: "Review the moves from the finished game.", inputPlaceholder: "e.g. rook to h8 · a8 to h8 · Nf3", boardLabel: "Chess board", evaluation: "Position evaluation", moveLabel: "{piece} from {from} to {to}", moveAria: "Move to {square}", checkSuffix: "check", mateScore: "Mate {n}", blackPieces: "Black pieces", undoTitle: "Undo", loadFenTitle: "Load FEN position", copyPgnTitle: "Copy game as PGN", closeDialog: "Close", languageLabel: "Language",
    },
    es: {
      brand: "Asistente de Ajedrez", tagline: "Entiende la posición, aprende tus jugadas y juega mejor.", playAs: "Jugar con", white: "Blancas", black: "Negras", thinkTime: "Análisis",
      fast: "Rápido · 1 s", balanced: "Equilibrado · 2 s", strong: "Fuerte · 5 s", deep: "Profundo · 10 s", newGame: "Nueva partida", downloadStockfish: "Descargar Stockfish",
      engineOpponent: "Análisis de Stockfish", you: "Tú", yourSide: "Piezas blancas", blackPieces: "Piezas negras", boardHint: "Clic derecho y arrastra: flecha · clic derecho: círculo · Esc: borrar.", selectedPieceMoves: "{piece} seleccionada · {count} destinos legales", capturedLabel: "Piezas capturadas: {pieces}", flipBoard: "Girar tablero", clearMarks: "Borrar marcas", lineShown: "La continuación se muestra en el tablero.", whiteAdvantage: "Ventaja de blancas {score}", analyzing: "Stockfish está analizando", markColors: "Mayús: marcas rojas · Ctrl: marcas azules.",
      gameStatus: "ESTADO DE LA PARTIDA", loading: "Cargando…", connecting: "Preparando el motor y el tablero.", bestMove: "MEJOR JUGADA", stockfish: "Stockfish",
      analysisWaiting: "El análisis aparecerá aquí", playedIt: "Ya jugué esta jugada", alternatives: "LÍNEAS ALTERNATIVAS", topLines: "3 mejores líneas", noLines: "Esperando el análisis…",
      enterMove: "INTRODUCIR JUGADA", enterOpponent: "Escribe la jugada rival o hazla en el tablero.", submitMove: "Procesar jugada", examples: "Ejemplos", moveHistory: "JUGADAS", fen: "FEN", copyPgn: "Copiar PGN", loadPgn: "Cargar PGN", noMoves: "Aún no hay jugadas.",
      localEngine: "Análisis local con Stockfish", timeDisclaimer: "Las sugerencias dependen del tiempo de análisis y del equipo.", loadPosition: "CARGAR POSICIÓN", pasteFen: "Pega una posición FEN", cancel: "Cancelar", loadPositionButton: "Cargar posición",
      sideWhite: "Juegas con blancas.", sideBlack: "Juegas con negras.", yourTurn: "Tu turno", opponentTurn: "Introduce la jugada rival", thinking: "Stockfish está analizando la posición…", waitAnalysis: "La mejor jugada aparecerá cuando termine el análisis.",
      recommendIntro: "Jugada recomendada", playRecommended: "Puedes jugar la sugerencia o introducir tu propia jugada.", waitingOpponent: "Escribe la notación rival o juega su movimiento en el tablero.", gameOver: "Partida terminada", result: "Resultado", check: "Jaque", checkmate: "Jaque mate", stalemate: "Ahogado", analysis: "Análisis", depth: "Profundidad", nodes: "nodos", nodesPlural: "nodos", noEngine: "No se encontró Stockfish. Comprueba la carpeta stockfish del proyecto.", engineFailed: "No se pudo iniciar Stockfish. Comprueba el archivo del motor y sus permisos.",
      err_empty: "Escribe una jugada o elígela en el tablero.", err_missing_square: "Indica la casilla de destino. Ejemplo: torre h8 o e2-e4.", err_not_legal: "Esa jugada no es legal en esta posición. Comprueba las casillas resaltadas.", err_ambiguous: "La descripción coincide con varias jugadas. Elige una: {moves}", err_invalid_fen: "La posición FEN no es válida o incumple las reglas.", err_nothing_to_undo: "No hay jugadas que deshacer.", err_no_suggestion: "Aún no hay una sugerencia. Vuelve a intentarlo cuando termine el análisis.", err_invalid_time: "Ese tiempo de análisis no está disponible.", err_not_found: "No se encontró la operación solicitada.", err_invalid_request: "No se pudo leer la solicitud. Inténtalo de nuevo.", err_unknown: "No se pudo completar la operación. Inténtalo de nuevo.",
      moveAccepted: "Jugada registrada.", fenLoaded: "Posición cargada.", pgnCopied: "PGN copiado.", pgnCopyFail: "No se pudo copiar el PGN.", pgnLoaded: "Partida importada; haz clic en una jugada para revisar esa posición.", loadPgnButton: "Importar partida", pastePgn: "Pega el PGN de una partida terminada", err_empty_pgn: "Pega el texto PGN que quieras importar.", err_invalid_pgn: "No se pudo leer este PGN. Comprueba el texto de la partida terminada.", err_invalid_review_ply: "No se pudo abrir esa posición de la partida.", err_not_reviewing_pgn: "Primero carga una partida PGN.", reviewHint: "Haz clic en una jugada para analizar esa posición con Stockfish.", reviewAfterMove: "Mostrar la posición después de {move}", reviewingPosition: "Análisis de la partida", reviewSideToMove: "Turno de: {side}", reviewModeCaption: "Revisa las jugadas de la partida terminada.", inputPlaceholder: "p. ej., torre a h8 · de a8 a h8 · caballo a f3", boardLabel: "Tablero de ajedrez", evaluation: "Evaluación de la posición", moveLabel: "{piece} de {from} a {to}", moveAria: "Mover a {square}", checkSuffix: "jaque", mateScore: "Mate {n}", undoTitle: "Deshacer", loadFenTitle: "Cargar posición FEN", copyPgnTitle: "Copiar partida como PGN", closeDialog: "Cerrar", languageLabel: "Idioma",
    },
    ru: {
      brand: "Шахматный помощник", tagline: "Понимай позицию, разбирай ходы и играй сильнее.", playAs: "Играть за", white: "Белых", black: "Чёрных", thinkTime: "Анализ",
      fast: "Быстрый · 1 с", balanced: "Обычный · 2 с", strong: "Сильный · 5 с", deep: "Глубокий · 10 с", newGame: "Новая партия", downloadStockfish: "Скачать Stockfish",
      engineOpponent: "Анализ Stockfish", you: "Вы", yourSide: "Белые фигуры", blackPieces: "Чёрные фигуры", boardHint: "Правая кнопка и перетаскивание: стрелка · щелчок: круг · Esc: очистить.", selectedPieceMoves: "Выбрана фигура «{piece}» · допустимых ходов: {count}", capturedLabel: "Взятые фигуры: {pieces}", flipBoard: "Перевернуть доску", clearMarks: "Убрать пометки", lineShown: "Продолжение показано стрелками на доске.", whiteAdvantage: "Преимущество белых {score}", analyzing: "Stockfish анализирует позицию", markColors: "Shift — красные пометки · Ctrl — синие.",
      gameStatus: "СОСТОЯНИЕ ПАРТИИ", loading: "Загрузка…", connecting: "Подготовка движка и доски.", bestMove: "ЛУЧШИЙ ХОД", stockfish: "Stockfish",
      analysisWaiting: "Здесь появится результат анализа", playedIt: "Я сделал этот ход", alternatives: "АЛЬТЕРНАТИВНЫЕ ПРОДОЛЖЕНИЯ", topLines: "Лучшие 3 варианта", noLines: "Ожидание анализа…",
      enterMove: "ВВЕСТИ ХОД", enterOpponent: "Введите ход соперника или сделайте его на доске.", submitMove: "Применить ход", examples: "Примеры", moveHistory: "ХОДЫ", fen: "FEN", copyPgn: "Копировать PGN", loadPgn: "Загрузить PGN", noMoves: "Ходов пока нет.",
      localEngine: "Локальный анализ Stockfish", timeDisclaimer: "Подсказки зависят от времени анализа и мощности компьютера.", loadPosition: "ЗАГРУЗИТЬ ПОЗИЦИЮ", pasteFen: "Вставьте позицию FEN", cancel: "Отмена", loadPositionButton: "Загрузить позицию",
      sideWhite: "Вы играете белыми.", sideBlack: "Вы играете чёрными.", yourTurn: "Ваш ход", opponentTurn: "Введите ход соперника", thinking: "Stockfish анализирует позицию…", waitAnalysis: "Лучший ход появится после завершения анализа.",
      recommendIntro: "Рекомендуемый ход", playRecommended: "Сделайте рекомендованный ход или введите свой.", waitingOpponent: "Введите запись хода соперника или сделайте ход на доске.", gameOver: "Партия завершена", result: "Результат", check: "Шах", checkmate: "Мат", stalemate: "Пат", analysis: "Анализ", depth: "Глубина", nodes: "узлов", nodesPlural: "узлов", noEngine: "Stockfish не найден. Проверьте папку stockfish в проекте.", engineFailed: "Не удалось запустить Stockfish. Проверьте файл движка и разрешения.",
      err_empty: "Введите ход или выберите его на доске.", err_missing_square: "Укажите поле назначения. Например: ладья h8 или e2-e4.", err_not_legal: "Этот ход недопустим в текущей позиции. Проверьте подсвеченные поля.", err_ambiguous: "Описание подходит к нескольким ходам. Выберите один: {moves}", err_invalid_fen: "Позиция FEN некорректна или нарушает правила.", err_nothing_to_undo: "Нет ходов для отмены.", err_no_suggestion: "Подсказки пока нет. Попробуйте снова после анализа.", err_invalid_time: "Такое время анализа не поддерживается.", err_not_found: "Запрошенная операция не найдена.", err_invalid_request: "Не удалось прочитать запрос. Попробуйте ещё раз.", err_unknown: "Не удалось выполнить действие. Попробуйте ещё раз.",
      moveAccepted: "Ход записан.", fenLoaded: "Позиция загружена.", pgnCopied: "PGN скопирован.", pgnCopyFail: "Не удалось скопировать PGN.", pgnLoaded: "Партия загружена; нажмите на ход, чтобы изучить позицию.", loadPgnButton: "Импортировать партию", pastePgn: "Вставьте PGN завершённой партии", err_empty_pgn: "Вставьте текст PGN для импорта.", err_invalid_pgn: "Не удалось прочитать этот PGN. Проверьте текст завершённой партии.", err_invalid_review_ply: "Не удалось открыть эту позицию партии.", err_not_reviewing_pgn: "Сначала загрузите PGN партии.", reviewHint: "Нажмите на ход, чтобы изучить позицию с Stockfish.", reviewAfterMove: "Показать позицию после {move}", reviewingPosition: "Анализ партии", reviewSideToMove: "Ход за: {side}", reviewModeCaption: "Просматривайте ходы завершённой партии.", inputPlaceholder: "Например: ладья на h8 · с a8 на h8 · конь на f3", boardLabel: "Шахматная доска", evaluation: "Оценка позиции", moveLabel: "{piece}: с {from} на {to}", moveAria: "Ход на {square}", checkSuffix: "шах", mateScore: "Мат {n}", undoTitle: "Отменить ход", loadFenTitle: "Загрузить позицию FEN", copyPgnTitle: "Скопировать партию в PGN", closeDialog: "Закрыть", languageLabel: "Язык",
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
  let annotations = [];
  let drawing = null;
  let activeVariation = -1;
  const boardEl = $("board");
  const annotationLayer = $("boardAnnotations");
  const annotationColors = { green: "#a2c45a", red: "#e36455", blue: "#62a8ff" };

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
  const squarePoint = (square) => {
    if (!/^[a-h][1-8]$/.test(square || "")) return null;
    const file = square.charCodeAt(0) - 97;
    const rank = Number(square[1]);
    return {
      x: (flipped ? 7 - file : file) + 0.5,
      y: (flipped ? rank - 1 : 8 - rank) + 0.5,
    };
  };
  const squareAtPoint = (x, y) => {
    const rect = boardEl.getBoundingClientRect();
    if (x < rect.left || x >= rect.right || y < rect.top || y >= rect.bottom) return "";
    const col = Math.min(7, Math.floor(((x - rect.left) / rect.width) * 8));
    const row = Math.min(7, Math.floor(((y - rect.top) / rect.height) * 8));
    const file = flipped ? 7 - col : col;
    const rank = flipped ? row + 1 : 8 - row;
    return squareName(file, rank - 1);
  };
  function renderAnnotations() {
    if (!annotationLayer) return;
    const fragment = document.createDocumentFragment();
    const marks = annotations.concat(drawing ? [{ ...drawing, preview: true }] : []);
    marks.forEach((mark) => {
      const from = squarePoint(mark.from);
      const to = squarePoint(mark.to);
      if (!from || !to) return;
      const color = annotationColors[mark.color] || annotationColors.green;
      const opacity = mark.opacity ?? (mark.preview ? 0.72 : 0.9);
      if (mark.type === "circle" || mark.from === mark.to) {
        const outer = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        outer.setAttribute("cx", from.x); outer.setAttribute("cy", from.y); outer.setAttribute("r", "0.34");
        outer.setAttribute("fill", color); outer.setAttribute("fill-opacity", "0.16");
        outer.setAttribute("stroke", "#1b2117"); outer.setAttribute("stroke-width", "0.16");
        outer.setAttribute("opacity", opacity);
        const inner = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        inner.setAttribute("cx", from.x); inner.setAttribute("cy", from.y); inner.setAttribute("r", "0.34");
        inner.setAttribute("fill", "none"); inner.setAttribute("stroke", color); inner.setAttribute("stroke-width", "0.11");
        inner.setAttribute("opacity", opacity);
        fragment.append(outer, inner);
        return;
      }
      const dx = to.x - from.x, dy = to.y - from.y;
      const length = Math.hypot(dx, dy);
      const ux = dx / length, uy = dy / length;
      const baseX = to.x - ux * 0.31, baseY = to.y - uy * 0.31;
      const perpX = -uy * 0.15, perpY = ux * 0.15;
      const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
      line.setAttribute("d", `M ${from.x} ${from.y} L ${baseX} ${baseY}`);
      line.setAttribute("fill", "none"); line.setAttribute("stroke", "#1b2117");
      line.setAttribute("stroke-width", "0.25"); line.setAttribute("stroke-linecap", "round");
      line.setAttribute("opacity", opacity);
      const coloredLine = line.cloneNode();
      coloredLine.setAttribute("stroke", color); coloredLine.setAttribute("stroke-width", "0.15");
      const head = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      head.setAttribute("points", `${baseX + perpX},${baseY + perpY} ${to.x},${to.y} ${baseX - perpX},${baseY - perpY}`);
      head.setAttribute("fill", color); head.setAttribute("stroke", "#1b2117");
      head.setAttribute("stroke-width", "0.07"); head.setAttribute("stroke-linejoin", "round");
      head.setAttribute("opacity", opacity);
      fragment.append(line, coloredLine, head);
    });
    annotationLayer.replaceChildren(fragment);
    $("clearMarksButton").hidden = annotations.length === 0;
  }
  function clearAnnotations() {
    annotations = [];
    drawing = null;
    activeVariation = -1;
    $("variationsList").querySelectorAll("[data-variation]").forEach((row) => row.setAttribute("aria-pressed", "false"));
    renderAnnotations();
  }
  const coord = (uci, start = false) => uci && uci.length >= 4 ? (start ? uci.slice(0, 2) : uci.slice(2, 4)) : "";
  const friendlyMove = (uci, boardMap = parseFen(state?.fen), compact = true) => {
    const from = coord(uci, true), to = coord(uci);
    const p = boardMap.get(from) || "P";
    const piece = pieceNames[lang][p];
    const move = compact ? `${piece} ${from} → ${to}` : t("moveLabel", { piece, from, to });
    const promotion = uci?.length > 4 ? `=${promotionNames[lang][uci.at(-1).toUpperCase()] || uci.at(-1).toUpperCase()}` : "";
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
    $("languageSelect").setAttribute("aria-label", t("languageLabel"));
    document.querySelector(".language-picker").setAttribute("aria-label", t("languageLabel"));
    $("moveInput").placeholder = t("inputPlaceholder");
    $("moveInput").setAttribute("aria-label", t("enterMove"));
    $("board").setAttribute("aria-label", t("boardLabel"));
    $("evaluationColumn").setAttribute("aria-label", t("evaluation"));
    $("evaluationLabel").setAttribute("aria-label", t("evaluation"));
    $("evaluationTrack").setAttribute("aria-label", t("evaluation"));
    $("undoButton").title = t("undoTitle");
    $("undoButton").setAttribute("aria-label", $("undoButton").title);
    $("fenButton").title = t("loadFenTitle");
    $("pgnButton").title = t("copyPgnTitle");
    $("openPgnImportButton").title = t("pastePgn");
    $("closeFenDialog").setAttribute("aria-label", t("closeDialog"));
    $("closePgnDialog").setAttribute("aria-label", t("closeDialog"));
    $("sideSelect").setAttribute("aria-label", t("playAs"));
    $("timeSelect").setAttribute("aria-label", t("thinkTime"));
    $("clearMarksButton").title = t("clearMarks");
    $("analysisProgress").setAttribute("aria-label", t("analyzing"));
    $("boardHintText").title = t("markColors");
    const exampleSuffix = { tr: "Tr", en: "En", es: "Es", ru: "Ru" }[lang];
    document.querySelectorAll("[data-example-tr]").forEach((button) => {
      button.textContent = button.dataset[`example${exampleSuffix}`] || button.dataset.exampleEn;
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
    renderAnnotations();
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
    $("pgnReviewHint").hidden = !state.pgnReview;
    if (!rows.length) {
      root.innerHTML = `<div class="history-empty">${escapeHtml(t("noMoves"))}</div>`;
      return;
    }
    const moveCell = (san, ply) => {
      if (!san) return `<span class="history-move"></span>`;
      if (!state.pgnReview || ply == null) return `<span class="history-move">${escapeHtml(san)}</span>`;
      const current = state.reviewPly === ply;
      return `<button class="history-move history-review-move${current ? " is-current" : ""}" type="button" data-ply="${ply}" aria-pressed="${current}" aria-label="${escapeHtml(t("reviewAfterMove", { move: san }))}">${escapeHtml(san)}</button>`;
    };
    root.innerHTML = rows.map((row) => `<div class="history-row"><span class="history-number">${row.number}.</span>${moveCell(row.white, row.whitePly)}${moveCell(row.black, row.blackPly)}</div>`).join("");
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
    setText("nodesDetail", reco?.nodes ? `${Number(reco.nodes).toLocaleString(({ tr: "tr-TR", en: "en-US", es: "es-ES", ru: "ru-RU" })[lang])} ${t("nodes")}` : "");
    $("playSuggestionButton").disabled = busy || state.pgnReview || state.thinking || !reco || state.turn !== state.humanColor || state.gameOver;
    const scorePerspective = reco?.scorePov || state.humanColor;
    const whiteScore = score == null ? null : score * (scorePerspective === "white" ? 1 : -1);
    const whitePercent = whiteScore == null ? 50 : Math.max(5, Math.min(95, 50 + 40 * Math.tanh(whiteScore / 500)));
    const evaluationColumn = $("evaluationColumn");
    const evaluationTrack = $("evaluationTrack");
    evaluationColumn.classList.toggle("is-flipped", flipped);
    $("evaluationFill").style.height = `${whitePercent}%`;
    setText("evaluationLabel", reco?.mate != null ? t("mateScore", { n: reco.mate }) : score == null ? "—" : scoreText);
    evaluationTrack.setAttribute("aria-valuenow", String(Math.round(whitePercent)));
    const whiteMate = reco?.mate == null ? null : reco.mate * (scorePerspective === "white" ? 1 : -1);
    const whiteScoreText = whiteMate != null
      ? t("mateScore", { n: whiteMate })
      : whiteScore == null ? "—" : `${whiteScore >= 0 ? "+" : ""}${(whiteScore / 100).toFixed(2)}`;
    evaluationTrack.setAttribute("aria-valuetext", whiteScore == null && whiteMate == null ? t("analysisWaiting") : t("whiteAdvantage", { score: whiteScoreText }));
    $("analysisProgress").hidden = !state.thinking;
    const variations = state.variations || [];
    $("variationsList").innerHTML = variations.length ? variations.map((line, index) => {
      const number = line.mate != null ? t("mateScore", { n: line.mate }) : line.scoreCp == null ? "—" : `${line.scoreCp >= 0 ? "+" : ""}${(line.scoreCp / 100).toFixed(2)}`;
      return `<button type="button" class="variation-row" data-variation="${index}" aria-pressed="${index === activeVariation}" title="${escapeHtml(friendlyLine(line.line))}"><span class="variation-rank">${index + 1}.</span><span class="variation-line">${escapeHtml(friendlyLine(line.line))}</span><span class="variation-score">${escapeHtml(number)}</span></button>`;
    }).join("") : `<div class="empty-line">${escapeHtml(state.thinking ? t("thinking") : t("noLines"))}</div>`;
  }

  function renderStatus() {
    const myTurn = state.pgnReview || state.turn === state.humanColor;
    const sideCaption = state.humanColor === "white" ? t("yourSide") : t("blackPieces");
    setText("humanCaption", sideCaption);
    setText("opponentName", "Stockfish");
    setText("opponentCaption", t("engineOpponent"));
    $("humanAvatar").textContent = state.humanColor === "white" ? "♙" : "♟";
    $("opponentAvatar")?.setAttribute("aria-hidden", "true");
    renderCapturedPieces();
    const captionEl = $("inputPrompt");
    captionEl.textContent = state.gameOver ? `${t("result")}: ${state.result}` : state.pgnReview ? t("reviewModeCaption") : myTurn ? t("playRecommended") : t("waitingOpponent");
    if (state.gameOver) {
      setText("turnTitle", `${t("gameOver")} · ${state.result}`);
      setText("turnDescription", state.termination === "checkmate" ? t("checkmate") : state.termination === "stalemate" ? t("stalemate") : t("result"));
    } else if (state.pgnReview) {
      setText("turnTitle", t("reviewingPosition"));
      setText("turnDescription", t("reviewSideToMove", { side: sideName(state.turn) }));
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
    if (firstRender || (sideChanged && !nextState.pgnReview)) flipped = nextState.humanColor === "black";
    state = nextState;
    if (changedPosition) { selected = null; clearAnnotations(); }
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
      if (path === "/api/new" || path === "/api/fen" || path === "/api/pgn" || path === "/api/review/ply") clearAnnotations();
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
    clearAnnotations();
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

  boardEl.addEventListener("contextmenu", (event) => event.preventDefault());
  boardEl.addEventListener("pointerdown", (event) => {
    if (event.button !== 2 || event.pointerType !== "mouse" || !state) return;
    const cell = event.target.closest("[data-square]");
    if (!cell) return;
    event.preventDefault();
    drawing = {
      from: cell.dataset.square,
      to: cell.dataset.square,
      color: event.shiftKey ? "red" : event.ctrlKey ? "blue" : "green",
    };
    renderAnnotations();
  });
  window.addEventListener("pointermove", (event) => {
    if (!drawing) return;
    const target = squareAtPoint(event.clientX, event.clientY);
    if (drawing.to !== target) {
      drawing.to = target;
      renderAnnotations();
    }
  });
  window.addEventListener("pointerup", (event) => {
    if (!drawing || (event.pointerType === "mouse" && event.button !== 2)) return;
    const target = squareAtPoint(event.clientX, event.clientY);
    if (target) {
      const mark = { ...drawing, to: target, type: drawing.from === target ? "circle" : "arrow" };
      const duplicate = annotations.findIndex((item) => item.from === mark.from && item.to === mark.to && item.color === mark.color && item.type === mark.type);
      if (duplicate >= 0) annotations.splice(duplicate, 1);
      else {
        annotations = annotations.filter((item) => item.from !== mark.from || item.to !== mark.to || item.type !== mark.type);
        annotations.push(mark);
        if (annotations.length > 32) annotations.shift();
      }
    }
    drawing = null;
    renderAnnotations();
  });
  window.addEventListener("pointercancel", () => {
    if (!drawing) return;
    drawing = null;
    renderAnnotations();
  });

  boardEl.addEventListener("click", async (event) => {
    if (event.button !== 0) return;
    const cell = event.target.closest("[data-square]");
    if (!cell || !state || busy || state.gameOver) return;
    if (annotations.length) clearAnnotations();
    chooseSquare(cell.dataset.square);
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && (annotations.length || drawing)) clearAnnotations();
  });
  $("clearMarksButton").addEventListener("click", clearAnnotations);

  $("moveForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const notation = $("moveInput").value.trim();
    if (!notation) { showToast(t("err_empty")); return; }
    const next = await act("/api/move", { notation }, "moveAccepted");
    if (next) $("moveInput").value = "";
  });
  document.querySelectorAll("[data-example-tr]").forEach((button) => {
    button.addEventListener("click", () => {
      const suffix = { tr: "Tr", en: "En", es: "Es", ru: "Ru" }[lang];
      $("moveInput").value = button.dataset[`example${suffix}`] || button.dataset.exampleEn;
      $("moveInput").focus();
    });
  });
  $("playSuggestionButton").addEventListener("click", () => act("/api/play-suggestion", {}, "moveAccepted"));
  $("variationsList").addEventListener("click", (event) => {
    const row = event.target.closest("[data-variation]");
    if (!row) return;
    activeVariation = Number(row.dataset.variation);
    $("variationsList").querySelectorAll("[data-variation]").forEach((item) => item.setAttribute("aria-pressed", String(item === row)));
    const line = state?.variations?.[activeVariation]?.line || [];
    annotations = line.slice(0, 3).map((item, index) => ({
      from: coord(item.uci, true), to: coord(item.uci), type: "arrow", color: "blue", opacity: 0.9 - index * 0.18,
    }));
    renderAnnotations();
    showToast(t("lineShown"), true);
  });
  $("newGameButton").addEventListener("click", () => act("/api/new", { humanColor: $("sideSelect").value }));
  $("sideSelect").addEventListener("change", () => act("/api/new", { humanColor: $("sideSelect").value }));
  $("timeSelect").addEventListener("change", () => act("/api/settings", { analysisTime: Number($("timeSelect").value) }));
  $("languageSelect").addEventListener("change", () => {
    lang = $("languageSelect").value;
    localStorage.setItem("chess-assistant-language", lang);
    applyLanguage();
  });
  $("flipBoardButton").addEventListener("click", () => { flipped = !flipped; $("evaluationColumn").classList.toggle("is-flipped", flipped); renderBoard(); });
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
  $("openPgnImportButton").addEventListener("click", () => {
    $("pgnInput").value = "";
    $("pgnImportDialog").showModal();
    $("pgnInput").focus();
  });
  $("closePgnDialog").addEventListener("click", () => $("pgnImportDialog").close());
  $("cancelPgnButton").addEventListener("click", () => $("pgnImportDialog").close());
  $("pgnImportForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const next = await act("/api/pgn", { pgn: $("pgnInput").value }, "pgnLoaded");
    if (next) $("pgnImportDialog").close();
  });
  $("moveHistory").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-ply]");
    if (button && state?.pgnReview) act("/api/review/ply", { ply: Number(button.dataset.ply) }, "");
  });

  applyLanguage();
  sync();
})();
