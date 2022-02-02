/** Runs the script. **/
function main() {
	Sys.command("lix run checkstyle --config etc/checkstyle.json --source scripts --source src");
	Sys.command("npx lessc --lint src/mc2it_theme/ui/mc2it.less");
}
