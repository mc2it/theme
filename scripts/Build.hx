import sys.io.File;
using haxe.io.Path;

/** Runs the script. **/
function main() {
	final bootstrap = Tools.captureCommand("lix run bootstrap_bundle libpath");
	File.copy(Path.join([bootstrap, "fonts/bootstrap-icons.woff2"]), "www/fonts/bootstrap_icons.woff2");

	final debug = Sys.args().contains("--debug");
	for (file in ["build", "run"]) Sys.command("haxe", (debug ? ["--debug"] : []).concat(['$file.hxml']));

	Tools.replaceInFile("src/mc2it_theme/ui/index.css", ~/".*\/css\/bootstrap.css"/, '"${Path.join([bootstrap, "css/bootstrap.css"])}"');
	buildStyleSheet();
	Tools.replaceInFile("www/css/mc2it.css", ~/\s+\/\* [^*]+ \*\//gs, "");
}

/** Builds the style sheet. **/
private function buildStyleSheet() Sys.command("npx", [
	"esbuild",
	"--bundle",
	"--external:*.woff2",
	"--legal-comments=none",
	"--log-level=warning",
	"--outfile=www/css/mc2it.css",
	"src/mc2it_theme/ui/index.css"
]);
