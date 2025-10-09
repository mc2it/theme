Write-Output "Deploying the assets..."
$fontsource = "node_modules/@fontsource-variable"
Copy-Item "$fontsource/material-symbols-rounded/files/material-symbols-rounded-latin-fill-normal.woff2" "www/Fonts/MaterialSymbols.woff2"
