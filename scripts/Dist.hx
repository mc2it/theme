//! --class-path src
using Lambda;

/** Packages the project. **/
function main() {
	for (script in ["Clean", "Build", "Version"]) Sys.command('lix $script');
	["bin/mc2it_theme.js", "lib/index.cjs"].iter(file -> minifyFile(file, true));
	Sys.command("git update-index --chmod=+x bin/mc2it_theme.js");
	minifyFile("www/css/mc2it.css", "www/css/mc2it.min.css");
}

/** Minifies the specified `source` file. **/
private function minifyFile(source: String, ?destination: String, isNode = false) Sys.command("npx", [
	"esbuild",
	"--allow-overwrite",
	"--legal-comments=none",
	"--log-level=warning",
	"--minify",
	'--outfile=${destination ?? source}',
	'--platform=${isNode ? "node" : "browser"}',
	source
]);
