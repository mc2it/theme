import Sys.*;
import Tools.captureCommand;
import sys.io.File.*;

/** Runs the script. **/
function main() {
	final bsDir = captureCommand("lix run bootstrap_bundle libpath");
	copy('$bsDir/fonts/bootstrap-icons.woff2', "www/fonts/bootstrap_icons.woff2");
	command('npx sass --load-path=$bsDir --no-source-map src/mc2it_theme/ui:www/css');
	command("npx cleancss -O2 --output=www/css/mc2it.min.css www/css/mc2it.css");
}
