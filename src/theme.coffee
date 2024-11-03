import {cp} from "node:fs/promises"
import {join} from "node:path"

# Returns the path to the theme assets.
export assetPath = (options = {}) ->
	join import.meta.dirname, if options.sass then "../src/ui" else "../www"

# Copies the theme assets to a given output directory.
export copyAssets = (output, options = {}) ->
	sources = ["css", "fonts", "img"]
	directories = if (folders = sources.filter (source) -> options[source]).length then folders else sources

	input = assetPath()
	for directory in directories
		target = if directories.length is 1 then output else join output, directory
		await cp join(input, directory), target, recursive: true
