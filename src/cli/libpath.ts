import console from "node:console";
import {fileURLToPath} from "node:url";
import {parseArgs} from "node:util";

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
 * Returns the path to the library assets.
 * @param options The command line options.
 * @returns The path to the library assets.
 */
export function getAssetPath(options: Partial<AssetPathOptions> = {}): string {
	return fileURLToPath(new URL(options.scss ? "../src/ui" : "../www", import.meta.url));
}

/**
 * Defines the options of the {@link getAssetPath} function.
 */
export interface AssetPathOptions {

	/**
	 * Value indicating whether to return the specific path for SCSS files.
	 */
	scss: boolean;
}

/**
 * Prints the path to the library assets.
 * @param args The command line arguments.
 */
export default function(args: string[]): void {
	const {values} = parseArgs({args, options: {
		help: {short: "h", type: "boolean", default: false},
		scss: {short: "s", type: "boolean", default: false}
	}});

	console.log(values.help ? usage.trim() : getAssetPath(values));
}
