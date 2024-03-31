import {argv} from "node:process";
import {parseArgs} from "node:util";
import copy from "./cli/copy.js";
import libpath from "./cli/libpath.js";
import pkg from "../package.json" with {type: "json"};

/**
 * The usage information.
 */
const usage = `
Command line interface of MC2IT Theme.

Usage:
  mc2it_theme [options] <command>

Options:
  -h, --help                  Display this help.
  -v, --version               Output the version number.

Commands:
  copy [options] <directory>  Copy the library assets to a given directory.
  libpath [options]           Print the path to the library assets.
`;

/**
 * Application entry point.
 */
export async function main(): Promise<void> {
	// Parse the command line arguments.
	const {positionals, tokens, values} = parseArgs({allowPositionals: true, strict: false, tokens: true, options: {
		help: {short: "h", type: "boolean", default: false},
		version: {short: "v", type: "boolean", default: false}
	}});

	// Print the usage.
	if (values.version) return console.log(pkg.version);
	if (!positionals.length || (values.help && !positionals.length)) return console.log(usage.trim());

	// Run the requested command.
	const {index} = tokens.find(({kind}) => kind == "positional")!;
	const args = argv.slice(index + 3);
	const [command] = positionals;

	switch (command) {
		case "copy": await copy(args); break;
		case "libpath": libpath(args); break;
		default: console.log(usage.trim());
	}
}

// Start the application.
main().catch((error: unknown) => {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
});
