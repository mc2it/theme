package mc2it_theme;

import sys.FileSystem;
import sys.io.File;
using StringTools;
using haxe.io.Path;

/** Provides access to the library assets. **/
abstract class Theme {

	/** The path to the library assets. **/
	@:expose("assetPath")
	public static final assetPath = Path
		.join([Sys.programPath().directory(), #if js "../www" #else "www" #end])
		.replace("/", Sys.systemName() == "Windows" ? "\\" : "/");

	/** Copies the library assets to a given `output` directory. **/
	@:expose("copyAssets")
	public static function copyAssets(output: String, ?options: ThemeCopyOptions) {
		if (options == null) options = {};

		final sources = ["css", "fonts", "img"];
		final directories = sources.filter(source -> Reflect.field(options, source));

		final input = Path.join([Sys.programPath().directory(), #if js "../www" #else "www" #end]);
		for (directory in (directories.length > 0 ? directories : sources))
			copyDirectory(Path.join([input, directory]), directories.length == 1 ? output : Path.join([output, directory]));
	}

	/** Recursively copies all files in the specified `source` directory to a given `destination` directory. **/
	static function copyDirectory(source: String, destination: String) for (entry in FileSystem.readDirectory(source)) {
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
typedef ThemeCopyOptions = {

	/** Value indicating whether to only copy the CSS files.  **/
	var ?css: Bool;

	/** Value indicating whether to only copy the font files.  **/
	var ?fonts: Bool;

	/** Value indicating whether to only copy the image files.  **/
	var ?img: Bool;
}
