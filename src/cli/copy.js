import console from "node:console";
import {cpSync} from "node:fs";
import {join} from "node:path";
import {parseArgs} from "node:util";
import {assetPath} from "./libpath.js";

/**
 * The usage information.
 * @type {string}
 */
const usage = `
Copy the library assets to a given directory.

Usage:
  mc2it_theme copy [options] <directory>

Arguments:
  directory    The path to the output directory.

Options:
  -c, --css    Copy only the CSS files.
  -f, --fonts  Copy only the font files.
  -i, --img    Copy only the image files.
  -h, --help   Display this help.
`;

/**
 * Copies the library assets to a given directory.
 * @param {string} output The path to the output directory.
 * @param {{css?: boolean, fonts?: boolean, img?: boolean}} [options] The command line options.
 */
export function copyAssets(output, options = {}) {
	const sources = ["css", "fonts", "img"];

	// @ts-expect-error TS7053
	const directories = sources.filter(name => options[name]);
	for (const directory of (directories.length ? directories : sources))
		cpSync(join(assetPath, directory), directories.length == 1 ? output : join(output, directory), {recursive: true});
}

/**
 * Copies the library assets to a given directory.
 * @param {string[]} args The command line arguments.
 */
export default function(args) {
	const {positionals, values} = parseArgs({allowPositionals: true, args, options: {
		css: {short: "c", type: "boolean", default: false},
		fonts: {short: "f", type: "boolean", default: false},
		img: {short: "i", type: "boolean", default: false},
		help: {short: "h", type: "boolean"}
	}});

	if (values.help) return console.log(usage.trim());
	if (!positionals.length) throw "Required argument 'directory' is missing.";
	copyAssets(positionals[0], values);
}
