import console from "node:console";
import {join} from "node:path";
import {fileURLToPath} from "node:url";
import {Command} from "commander";

/**
 * Prints the path to the library assets.
 * @param {object} options The command line options.
 * @param {boolean} options.scss Value indicating whether to print the specific path to the Sass files.
 */
function printLibraryPath({scss}) {
	console.log(join(fileURLToPath(new URL("../..", import.meta.url)), scss ? "lib/ui" : "www"));
}

/**
 * Command printing the path to the library assets.
 * @type {Command}
 */
export default new Command("libpath")
	.description("Print the path to the library assets.")
	.option("-s, --scss", "print the specific path to the Sass files")
	.action(printLibraryPath);
