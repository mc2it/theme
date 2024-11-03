#!/usr/bin/env pwsh
Set-StrictMode -Version Latest

$file = "$PSScriptRoot/mc2it_theme.js"
if (Test-Path "$PSScriptRoot/../lib/cli.js.map") { node --enable-source-maps $file @args }
else { node $file @args }
