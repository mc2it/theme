import sys.FileSystem;

/** Runs the script. **/
function main() {
	if (FileSystem.exists("www/css")) Tools.removeDirectory("www/css");
	if (FileSystem.exists("www/fonts/bootstrap_icons.woff2")) FileSystem.deleteFile("www/fonts/bootstrap_icons.woff2");
	Tools.cleanDirectory("var");
}
