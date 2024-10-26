import sys.FileSystem;
using Lambda;
using haxe.io.Path;

/** Deletes all generated files. **/
function main() {
	["lib/scss", "res", "www/css"].filter(FileSystem.exists).iter(removeDirectory);
	cleanDirectory("var");
	for (file in ["bin/mc2it_theme.js", "lib/bundle.js", "www/fonts/material_symbols.woff2"])
		[file, '$file.map'].filter(FileSystem.exists).iter(FileSystem.deleteFile);
}

/** Recursively deletes all files in the specified `directory`. **/
private function cleanDirectory(directory: String) for (entry in FileSystem.readDirectory(directory).filter(entry -> entry != ".gitkeep")) {
	final path = Path.join([directory, entry]);
	FileSystem.isDirectory(path) ? removeDirectory(path) : FileSystem.deleteFile(path);
}

/** Recursively deletes the specified `directory`. **/
private function removeDirectory(directory: String) {
	cleanDirectory(directory);
	FileSystem.deleteDirectory(directory);
}
