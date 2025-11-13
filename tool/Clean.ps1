"Deleting all generated files..."
"lib", "www/Styles" | Remove-Item -ErrorAction Ignore -Force -Recurse
Remove-Item "var/*" -Exclude ".gitkeep" -Force -Recurse
