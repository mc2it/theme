import console from "node:console";
import {fileURLToPath} from "node:url";
import {Command} from "commander";

/**
 * The path to the library assets.
 * @type {string}
 */
export const assetPath = fileURLToPath(new URL("../../www", import.meta.url));

/**
 * Command printing the path to the library assets.
 * @type {Command}
 */
export default new Command("libpath")
	.description("Print the path to the library assets.")
	.action(() => console.log(assetPath));
