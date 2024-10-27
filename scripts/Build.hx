//! --define hxnodejs --define no-deprecation-warnings --library bootstrap_bundle --library hxnodejs
import bootstrap.SassImporter;
import haxe.Json;
import js.sass.Sass;
import sys.FileSystem;
import sys.io.File;
using haxe.io.Path;

/** Builds the project. **/
function main() {
	final fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files";
	File.copy(Path.join([fontsource, "material-symbols-rounded-latin-fill-normal.woff2"]), "www/fonts/material_symbols.woff2");

	final debug = Sys.args().contains("--debug");
	for (file in ["build", "run"]) Sys.command('haxe ${debug ? "--debug" : ""} $file.hxml');
	compileSass(debug);
}

/** Compiles the Sass stylesheet. **/
private function compileSass(debug: Bool) {
	final result = Sass.compile("src/mc2it/theme/ui/index.scss", {
		importers: [{findFileUrl: new SassImporter().findFileUrl}],
		silenceDeprecations: [ColorFunctions, GlobalBuiltin, Import, MixedDeclarations],
		sourceMap: debug,
		sourceMapIncludeSources: false,
		style: debug ? Expanded : Compressed
	});

	FileSystem.createDirectory("www/css");
	File.saveContent("www/css/mc2it.css", '${result.css}${result.sourceMap != null ? "\n/*# sourceMappingURL=mc2it.css.map */" : ""}');
	if (result.sourceMap != null) File.saveContent("www/css/mc2it.css.map", Json.stringify(result.sourceMap));
}
