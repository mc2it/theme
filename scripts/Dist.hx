/** Runs the script. **/
function main() {
	for (script in ["Clean", "Version", "Build"]) Sys.command('lix $script');
	Sys.command("npx cleancss -O2 --output=www/css/mc2it.css www/css/mc2it.css");
}
