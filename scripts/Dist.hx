//! --class-path src
import mc2it_theme.Platform;
using Lambda;

/** Packages the project. **/
function main() {
	for (script in ["Clean", "Build", "Version"]) Sys.command('lix $script');
	Sys.command("git checkout -- src/mc2it_theme/ui/index.css");

	final cli = "bin/mc2it_theme.js";
	[cli, "lib/index.cjs"].iter(file -> minifyFile(file, Node));
	minifyFile("www/css/mc2it.css", "www/css/mc2it.min.css");

	Sys.command('git update-index --chmod=+x $cli');
	if (Sys.systemName() != "Windows") Sys.command('chmod +x $cli');
}

/** Minifies the specified `source` file. **/
private function minifyFile(source: String, ?destination: String, platform = Platform.Browser) Sys.command("npx", [
	"esbuild",
	"--allow-overwrite",
	"--legal-comments=none",
	"--log-level=warning",
	"--minify",
	'--outfile=${destination ?? source}',
	'--platform=$platform',
	source
]);
