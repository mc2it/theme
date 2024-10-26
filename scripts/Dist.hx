import sys.FileSystem;
import sys.io.File;
using Lambda;
using StringTools;
using haxe.io.Path;

/** Packages the project. **/
function main() {
	final cli = "bin/mc2it_theme.js";
	for (script in ["Clean", "Build", "Version"]) Sys.command('lix $script');
	copyDirectory("src/mc2it/theme/ui", "lib/scss");

	final files = [cli, "lib/bundle.js"];
	files.iter(file -> Sys.command('npx esbuild --allow-overwrite --legal-comments=none --log-level=warning --minify --outfile=$file --platform=node $file'));
	Sys.command('git update-index --chmod=+x $cli');
}

/** Recursively copies all files in the specified `source` directory to a given `destination` directory. **/
private function copyDirectory(source: String, destination: String) for (entry in FileSystem.readDirectory(source)) {
	final input = Path.join([source, entry]);
	final output = Path.join([destination, entry]);
	if (FileSystem.isDirectory(input)) copyDirectory(input, output);
	else {
		FileSystem.createDirectory(output.directory());
		File.saveContent(output, File.getContent(input).replace('@import "bootstrap:', '@import "pkg:bootstrap/scss/'));
	}
}
