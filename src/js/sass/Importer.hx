package js.sass;

import js.node.ChildProcess;
import js.node.Url;
import js.node.url.URL;
using StringTools;
using haxe.io.Path;

/** Loads `mc2it:` URLs according to the location of the `mc2it_theme` package. **/
class BootstrapImporter {

	/** The file URL of the `mc2it_theme` package. **/
	final pkgUrl: URL;

	/** Creates a new Bootstrap importer. **/
	public function new(?entryPointDirectory: String) {
		entryPointDirectory ??= ChildProcess.execFileSync("lix", ["run", "mc2it_theme", "libpath"], {encoding: "utf8", shell: true}).rtrim();
		pkgUrl = Url.pathToFileURL(Path.join([entryPointDirectory, "scss"]).addTrailingSlash());
	}

	/** Partially resolves a load (such as `@use` or `@import`) to a file on disk. **/
	public function findFileUrl(url: String): Null<URL>
		return url.startsWith("mc2it:") ? new URL(url.substr(6), pkgUrl) : null;
}

/** Loads `pkg:` URLs from the `node_modules` folder according to the standard Node.js resolution algorithm. **/
@:jsRequire("sass-embedded", "NodePackageImporter")
extern class NodePackageImporter {

	/** Creates a new Node.js package importer. **/
	function new(?entryPointDirectory: String);
}
