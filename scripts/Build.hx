//! --library bootstrap_bundle
import Sys.*;
import haxe.Exception;
import sys.io.File.*;
import sys.io.Process;

/** Runs the script. **/
function main() {
	final bsDir = captureCommand("lix run bootstrap_bundle libpath");
	command('npx sass --load-path=$bsDir --quiet-deps --no-source-map --style=compressed src/mc2it_theme:www/css');
	copy('$bsDir/fonts/bootstrap-icons.woff2', "www/fonts/bootstrap_icons.woff2");
}

/** Captures the output of the specified `command`. **/
private function captureCommand(command: String, ?arguments: Array<String>) {
	final process = new Process(command, arguments);
	final output = process.exitCode() == 0 ? process.stdout.readLine() : throw new Exception(process.stderr.readLine());
	process.close();
	return output;
}
