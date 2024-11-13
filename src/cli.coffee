import console from "node:console"
import {access} from "node:fs/promises"
import {join} from "node:path"
import process from "node:process"
import {parseArgs} from "node:util"

# The usage information.
usage = """
Command line interface of MC2IT Theme.

Usage:
	npx @mc2it/theme [options] <command>

Options:
	-h, --help                  Display this help.
	-v, --version               Output the version number.

Commands:
	copy [options] <directory>  Copy the theme assets to a given directory.
	libpath [options]           Print the path to the theme assets.
"""

# Start the application.
try
	process.title = "MC2IT Theme"

	# Parse the command line arguments.
	{positionals, tokens, values} = parseArgs allowPositionals: yes, strict: no, tokens: yes, options:
		help: {short: "h", type: "boolean", default: off}
		version: {short: "v", type: "boolean", default: off}

	# Print the usage.
	if values.version
		{default: {version}} = await import("../package.json", with: {type: "json"})
		console.log version
		process.exit()

	if not positionals.length or (values.help and not positionals.length)
		console.log usage.replaceAll "\t", "  "
		process.exit()

	# Run the requested command.
	try
		[command] = positionals
		path = "../lib/cli/#{command}.js"
		await access join import.meta.dirname, path
	catch
		console.error "Unknown command \"#{command}\"."
		process.exit 400

	{default: run} = await import(path)
	{index} = tokens.find ({kind}) -> kind is "positional"
	await run process.argv[index + 3..]

catch error
	console.error if error instanceof Error then error.message else error
	process.exit 500
