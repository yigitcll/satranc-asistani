@echo off
chcp 65001 >nul
setlocal
set "APP_DIR=%~dp0"
set "ENV_DIR=%USERPROFILE%\Documents\Codex\ChessAssistant\.venv"
set "TEMP=%USERPROFILE%\Documents\Codex\ChessAssistant\.temp"
set "TMP=%TEMP%"
set "PIP_CACHE_DIR=%USERPROFILE%\Documents\Codex\ChessAssistant\.pip-cache"
if not exist "%USERPROFILE%\Documents\Codex\ChessAssistant" mkdir "%USERPROFILE%\Documents\Codex\ChessAssistant"
if not exist "%TEMP%" mkdir "%TEMP%"
if not exist "%PIP_CACHE_DIR%" mkdir "%PIP_CACHE_DIR%"
if not exist "%ENV_DIR%\Scripts\python.exe" (
  if exist "%USERPROFILE%\anaconda3\python.exe" (
    "%USERPROFILE%\anaconda3\python.exe" -m venv "%ENV_DIR%"
  ) else (
    py -3 -m venv "%ENV_DIR%"
  )
)
if errorlevel 1 (
  echo Python 3.10 veya ustu bulunamadi ya da sanal ortam olusturulamadi.
  echo Python: https://www.python.org/downloads/windows/
  pause
  exit /b 1
)
"%ENV_DIR%\Scripts\python.exe" -m pip install -r "%APP_DIR%requirements.txt"
if errorlevel 1 (
  echo Bagimliliklar yuklenemedi. Internet baglantisini kontrol edin.
  pause
  exit /b 1
)
echo Kurulum tamamlandi. start.bat dosyasini acarak baslatabilirsiniz.
pause

