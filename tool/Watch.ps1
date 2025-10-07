. $PSScriptRoot/Assets.ps1

Write-Host "Watching for file changes..."
$esbuildCommand = "esbuild src/UI/Main.css --bundle --external:*.woff2 --legal-comments=none --outfile=www/Styles/Mc2it.css --sourcemap --watch"
$esbuildProcess = Start-Process pwsh "-Command npx $esbuildCommand" -NoNewWindow -PassThru
$tscCommand = "tsc --build src/Cli/tsconfig.json --preserveWatchOutput --sourceMap --watch"
$tscProcess = Start-Process pwsh "-Command npx $tscCommand" -NoNewWindow -PassThru
Wait-Process $esbuildProcess.Id, $tscProcess.Id
