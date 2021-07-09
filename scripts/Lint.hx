import Sys.*;

/** Runs the script. **/
function main() {
	command("lix run checkstyle --config etc/checkstyle.json --source scripts --source src");
	command("npx lessc --lint src/mc2it_theme/ui/mc2it.less");
}
