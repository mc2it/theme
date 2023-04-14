import sys.FileSystem;
using Lambda;

/** Deletes all generated files. **/
function main() {
	for (file in ["bin/mc2it_theme.js", "lib/index.cjs"]) [file, '$file.map'].filter(FileSystem.exists).iter(FileSystem.deleteFile);
	Tools.cleanDirectory("var");
	if (FileSystem.exists("www/css")) Tools.removeDirectory("www/css");
}
