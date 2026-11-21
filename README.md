# Satranç Asistanı

Dört dilli arayüze sahip, Stockfish motoruyla çalışan bir satranç uygulaması. Tahtada taş seçip yasal hamleleri görebilir, taşı sürükleyebilir ve hamleleri günlük ifadelerle yazabilirsiniz.

## Özellikler

- Lichess tarzı açık-koyu kareli tahta ve çizimli SVG taşlar
- Taşa tıklayınca veya sürükleyince yasal hedef karelerin gösterilmesi
- Sağ tıkla sürükleyerek ok, sağ tıkla kareyi daire içine alma; Shift/Ctrl ile renk seçimi
- Alternatif Stockfish devamına tıklayarak ilk hamleleri tahtada oklarla görme
- Tahta yönüne uyum sağlayan beyaz/siyah değerlendirme çubuğu ve canlı analiz göstergesi
- Türkçe, İngilizce, İspanyolca ve Rusça arayüz ve doğal dille hamle girişi
- `kale h8`, `at f3`, `e2 e4`, `rook to h8` ve `Nf3` gibi hamle girişleri
- `torre a h8`, `enroque corto`, `ладья на h8` ve `короткая рокировка` gibi İspanyolca/Rusça hamle tarifleri
- Stockfish ile hamle önerisi ve analiz
- Alınan taşlar, şah uyarısı ve tahtayı çevirme
- Windows'ta tarayıcı araç çubukları olmadan uygulama penceresinde açılma

## Windows'ta çalıştırma

1. Python 3.10 veya daha yenisini yükleyin: <https://www.python.org/downloads/windows/>. Kurulum sırasında **Add Python to PATH** seçeneğini işaretleyin.
2. Stockfish'i indirin: <https://stockfishchess.org/download/>.
3. İndirdiğiniz Windows motor dosyasını proje içindeki `stockfish` klasörüne koyun. Dosya adı `stockfish*.exe` biçiminde olmalıdır. Motor dosyası boyutu nedeniyle Git deposunda tutulmaz.
4. İlk kurulum için `setup.bat` dosyasını çalıştırın. Bu, Python ortamını ve `requirements.txt` içindeki bağımlılıkları hazırlar.
5. Uygulamayı açmak için `start.bat` dosyasını çalıştırın. Uygulama penceresi otomatik açılır.

Kurulum internet bağlantısı gerektirir. `start.bat` uygulamayı `http://127.0.0.1:8765` adresinde yerel olarak çalıştırır.

## Hamle yazma örnekleri

- `e2 e4` veya `e2'den e4'e`
- `piyon e4`
- `at f3` veya `Nf3`
- `kale h8` veya `rook to h8`
- `şahı rok` / `kısa rok` veya `O-O`
- `uzun rok` veya `O-O-O`

Birden fazla aynı tür taş hedef kareye gidebiliyorsa uygulama kaynak kareyi seçmenizi ister. Hamleyi tahtada da tıklayarak veya taşı sürükleyerek yapabilirsiniz.

## Proje yapısı

- `main.py`: yerel web sunucusu, satranç kuralları ve Stockfish bağlantısı
- `web/`: uygulama arayüzü, stiller, taş çizimleri ve PWA manifesti
- `stockfish/`: Stockfish kaynak dosyaları ve lisans bildirimi; motorun `.exe` dosyası `.gitignore` ile hariç tutulur
- `setup.bat`, `start.bat`: Windows kurulum ve başlatma dosyaları

## Lisans

Bu proje **GNU GPL-3.0-or-later** lisansıyla sunulur. Ayrıntılar için [`LICENSE`](LICENSE) dosyasına bakın. Üçüncü taraf bileşen bildirimleri [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) dosyasındadır.

