. $PSScriptRoot/Assets.ps1

"Watching for file changes..."
$esbuildCommand = "npx esbuild src/UI/Main.css --bundle --external:*.woff2 --legal-comments=none --outfile=www/Styles/Mc2it.css --sourcemap --watch"
$esbuildProcess = Start-Process pwsh "-Command $esbuildCommand" -NoNewWindow -PassThru
$tscCommand = "npx tsc --build src/Cli/tsconfig.json --preserveWatchOutput --sourceMap --watch"
$tscProcess = Start-Process pwsh "-Command $tscCommand" -NoNewWindow -PassThru
Wait-Process $esbuildProcess.Id, $tscProcess.Id
