"Deleting all generated files..."
Remove-Item lib, www/Styles -ErrorAction Ignore -Force -Recurse
Remove-Item var/* -Exclude .gitkeep -Force -Recurse
