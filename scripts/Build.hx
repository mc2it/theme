//! --library tink_core
using Lambda;

/** Runs the script. **/
function main() {
	["build", "run"].iter(file -> Sys.command("haxe", ['$file.hxml']));

	final bootstrap = Tools.captureCommand("lix run bootstrap_bundle libpath");
	File.copy('$bootstrap/fonts/bootstrap-icons.woff2', "www/fonts/bootstrap_icons.woff2");

	final file = "bin/mc2it_theme.js";
	Sys.command("npx", ["esbuild", "--allow-overwrite", "--log-level=warning", "--minify", '--outfile=$file', "--platform=node", file]);
	Sys.command("git", ["update-index", "--chmod=+x", file]);
	if (Sys.systemName() != "Windows") Sys.command("chmod", ["+x", file]);
}
