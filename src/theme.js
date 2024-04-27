import {cp} from "node:fs/promises";
import {join} from "node:path";
import {fileURLToPath} from "node:url";

/**
 * Returns the path to the library assets.
 * @param {Partial<PathOptions>} options The path options.
 * @returns {string} The path to the library assets.
 */
export function assetPath(options = {}) {
	return fileURLToPath(new URL(options.scss ? "./ui" : "../www", import.meta.url));
}

/**
 * Copies the library assets to a given directory.
 * @param {string} output The path to the output directory.
 * @param {Partial<CopyOptions>} options The copy options.
 * @returns {Promise<void>} Resolves when the assets have been copied.
 */
export async function copyAssets(output, options = {}) {
	const sources = ["css", "fonts", "img"];

	let directories = sources.filter(source => /** @type {Record<string, boolean>} */ (options)[source]);
	if (!directories.length) directories = sources;

	const input = fileURLToPath(new URL("../www", import.meta.url));
	for (const directory of directories)
		await cp(join(input, directory), directories.length == 1 ? output : join(output, directory), {recursive: true});
}

/**
 * Defines the options of the {@link copyAssets} function.
 * @typedef {object} CopyOptions
 * @property {boolean} css Value indicating whether to copy only the CSS files.
 * @property {boolean} fonts Value indicating whether to copy only the font files.
 * @property {boolean} img Value indicating whether copy only the image files.
 */

/**
 * Defines the options of the {@link assetPath} function.
 * @typedef {object} PathOptions
 * @property {boolean} scss Value indicating whether to return the specific path for SCSS files.
 */
