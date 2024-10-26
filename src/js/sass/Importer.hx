package js.sass;

import js.node.ChildProcess;
import js.node.Url;
import js.node.url.URL;
import js.sass.Importer.FileImporter;
using StringTools;
using haxe.io.Path;

/** Loads `lix:` URLs from the `haxe_libraries` folder according to the Haxeshim resolution algorithm. **/
class LixImporter implements FileImporter {

	/** The path to the Haxe library directory. **/
	final haxelibPath = getEnv("HAXESHIM_LIBCACHE")
		.orTry(getEnv("HAXE_LIBCACHE"))
		.or(Path.join([haxePath, "haxe_libraries"]));

	/** The path to the Haxe compiler directory. **/
	final haxePath = getEnv("HAXESHIM_ROOT")
		.orTry(getEnv("HAXE_ROOT"))
		.or(Path.join([getEnv(Sys.systemName() == "Windows" ? "APPDATA" : "HOME").sure(), "haxe"]));

	/** Returns the value of the specified environment variable. **/
	static function getEnv(name: String): Option<String>
		return switch Sys.getEnv(name) {
			case null | "": None;
			case value: Some(value);
		}

	/** Returns the location of the specified Haxe library. **/
	function resolveLibrary(library: String, ?basePath: String): String {
		final hxml = Path.join([basePath ?? Sys.getCwd(), 'haxe_libraries/$library.hxml']);
		return Path.join([haxelibPath, ~/\r?\n/.split(File.getContent(hxml)).shift().split(" ").pop()]);
	}
}

/** Loads `theme:` URLs according to the location of the `mc2it_theme` package. **/
class ThemeImporter implements FileImporter {

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
