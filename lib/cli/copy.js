import {cpSync} from "node:fs";
import {fileURLToPath} from "node:url";
import {join} from "node:path";
import {Command} from "commander";

/**
 * Copies the library assets to a given directory.
 * @param {string} output The output directory.
 * @param {object} options The command line options.
 * @param {boolean} options.css Value indicating whether to only copy the CSS files.
 * @param {boolean} options.fonts Value indicating whether to only copy the font files.
 */
function action(output, {css, fonts}) {
	let directories = [];
	if (css) directories.push("css");
	if (fonts) directories.push("fonts");
	if (!directories.length) directories = ["css", "fonts"];

	const basePath = fileURLToPath(new URL("../..", import.meta.url));
	const input = join(basePath, "www");
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
	.option("-f, --fonts", "copy only the fonts files")
	.action(action);
