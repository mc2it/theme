import sys.io.File;

/** Runs the script. **/
function main() {
	final debug = Sys.args().contains("--debug") ? "--debug" : "";
	Sys.command('haxe $debug build.hxml');

	final bootstrapDir = Tools.captureCommand("lix run bootstrap_bundle libpath");
	File.copy('$bootstrapDir/fonts/bootstrap-icons.woff2', "www/fonts/bootstrap_icons.woff2");
	Sys.command('npx sass --load-path=$bootstrapDir --no-source-map src/mc2it_theme/ui:www/css');
}
