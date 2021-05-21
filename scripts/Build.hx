import Sys.*;

/** Runs the script. **/
function main() {
	command("npx sass --load-path=node_modules --quiet --style=compressed src/mc2it_theme:www/css");
}
