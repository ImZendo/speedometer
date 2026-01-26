@echo off
REM Build script for TypeScript Speedometer

echo Building TypeScript Speedometer...
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
)

REM Build TypeScript
echo Compiling TypeScript...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ^[32mBuild successful!^[0m
    echo Compiled files are in the dist/ folder
    echo.
    echo You can now restart the speedometer resource in FiveM
) else (
    echo.
    echo ^[31mBuild failed!^[0m
    echo Check the errors above
)

pause
