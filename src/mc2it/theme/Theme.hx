package mc2it.theme;

import sys.FileSystem;
import sys.io.File;
using StringTools;
using haxe.io.Path;

/** Provides access to the theme assets. **/
abstract class Theme {

	/** Returns the path to the theme assets. **/
	@:expose("assetPath")
	public static function assetPath(?options: PathOptions): String {
		final folder = (options?.scss ?? false)
			? #if js "../lib/scss" #else "src/mc2it/theme/ui" #end
			: #if js "../www" #else "www" #end;

		return Path.join([Sys.programPath().directory(), folder]).replace("/", Sys.systemName() == "Windows" ? "\\" : "/");
	}

	/** Copies the theme assets to a given `output` directory. **/
	@:expose("copyAssets")
	public static function copyAssets(output: String, ?options: CopyOptions): Void {
		options ??= {};
		final sources = ["css", "fonts", "img"];
		final directories = sources.filter(source -> Reflect.field(options, source) ?? false);
		final basePath = assetPath();
		for (directory in (directories.length > 0 ? directories : sources))
			copyDirectory(Path.join([basePath, directory]), directories.length == 1 ? output : Path.join([output, directory]));
	}

	/** Recursively copies all files in the specified `source` directory to a given `destination` directory. **/
	static function copyDirectory(source: String, destination: String): Void
		for (entry in FileSystem.readDirectory(source)) {
			final input = Path.join([source, entry]);
			final output = Path.join([destination, entry]);
			if (FileSystem.isDirectory(input)) copyDirectory(input, output);
			else {
				FileSystem.createDirectory(output.directory());
				File.copy(input, output);
			}
		}
}

/** Defines the options of the `Theme.copyAssets()` method. **/
typedef CopyOptions = {

	/** Value indicating whether to only copy the CSS files. **/
	var ?css: Bool;

	/** Value indicating whether to only copy the font files. **/
	var ?fonts: Bool;

	/** Value indicating whether to only copy the image files. **/
	var ?img: Bool;
}

/** Defines the options of the `Theme.assetPath()` method. **/
typedef PathOptions = {

	/** Value indicating whether to return the specific path of SCSS files. **/
	var ?scss: Bool;
}
