import sys.FileSystem;
using Lambda;

/** Runs the script. **/
function main() {
	["js", "js.map"].map(ext -> 'bin/mc2it_theme.$ext').filter(FileSystem.exists).iter(FileSystem.deleteFile);
	["lib", "www/css"].filter(FileSystem.exists).iter(Tools.removeDirectory);
	Tools.cleanDirectory("var");
}
