import console from "node:console";
import {access} from "node:fs/promises";
import {join} from "node:path";
import {exit} from "node:process";
import {parseArgs} from "node:util";
import pkg from "../../package.json" with {type: "json"};

// The usage information.
const usage = `
Command line interface of MC2IT Theme.

Usage:
	npx @mc2it/theme [options] <command>

Options:
	-h, --help                  Display this help.
	-v, --version               Output the version number.

Commands:
	copy [options] <directory>  Copy the theme assets to a given directory.
	libpath                     Print the path to the theme assets.
`;

// Start the application.
try {
	// Parse the command line arguments.
	const {positionals, tokens, values} = parseArgs({allowPositionals: true, strict: false, tokens: true, options: {
		help: {short: "h", type: "boolean", default: false},
		version: {short: "v", type: "boolean", default: false}
	}});

	// Print the usage.
	if (values.version) {
		console.log(pkg.version);
		exit(0);
	}

	if (!positionals.length || (values.help && !positionals.length)) {
		console.log(usage.trim().replaceAll("\t", "  "));
		exit(0);
	}

	// Run the requested command.
	const [command] = positionals;
	const path = `./Commands/${command}.js`;
	try { await access(join(import.meta.dirname, path)); }
	catch {
		console.error(`Unknown command "${command}".`);
		exit(400);
	}

	const {default: run} = await import(path) as {default: (args: string[]) => Promise<void>};
	const {index} = tokens.find(({kind}) => kind == "positional") as {index: number};
	await run(process.argv.slice(index + 3));
}
catch (error) {
	console.error(error instanceof Error ? error.message : error);
	exit(500);
}
