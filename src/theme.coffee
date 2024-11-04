import {cp} from "node:fs/promises"
import {join} from "node:path"

# Returns the path to the theme assets.
export assetPath = (options = {}) ->
	join import.meta.dirname, if options.sass then "../src/ui" else "../www"

# Copies the theme assets to a given output directory.
export copyAssets = (output, options = {}) ->
	sources = ["css", "fonts", "img", "sass"]
	directories = if (folders = sources.filter (source) -> options[source]).length then folders else sources
	for directory in directories
		input = if directory is "sass" then assetPath sass: on else join assetPath(), directory
		target = if directories.length is 1 then output else join output, directory
		await cp input, target, recursive: yes
