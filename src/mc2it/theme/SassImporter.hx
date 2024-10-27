package mc2it.theme;

import js.node.ChildProcess;
import js.node.Url;
import js.node.url.URL;
using StringTools;
using haxe.io.Path;

/** Loads `theme:` URLs according to the location of the `mc2it_theme` package. **/
class SassImporter {

	/** The file URL of the `mc2it_theme` package. **/
	final pkgUrl: URL;

	/** Creates a new theme importer. **/
	public function new() {
		final entryPointDirectory = ChildProcess.execFileSync("lix", ["run", "mc2it_theme", "libpath", "--scss"], {encoding: "utf8", shell: true});
		pkgUrl = Url.pathToFileURL(entryPointDirectory.rtrim().addTrailingSlash());
	}

	/** Partially resolves a load (such as `@use` or `@import`) to a file on disk. **/
	public function findFileUrl(url: String): Null<URL>
		return url.startsWith("theme:") ? new URL(url.substr(8), pkgUrl) : null;
}
