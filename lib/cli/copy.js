import {cpSync} from "node:fs";
import {fileURLToPath} from "node:url";
import {join} from "node:path";
import {Command} from "commander";

/**
 * Copies the library assets to a given directory.
 * @param {string} output The path to the output directory.
 * @param {Object} options The command line options.
 * @param {boolean} [options.css] Value indicating whether to only copy the CSS files.
 * @param {boolean} [options.fonts] Value indicating whether to only copy the font files.
 * @param {boolean} [options.img] Value indicating whether to only copy the image files.
 */
function copyAssets(output, options) {
	const sources = ["css", "fonts", "img"];
	let directories = sources.filter(name => name in options);
	if (!directories.length) directories = sources;

	const input = join(fileURLToPath(new URL("../..", import.meta.url)), "www");
	for (const directory of directories)
		cpSync(join(input, directory), directories.length == 1 ? output : join(output, directory), {recursive: true});
}

/**
 * Command copying the library assets to a given directory.
 * @type {Command}
 */
export default new Command("copy")
	.description("Copy the library assets to a given directory.")
	.argument("directory", "the path to the output directory")
	.option("-c, --css", "copy only the CSS files")
	.option("-f, --fonts", "copy only the font files")
	.option("-i, --img", "copy only the image files")
	.action(copyAssets);
