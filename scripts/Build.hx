import Sys.*;
import Tools;
import sys.io.File.*;

/** Runs the script. **/
function main() {
	final debug = args().contains("--debug") ? "--debug" : "";
	command('haxe $debug build.hxml');

	final bootstrapDir = captureCommand("lix run bootstrap_bundle libpath");
	copy('$bootstrapDir/fonts/bootstrap-icons.woff2', "www/fonts/bootstrap_icons.woff2");
	command('npx sass --load-path=$bootstrapDir --no-source-map src/mc2it_theme/ui:www/css');
}
