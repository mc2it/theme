import console from "node:console";
import {fileURLToPath} from "node:url";
import {Command} from "commander";

/**
 * Returns the path to the library assets.
 * @param {Partial<{scss: boolean, stylus: boolean}>} [options] The command line options.
 * @returns {string} The path to the library assets.
 */
export function getAssetPath(options = {}) {
	const folder = options.scss ? "scss" : options.stylus ? "stylus" : "";
	return fileURLToPath(new URL(folder ? `../../lib/ui/${folder}` : "../../www", import.meta.url));
}

/**
 * Command printing the path to the library assets.
 * @type {Command}
 */
export default new Command("libpath")
	.description("Print the path to the library assets.")
	.option("--scss", "print the specific path to the Sass files")
	.option("--stylus", "print the specific path to the Stylus files")
	.action(options => console.log(getAssetPath(options)));
