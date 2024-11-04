{spawnSync} = require "node:child_process"
{cpSync, mkdirSync, readdirSync, rmSync, writeFileSync} = require "node:fs"
{EOL} = require "node:os"
{join} = require "node:path"
{compile, NodePackageImporter} = require "sass"
pkg = require "./package.json"

option "-m", "--map", "Whether to generate source maps."

task "build", "Builds the project.", (options) ->
	fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files"
	cpSync join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2"

	sourcemaps = if options.map then ["--map"] else []
	run "coffee", "--compile", sourcemaps..., "--no-header", "--output", "lib", "src"
	compileSass options.map

task "clean", "Deletes all generated files.", ->
	rmSync join("lib", file), recursive: yes for file in readdirSync "lib" when not file.endsWith ".d.ts"
	rmSync join("var", file), recursive: yes for file in readdirSync "var" when file isnt ".gitkeep"
	rmSync "www/css", force: yes, recursive: yes
	rmSync "www/fonts/material_symbols.woff2", force: yes

task "dist", "Packages the project.", ->
	invoke "clean"
	invoke "build"

task "lint", "Performs the static analysis of source code.", ->
	npx "coffeelint", "--file=etc/coffeelint.json", "Cakefile", "src"
	npx "stylelint", "--config=etc/stylelint.js", "src/ui/**/*.scss"

task "publish", "Publishes the package.", ->
	invoke "dist"
	run "npm", "publish", "--registry=#{registry}" for registry in ["https://registry.npmjs.org", "https://npm.pkg.github.com"]
	run "git", action..., "v#{pkg.version}" for action in [["tag"], ["push", "origin"]]

task "watch", "Watches for file changes.", (options) ->
	sourcemaps = if options.map then ["--map"] else []
	run "coffee", "--compile", sourcemaps..., "--no-header", "--output", "lib", "--watch", "src"

# Compiles the Sass stylesheet.
compileSass = (debug) ->
	{css, sourceMap} = compile("src/ui/index.scss",
		importers: [new NodePackageImporter],
		silenceDeprecations: ["color-functions", "global-builtin", "import", "mixed-decls"],
		sourceMap: debug,
		sourceMapIncludeSources: no,
		style: if debug then "expanded" else "compressed"

	mkdirSync "www/css", recursive: yes
	writeFileSync "www/css/main.css", if sourceMap then "#{css}#{EOL}/*# sourceMappingURL=main.css.map */" else css
	writeFileSync "www/css/main.css.map", JSON.stringify(sourceMap) if sourceMap

# Executes a command from a local package.
npx = (command, args...) -> run "npm", "exec", "--", command, args...

# Spawns a new process using the specified command.
run = (command, args...) ->
	{status} = spawnSync command, args, shell: yes, stdio: "inherit"
	if status isnt 0
		console.error "Command failed:", command, args...
		process.exit status
