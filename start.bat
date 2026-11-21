@echo off
chcp 65001 >nul
setlocal
set "APP_DIR=%~dp0"
set "ENV_DIR=%USERPROFILE%\Documents\Codex\ChessAssistant\.venv"
if not exist "%ENV_DIR%\Scripts\python.exe" (
  echo Uygulama kurulu degil. Once setup.bat dosyasini ac.
  pause
  exit /b 1
)
"%ENV_DIR%\Scripts\python.exe" "%APP_DIR%main.py"
if errorlevel 1 pause

