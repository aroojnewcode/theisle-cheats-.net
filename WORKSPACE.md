# The Isle Cheats site (D: drive)

This folder is the target workspace for **theisle-cheats.net**.

**Setup (run in PowerShell when C: has free space for shell temp, or from an external terminal with TEMP on D:):**

```powershell
$env:TEMP='D:\temp'; $env:TMP='D:\temp'
if (-not (Test-Path 'D:\temp')) { New-Item -ItemType Directory -Path 'D:\temp' -Force }
if (-not (Test-Path 'D:\theisle-cheats-net\.git')) {
  git clone --depth 1 https://github.com/deddev1/aion2cheats-net.git D:\theisle-cheats-net
}
# Or sync from the rebranded copy:
robocopy D:\buyaion2cheats-net D:\theisle-cheats-net /E /XD node_modules dist .astro /NFL /NDL /NJH /NJS
```

Active development copy with full rebrand: **D:\buyaion2cheats-net** (mirror here when robocopy is available).
