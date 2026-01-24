& "$PSScriptRoot/Assets.ps1"

"Watching for file changes..."
$esbuildCommand = "npx esbuild src/UI/Main.css --bundle --external:*.woff2 --legal-comments=none --outfile=www/Styles/Mc2it.css --sourcemap --watch"
Start-Process pwsh "-Command $esbuildCommand" -NoNewWindow
$tscCommand = "npx tsc --build src/Cli/tsconfig.json --preserveWatchOutput --sourceMap --watch"
Start-Process pwsh "-Command $tscCommand" -NoNewWindow
Wait-Event ProcessTerminated
