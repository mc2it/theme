#!/usr/bin/env node
import console from "node:console";
import {access} from "node:fs/promises";
import {argv, exit} from "node:process";
import {parseArgs} from "node:util";
import pkg from "../package.json" with {type: "json"};

// The usage information.
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

try {
	// Parse the command line arguments.
	const {positionals, tokens, values} = parseArgs({allowPositionals: true, strict: false, tokens: true, options: {
		help: {short: "h", type: "boolean", default: false},
		version: {short: "v", type: "boolean", default: false}
	}});

	// Print the usage.
	if (values.version) {
		console.log(pkg.version);
		exit();
	}

	if (!positionals.length || (values.help && !positionals.length)) {
		console.log(usage.trim());
		exit();
	}

	// Run the requested command.
	const [command] = positionals;
	const path = `../src/cli/${command}.js`;
	try { await access(new URL(path, import.meta.url)); }
	catch { throw Error(`Unknown command "${command}".`); }

	const {default: run} = await import(path);
	const {index} = /** @type {{index: number}} */ (tokens.find(({kind}) => kind == "positional"));
	await run(argv.slice(index + 3));
}
catch(error) {
	console.error(error instanceof Error ? error.message : error);
	exit(1);
}
