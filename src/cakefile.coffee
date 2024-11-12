{spawnSync} = require "node:child_process"
console = require "node:console"
{cpSync, mkdirSync, readdirSync, rmSync, writeFileSync} = require "node:fs"
{EOL} = require "node:os"
{join} = require "node:path"
{exit} = require "node:process"
{compile, NodePackageImporter} = require "sass"
pkg = require "../package.json"

option "-m", "--map", "Whether to generate source maps."

task "build", "Builds the project.", (options) ->
	fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files"
	cpSync join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2"

	sourcemaps = if options.map then ["--map"] else []
	run "coffee", "--compile", sourcemaps..., "--no-header", "--output", "lib", "src"
	compileSass options.map

task "clean", "Deletes all generated files.", ->
	rmSync join("lib", file), recursive: yes for file from readdirSync "lib" when not file.endsWith ".d.ts"
	rmSync join("var", file), recursive: yes for file from readdirSync "var" when file isnt ".gitkeep"
	rmSync "www/css", force: yes, recursive: yes
	rmSync "www/fonts/material_symbols.woff2", force: yes

task "dist", "Packages the project.", ->
	invoke script for script from ["clean", "build"]
	rmSync "lib/cakefile.js"

task "lint", "Performs the static analysis of source code.", ->
	npx "coffeelint", "--file=etc/coffeelint.json", "src"

task "publish", "Publishes the package.", ->
	invoke "dist"
	run "npm", "publish", "--registry=#{registry}" for registry from ["https://registry.npmjs.org", "https://npm.pkg.github.com"]
	run "git", action..., "v#{pkg.version}" for action from [["tag"], ["push", "origin"]]

task "watch", "Watches for file changes.", (options) ->
	sourcemaps = if options.map then ["--map"] else []
	run "coffee", "--compile", sourcemaps..., "--no-header", "--output", "lib", "--watch", "src"

# Compiles the Sass stylesheet.
compileSass = (debug) ->
	{css, sourceMap} = compile "src/ui/index.sass",
		importers: [new NodePackageImporter]
		silenceDeprecations: ["color-functions", "global-builtin", "import", "mixed-decls"]
		sourceMap: debug
		sourceMapIncludeSources: no
		style: if debug then "expanded" else "compressed"

	mkdirSync "www/css", recursive: yes
	writeFileSync "www/css/mc2it.css", if sourceMap then "#{css}#{EOL}/*# sourceMappingURL=mc2it.css.map */" else css
	writeFileSync "www/css/mc2it.css.map", JSON.stringify(sourceMap) if sourceMap

# Executes a command from a local package.
npx = (command, args...) -> run "npm", "exec", "--", command, args...

# Spawns a new process using the specified command.
run = (command, args...) ->
	{status} = spawnSync command, args, shell: on, stdio: "inherit"
	unless status is 0
		console.error "Command failed:", command, args...
		exit status
