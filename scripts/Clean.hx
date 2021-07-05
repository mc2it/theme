import Tools.cleanDirectory;
import Tools.removeDirectory;
import sys.FileSystem.*;

/** Runs the script. **/
function main() {
	if (exists("www/css")) removeDirectory("www/css");
	if (exists("www/fonts/bootstrap_icons.woff2")) deleteFile("www/fonts/bootstrap_icons.woff2");
	cleanDirectory("var");
}
