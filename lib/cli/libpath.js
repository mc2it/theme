import console from "node:console";
import {join} from "node:path";
import {fileURLToPath} from "node:url";
import {Command} from "commander";

/**
 * Returns the path to the library assets.
 * @param {Object} [options] The command line options.
 * @param {boolean} [options.scss=false] Value indicating whether to print the specific path to the Sass files.
 * @returns {string} The path to the library assets.
 */
export function getAssetPath(options = {}) {
	return join(fileURLToPath(new URL("../..", import.meta.url)), options.scss ? "lib/ui" : "www");
}

/**
 * Command printing the path to the library assets.
 * @type {Command}
 */
export default new Command("libpath")
	.description("Print the path to the library assets.")
	.option("-s, --scss", "print the specific path to the Sass files")
	.action(options => console.log(getAssetPath(options)));
