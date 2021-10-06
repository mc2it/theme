import Sys.*;

/** Runs the script. **/
function main() {
	for (script in ["Clean", "Version", "Build"]) command('lix $script');
	command("npx cleancss -O2 --output=www/css/mc2it.css www/css/mc2it.css");
}
