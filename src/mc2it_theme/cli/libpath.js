import console from "node:console";
import {fileURLToPath} from "node:url";
import {parseArgs} from "node:util";

/**
 * The path to the library assets.
 * @type {string}
 */
export const assetPath = fileURLToPath(new URL("../../www", import.meta.url));

/**
 * The usage information.
 * @type {string}
 */
const usage = `
Print the path to the library assets.

Usage:
  mc2it_theme libpath [options]

Options:
  -h, --help  Display this help.
`;

/**
 * Prints the path to the library assets.
 * @param {string[]} args The command line arguments.
 */
export default function(args) {
	const {values} = parseArgs({args, options: {
		help: {short: "h", type: "boolean", default: false}
	}});

	console.log(values.help ? usage.trim() : assetPath);
}
