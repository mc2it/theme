import sys.io.File;
using Lambda;
using haxe.io.Path;

/** Runs the script. **/
function main() {
	final bootstrap = Tools.captureCommand("lix run bootstrap_bundle libpath");
	File.copy('$bootstrap/fonts/bootstrap-icons.woff2', "www/fonts/bootstrap_icons.woff2");
	["build", "run"].iter(file -> Sys.command("haxe", ['$file.hxml']));

	Tools.replaceInFile("src/mc2it_theme/ui/index.css", ~/".*\/dist\/css\/bootstrap.css"/, Path.join([bootstrap, "dist/css/bootstrap.css"]));
	buildStyleSheet(false);
	buildStyleSheet(true);

	final file = "bin/mc2it_theme.js";
	Sys.command("npx", ["esbuild", "--allow-overwrite", "--log-level=warning", "--minify", '--outfile=$file', "--platform=node", file]);
	Sys.command("git", ["update-index", "--chmod=+x", file]);
	if (Sys.systemName() != "Windows") Sys.command("chmod", ["+x", file]);
}

/** Builds the style sheet. **/
private function buildStyleSheet(minify = false) Sys.command("npx", ["esbuild"].concat(minify ? ["--minify"] : []).concat([
	"--bundle",
	"--external:*.woff2",
	"--legal-comments=none",
	"--log-level=warning",
	'--outfile=www/css/${minify ? "mc2it.min" : "mc2it"}.css',
	"--platform=browser",
	"--sourcemap",
	"src/mc2it_theme/ui/index.css"
]));
