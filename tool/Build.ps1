. tool/Assets.ps1

Write-Host "Building the project..."
npx tsc --build src/Cli/tsconfig.json
npx esbuild src/UI/Main.css --bundle --external:*.woff2 --legal-comments=none --outfile=www/Styles/Mc2it.css --sourcemap
npx esbuild src/UI/Main.css --bundle --external:*.woff2 --legal-comments=none --minify --outfile=www/Styles/Mc2it.min.css --sourcemap
