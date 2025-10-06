Write-Host "Deleting all generated files..."
if (Test-Path "lib") { Remove-Item "lib" -Force -Recurse }
if (Test-Path "www/Fonts/MaterialSymbols.woff2") { Remove-Item "www/Fonts/MaterialSymbols.woff2" -Force }
if (Test-Path "www/Styles") { Remove-Item "www/Styles" -Force -Recurse }
Remove-Item "var/*" -Exclude ".gitkeep" -Force -Recurse
