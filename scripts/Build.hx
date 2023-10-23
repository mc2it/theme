//! --class-path src --define hxnodejs --define no-deprecation-warnings --library hxnodejs --library tink_core
import js.esbuild.Esbuild;
import sys.io.File;
using StringTools;
using haxe.io.Path;
using tink.CoreApi;

/** Builds the project. **/
function main() {
	final debug = Sys.args().contains("--debug");
	for (file in ["build", "run"]) Sys.command('haxe ${debug ? "--debug" : ""} $file.hxml');

	final fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files";
	File.copy(Path.join([fontsource, "material-symbols-rounded-latin-wght-normal.woff2"]), "www/fonts/material_symbols.woff2");
	Esbuild.build(Tools.buildOptions()).toPromise().handle(outcome -> switch outcome {
		case Failure(error): throw error;
		case Success(_): if (!debug) Tools.replaceInFile("www/css/mc2it.css", ~/\s+\/\* [^*]+ \*\//g, "");
	});
}
