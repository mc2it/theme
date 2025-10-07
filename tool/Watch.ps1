. $PSScriptRoot/Assets.ps1

Write-Host "Watching for file changes..."
$esbuild = Start-Process pwsh "-Command npx esbuild src/UI/Main.css --bundle --external:*.woff2 --legal-comments=none --outfile=www/Styles/Mc2it.css --sourcemap --watch" -NoNewWindow -PassThru
$typescript = Start-Process pwsh "-Command npx tsc --build src/Cli/tsconfig.json --preserveWatchOutput --sourceMap --watch" -NoNewWindow -PassThru
Wait-Process $esbuild.Id, $typescript.Id
