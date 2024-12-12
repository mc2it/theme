{spawn, spawnSync} = require "node:child_process"
{cpSync, readdirSync, rmSync} = require "node:fs"
{join} = require "node:path"
pkg = require "./package.json"

task "assets", "Deploys the assets.", ->
	fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files"
	cpSync join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2"

task "build", "Builds the project.", ->
	invoke "assets"
	npx "coffee", "--compile", "--no-header", "--output", "lib", "src"
	npx "sass", sassOptions(sourcemaps: off)..., "src/ui/index.sass:www/css/mc2it.css"

task "clean", "Deletes all generated files.", ->
	rmSync folder, force: yes, recursive: yes for folder from ["lib", "www/css"]
	rmSync join("var", file), recursive: yes for file from readdirSync "var" when file isnt ".gitkeep"
	rmSync "www/fonts/material_symbols.woff2", force: yes

task "dist", "Packages the project.", ->
	invoke script for script from ["clean", "build"]

task "lint", "Performs the static analysis of source code.", ->
	npx "coffeelint", "--file=etc/coffeelint.json", "build.coffee", "src"

task "publish", "Publishes the package.", ->
	invoke "dist"
	run "npm", "publish", "--registry=#{registry}" for registry from ["https://registry.npmjs.org", "https://npm.pkg.github.com"]
	run "git", action..., "v#{pkg.version}" for action from [["tag"], ["push", "origin"]]

task "watch", "Watches for file changes.", ->
	invoke "assets"
	npxAsync "coffee", "--compile", "--map", "--no-header", "--output", "lib", "--watch", "src"
	npxAsync "sass", sassOptions(sourcemaps: on)..., "--watch", "src/ui/index.sass:www/css/mc2it.css"

# Synchronously executes a command from a local package.
npx = (command, args...) -> run "npm", "exec", "--", command, args...

# Asynchronously executes a command from a local package.
npxAsync = (command, args...) -> runAsync "npm", "exec", "--", command, args...

# Synchronously spawns a new process using the specified command.
run = (command, args...) ->
	{status} = spawnSync command, args, shell: on, stdio: "inherit"
	throw Error [command, args...].join " " if status isnt 0

# Asynchronously spawns a new process using the specified command.
runAsync = (command, args...) -> new Promise (resolve, reject) ->
	spawn command, args, shell: on, stdio: "inherit"
		.on "close", (code) -> if code then reject(Error [command, args...].join(" ")) else resolve()

# Returns the Sass build options.
sassOptions = (options = {}) ->
	flags = ["--pkg-importer=node", "--silence-deprecation=color-functions,global-builtin,import,mixed-decls"]
	flags.push (if options.sourcemaps then ["--source-map-urls=absolute"] else ["--no-source-map", "--style=compressed"])...
	flags
