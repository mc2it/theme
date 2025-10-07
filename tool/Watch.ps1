. $PSScriptRoot/Assets.ps1

Write-Host "Watching for file changes..."
$cliCommand = "npx tsc --build src/Cli/tsconfig.json --preserveWatchOutput --sourceMap --watch"
$cliProcess = Start-Process pwsh "-Command $cliCommand" -NoNewWindow -PassThru
$uiCommand = "npx esbuild src/UI/Main.css --bundle --external:*.woff2 --legal-comments=none --outfile=www/Styles/Mc2it.css --sourcemap --watch"
$uiProcess = Start-Process pwsh "-Command $uiCommand" -NoNewWindow -PassThru
Wait-Process $cliProcess.Id, $uiProcess.Id
