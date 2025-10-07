. $PSScriptRoot/Assets.ps1

Write-Host "Watching for file changes..."
$esbuildCommand = "npx esbuild src/UI/Main.css --bundle --external:*.woff2 --legal-comments=none --outfile=www/Styles/Mc2it.css --sourcemap --watch"
$esbuildProcess = Start-Process pwsh "-Command $esbuildCommand" -NoNewWindow -PassThru
$typescriptCommand = "npx tsc --build src/Cli/tsconfig.json --preserveWatchOutput --sourceMap --watch"
$typescriptProcess = Start-Process pwsh "-Command $typescriptCommand" -NoNewWindow -PassThru
Wait-Process $esbuildProcess.Id, $typescriptProcess.Id
