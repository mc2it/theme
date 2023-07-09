//! --class-path src --library tink_core
import mc2it_theme.Platform;

/** Publishes the package. **/
function main() {
	Sys.command("lix Dist");
	Tools.compress(["CHANGELOG.md", "LICENSE.md", "README.md", "haxelib.json", "run.n", "src", "www"], "var/haxelib.zip");
	Sys.command("haxelib submit var/haxelib.zip");

	final registries = ["https://registry.npmjs.org", "https://git.mc2it.com/api/packages/mc2it/npm/"];
	for (registry in registries) Sys.command('npm publish --registry=$registry');
	for (action in ["tag", "push origin"]) Sys.command('git $action v${Platform.packageVersion}');
}
