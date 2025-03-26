import console from "node:console";
import {parseArgs} from "node:util";
import {assetPath} from "../theme.js";

// The usage information.
const usage = `
Print the path to the theme assets.

Usage:
	npx @mc2it/theme libpath [options]

Options:
	-s, --sass  Print the specific path of Sass files.
	-h, --help  Display this help.
`;

/**
 * Prints the path to the theme assets.
 * @param args The command line arguments.
 * @returns Resolves when the theme path has been printed.
 */
export default function(args: string[]): Promise<void> {
	const {values} = parseArgs({args, options: {
		help: {short: "h", type: "boolean", default: false},
		sass: {short: "s", type: "boolean", default: false}
	}});

	return Promise.resolve(console.log(values.help ? usage.trim().replaceAll("\t", "  ") : assetPath(values)));
}
