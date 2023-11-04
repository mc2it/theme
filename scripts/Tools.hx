#if nodejs
import js.esbuild.Options.BuildOptions;
import js.html.URL;
import js.lib.RegExp;
import mc2it_theme.Platform;
#end
import haxe.crypto.Crc32;
import haxe.zip.Entry;
import haxe.zip.Writer;
import sys.FileSystem;
import sys.io.File;
using DateTools;
using Lambda;
using haxe.io.Path;
using haxe.zip.Tools;

#if nodejs
/** Returns the build settings. **/
function buildOptions(): BuildOptions return {
	bundle: true,
	entryPoints: ["src/mc2it_theme/ui/index.css"],
	external: ["*.webp", "*.woff2"],
	legalComments: None,
	outfile: "www/css/mc2it.css",
	plugins: [haxelibResolver]
};

/** Resolves `haxelib://` imports. **/
private final haxelibResolver = {
	name: "haxelib",
	setup: build -> {
		final cache: Map<String, String> = [];
		build.onResolve({filter: new RegExp("^haxelib://")}, args -> {
			final uri = new URL(args.path);
			if (!cache.exists(uri.hostname)) cache[uri.hostname] = Platform.resolveLibrary(uri.hostname);
			{path: Path.join([cache[uri.hostname], uri.pathname.substring(1)])};
		});
	}
};
#end

/** Recursively deletes all files in the specified `directory`. **/
function cleanDirectory(directory: String) for (entry in FileSystem.readDirectory(directory).filter(entry -> entry != ".gitkeep")) {
	final path = Path.join([directory, entry]);
	FileSystem.isDirectory(path) ? removeDirectory(path) : FileSystem.deleteFile(path);
}

/** Creates a ZIP archive from the specified file system entities. **/
function compress(sources: Array<String>, destination: String) {
	final output = File.write(destination);
	final writer = new Writer(output);

	var entries: Array<Entry> = [];
	for (source in sources) entries = entries.concat(FileSystem.isDirectory(source) ? compressDirectory(source) : [compressFile(source)]);
	writer.write(entries.list());
	output.close();
}

/** Formats the specified `duration` in seconds. **/
function formatDuration(duration: Float) {
	final timestamp = Math.round(duration * 1_000) / 1_000;
	final seconds = Std.int(timestamp);
	final milliseconds = Std.int((timestamp - seconds).seconds());
	return seconds > 0 ? '${seconds}s ${milliseconds}ms' : '${milliseconds}ms';
}

/** Recursively deletes the specified `directory`. **/
function removeDirectory(directory: String) {
	cleanDirectory(directory);
	FileSystem.deleteDirectory(directory);
}

/** Replaces in the specified `file` the substring which the `pattern` matches with the given `replacement`. **/
function replaceInFile(file: String, pattern: EReg, replacement: String)
	File.saveContent(file, pattern.replace(File.getContent(file), replacement));

/** Compresses the content of the specified `directory` in ZIP format. **/
private function compressDirectory(directory: String) {
	var entries: Array<Entry> = [];
	for (entry in FileSystem.readDirectory(directory)) {
		final path = Path.join([directory, entry]);
		entries = entries.concat(FileSystem.isDirectory(path) ? compressDirectory(path) : [compressFile(path)]);
	}

	return entries;
}

/** Compresses the specified `file` in ZIP format. **/
private function compressFile(file: String) {
	final bytes = File.getBytes(file);
	final entry: Entry = {
		compressed: false,
		crc32: Crc32.make(bytes),
		data: bytes,
		dataSize: bytes.length,
		fileName: file,
		fileSize: bytes.length,
		fileTime: FileSystem.stat(file).mtime
	};

	entry.compress(9);
	return entry;
}
