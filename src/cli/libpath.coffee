import console from "node:console"
import {parseArgs} from "node:util"
import {assetPath} from "../theme.js"

# The usage information.
usage = """
Print the path to the theme assets.

Usage:
  mc2it_theme libpath [options]

Options:
  -s, --sass  Print the specific path of Sass files.
  -h, --help  Display this help.
"""

# Prints the path to the library assets.
export default (args) ->
	{values} = parseArgs args: args, options:
		help: {short: "h", type: "boolean", default: off}
		sass: {short: "s", type: "boolean", default: off}

	console.log if values.help then usage else assetPath values
	Promise.resolve()
