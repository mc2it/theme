import sys.FileSystem;
using Lambda;

/** Runs the script. **/
function main() {
	["bin/mc2it_theme.js", "lib/index.js"].filter(FileSystem.exists).iter(FileSystem.deleteFile);
	Tools.cleanDirectory("var");
	Tools.removeDirectory("www/css");
}
