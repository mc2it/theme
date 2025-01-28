import console from "node:console";
import {parseArgs} from "node:util";
import {copyAssets} from "../theme.js";

// The usage information.
const usage = `
Copy the theme assets to a given directory.

Usage:
	npx @mc2it/theme copy [options] <directory>

Arguments:
	directory    The path to the output directory.

Options:
	-c, --css    Copy only CSS files.
	-f, --fonts  Copy only font files.
	-i, --img    Copy only image files.
	-s, --sass   Copy only Sass files.
	-h, --help   Display this help.
`;

/**
 * Copies the theme assets to a given directory.
 * @param args The command line arguments.
 * @returns Resolves when the assets have been copied.
 */
export default function(args: string[]): Promise<void> {
	const {positionals, values} = parseArgs({allowPositionals: true, args, options: {
		css: {short: "c", type: "boolean", default: false},
		fonts: {short: "f", type: "boolean", default: false},
		help: {short: "h", type: "boolean", default: false},
		img: {short: "i", type: "boolean", default: false},
		sass: {short: "s", type: "boolean", default: false}
	}});

	if (values.help) return Promise.resolve(console.log(usage.trim().replaceAll("\t", "  ")));
	if (!positionals.length) throw Error("You must provide the path of the output directory.");
	return copyAssets(positionals[0], values);
}
