import sys.FileSystem;
using Lambda;

/** Deletes all generated files. **/
function main() {
	for (file in ["bin/mc2it_theme.js", "lib/index.js"]) {
		if (FileSystem.exists(file)) FileSystem.deleteFile(file);
		if (FileSystem.exists('$file.map')) FileSystem.deleteFile('$file.map');
	}

	Tools.cleanDirectory("var");
	if (FileSystem.exists("www/css")) Tools.removeDirectory("www/css");
}
