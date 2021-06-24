import Sys.*;
import haxe.Exception;
import sys.io.File.*;
import sys.io.Process;

using StringTools;

/** Runs the script. **/
function main() {
	final bsDir = captureCommand("lix run bootstrap_bundle libpath");
	copy('$bsDir/fonts/bootstrap-icons.woff2', "www/fonts/bootstrap_icons.woff2");
	for (style => file in ["compressed" => "main.min.css", "expanded" => "main.css"])
		command('npx sass --load-path=$bsDir --no-source-map --style=$style src/main.scss:www/css/$file');
}

/** Captures the output of the specified `command`. **/
private function captureCommand(command: String, ?arguments: Array<String>) {
	final process = new Process(command, arguments);
	final success = process.exitCode() == 0;
	final output = (success ? process.stdout.readAll() : process.stderr.readAll()).toString().trim();
	process.close();
	return success ? output : throw new Exception(output);
}
