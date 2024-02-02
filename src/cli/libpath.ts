import console from "node:console";
import {parseArgs} from "node:util";
import {assetPath} from "../theme.js";

/**
 * The usage information.
 */
const usage = `
Print the path to the library assets.

Usage:
  mc2it_theme libpath [options]

Options:
  -s, --scss  Print the specific path for SCSS files.
  -h, --help  Display this help.
`;

/**
 * Prints the path to the library assets.
 * @param args The command line arguments.
 */
export default function(args: string[]): void {
	const {values} = parseArgs({args, options: {
		help: {short: "h", type: "boolean", default: false},
		scss: {short: "s", type: "boolean", default: false}
	}});

	console.log(values.help ? usage.trim() : assetPath(values));
}
