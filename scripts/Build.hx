import Sys.*;

/** Runs the script. **/
function main() {
	final bsDir = captureCommand("lix run bootstrap_bundle libpath");
	command("npx sass --load-path=$bsDir --quiet-deps --style=compressed src/mc2it_theme:www/css");
}
