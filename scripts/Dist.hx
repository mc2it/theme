//! --class-path src
import mc2it_theme.Platform;

/** Packages the project. **/
function main() {
	for (script in ["Clean", "Build", "Version"]) Sys.command('lix $script');
	Sys.command("git checkout -- src/mc2it_theme/ui/index.css");
	for (file in ["bin/mc2it_theme.js", "lib/index.js"]) minifyFile(file, Node);
	minifyFile("www/css/mc2it.css", "www/css/mc2it.min.css");

	final file = "bin/mc2it_theme.js";
	Sys.command('git update-index --chmod=+x $file');
	if (Sys.systemName() != "Windows") Sys.command('chmod +x $file');
}

/** Minifies the specified `source` file. **/
private function minifyFile(source: String, ?destination: String, platform = Platform.Browser) Sys.command("npx", [
	"esbuild",
	"--allow-overwrite",
	"--legal-comments=none",
	"--log-level=warning",
	"--minify",
	'--outfile=${destination != null ? destination : source}',
	'--platform=$platform',
	source
]);
