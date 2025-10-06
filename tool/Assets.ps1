Write-Host "Deploying the assets..."
$fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files"
Copy-Item "$fontsource/material-symbols-rounded-latin-fill-normal.woff2" "www/Fonts/MaterialSymbols.woff2"
