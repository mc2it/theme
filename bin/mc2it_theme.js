#!/usr/bin/env node
import console from "node:console";
import {existsSync} from "node:fs";
import process from "node:process";
import {parseArgs} from "node:util";
import pkg from "../package.json" assert {type: "json"};

// The usage information.
const usage = `
Command line interface of MC2IT Theme.

Usage:
  mc2it_theme [command] [options]

Options:
  -h, --help                  Display this help.
  -v, --version               Output the version number.

Commands:
  copy [options] <directory>  Copy the library assets to a given directory.
  libpath                     Print the path to the library assets.
`;

// Start the application.
try {
	// Parse the command line arguments.
	const {positionals, tokens, values} = parseArgs({
		allowPositionals: true,
		strict: false,
		tokens: true,
		options: {
			help: {short: "h", type: "boolean", default: false},
			version: {short: "v", type: "boolean", default: false}
		}
	});

	// Print the usage.
	if (values.version || (values.help && !positionals.length)) {
		console.log(values.version ? pkg.version : usage.trim());
		process.exit();
	}

	// Check the requirements.
	if (!positionals.length) {
		console.log(usage.trim());
		process.exit();
	}

	// Handle the subcommand.
	const {index, value} = /** @type {{index: number, value: string}} */ (tokens.find(({kind}) => kind == "positional"));
	const path = `../src/cli/${value}.js`;
	if (!existsSync(new URL(path, import.meta.url))) throw Error(`Unknown command '${value}'.`);

	const {default: handler} = await import(path);
	handler(process.argv.slice(index + 3));
}
catch (error) {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
}
