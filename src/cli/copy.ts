import console from "node:console";
import {parseArgs} from "node:util";
import {copyAssets} from "../index.js";

// The usage information.
const usage = `
Copy the library assets to a given directory.

Usage:
  mc2it_theme copy [options] <directory>

Arguments:
  directory      The path to the output directory.

Options:
  -c, --css      Copy only the CSS files.
  -f, --fonts    Copy only the font files.
  -i, --img      Copy only the image files.
  -h, --help     Display this help.
`;

/**
 * Copies the library assets to a given directory.
 * @param args The command line arguments.
 * @returns Resolves when the assets have been copied.
 */
export default function(args: string[]): Promise<void> {
	const {positionals, values} = parseArgs({allowPositionals: true, args, options: {
		css: {short: "c", type: "boolean", default: false},
		fonts: {short: "f", type: "boolean", default: false},
		help: {short: "h", type: "boolean", default: false},
		img: {short: "i", type: "boolean", default: false}
	}});

	if (values.help) return Promise.resolve(console.log(usage.trim()));
	if (!positionals.length) throw Error("You must provide the path of the output directory.");
	return copyAssets(positionals[0], values);
}
