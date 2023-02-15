//! --class-path src
import mc2it_theme.Platform;

/** Runs the script. **/
function main() {
	for (script in ["Clean", "Build", "Version"]) Sys.command("lix", [script]);
	for (file in ["bin/mc2it_theme.js", "lib/index.js"]) minifyFile(file, Node);
	minifyFile("www/css/mc2it.css", "www/css/mc2it.min.css");
}

/** Minifies the specified `source` file. **/
private function minifyFile(source: String, ?destination: String, platform = Platform.Browser) Sys.command("npx", [
	"esbuild",
	"--allow-overwrite",
	"--log-level=warning",
	"--minify",
	'--outfile=${destination != null ? destination : source}',
	'--platform=$platform',
	source
]);
