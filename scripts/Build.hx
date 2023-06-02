//! --class-path src --define hxnodejs --define no-deprecation-warnings --library hxnodejs --library tink_core
import js.esbuild.Esbuild;
import js.node.ChildProcess;
import sys.FileSystem;
import sys.io.File;
using StringTools;
using haxe.io.Path;
using tink.CoreApi;

/** Builds the project. **/
function main() {
	final bootstrap = ChildProcess.execFileSync("lix", ["run", "bootstrap_bundle", "libpath"], {encoding: "utf8", shell: true}).rtrim();
	File.copy(Path.join([bootstrap, "fonts/bootstrap-icons.woff2"]), "www/fonts/bootstrap_icons.woff2");

	final debug = Sys.args().contains("--debug");
	for (file in ["build", "run"]) Sys.command('haxe ${debug ? "--debug" : ""} $file.hxml');

	FileSystem.createDirectory("www/css");
	Tools.replaceInFile("src/mc2it_theme/ui/index.css", ~/".*\/css\/bootstrap.css"/, '"${Path.join([bootstrap, "css/bootstrap.css"])}"');
	Promise.ofJsPromise(Esbuild.build(Tools.buildOptions)).handle(outcome -> switch outcome {
		case Failure(error): throw error;
		case Success(_): if (debug) Tools.replaceInFile("www/css/mc2it.css", ~/\s+\/\* [^*]+ \*\//g, "");
	});
}
