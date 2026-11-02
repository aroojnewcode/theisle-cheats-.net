# The Isle Cheats — local dev (uses D: for temp/npm; avoids full C: drive)
$ErrorActionPreference = 'Stop'
$env:TEMP = 'D:\temp'
$env:TMP = 'D:\temp'
$env:npm_config_cache = 'D:\npm-cache'
New-Item -ItemType Directory -Force -Path $env:TEMP, $env:npm_config_cache | Out-Null
Set-Location $PSScriptRoot
if (-not (Test-Path 'node_modules\astro')) {
  npm install
}
Write-Host ''
Write-Host 'Starting The Isle site at http://127.0.0.1:5174/' -ForegroundColor Green
Write-Host '(First start can take 1–3 minutes. Use dev:force if port is busy.)' -ForegroundColor DarkGray
Write-Host ''
npm run dev:force
