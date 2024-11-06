import console from "node:console"
import {parseArgs} from "node:util"
import {copyAssets} from "../theme.js"

# The usage information.
usage = """
Copy the theme assets to a given directory.

Usage:
	mc2it_theme copy [options] <directory>

Arguments:
	directory    The path to the output directory.

Options:
	-c, --css    Copy only CSS files.
	-f, --fonts  Copy only font files.
	-i, --img    Copy only image files.
	-s, --sass   Copy only Sass files.
	-h, --help   Display this help.
"""

# Copies the theme assets to a given directory.
export default (args) ->
	{positionals, values} = parseArgs allowPositionals: yes, args: args, options:
		css: {short: "c", type: "boolean", default: off}
		fonts: {short: "f", type: "boolean", default: off}
		help: {short: "h", type: "boolean", default: off}
		img: {short: "i", type: "boolean", default: off}
		sass: {short: "s", type: "boolean", default: off}

	switch
		when values.help
			console.log usage.replaceAll "\t", "  "
			Promise.resolve()
		when not positionals.length then throw Error "You must provide the path of the output directory."
		else copyAssets(positionals[0], values)
