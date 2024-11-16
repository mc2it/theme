import gulp from "gulp"
import {spawn} from "node:child_process"
import {cp, readdir, rm} from "node:fs/promises"
import {join} from "node:path"

# The shared Sass options.
sassOptions = ["--no-source-map", "--pkg-importer=node", "--silence-deprecation=color-functions,global-builtin,import,mixed-decls"]

# Builds the project.
export build = ->
	fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files"
	await cp join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2"
	await npx "coffee", "--compile", "--no-header", "--output", "lib", "src"
	await npx "sass", sassOptions..., "--style=compressed", "src/ui/index.sass:www/css/mc2it.css"

# Deletes all generated files.
export clean = ->
	await rm join("lib", file), recursive: yes for file from await readdir "lib" when not file.endsWith ".d.ts"
	await rm join("var", file), recursive: yes for file from await readdir "var" when file isnt ".gitkeep"
	await rm "www/css", force: yes, recursive: yes
	await rm "www/fonts/material_symbols.woff2", force: yes

# Performs the static analysis of source code.
export lint = ->
	await npx "coffeelint", "--file=etc/coffeelint.json", "gulpfile.coffee", "src"

# Publishes the package.
export publish = ->
	{default: {version}} = await import("./package.json", with: {type: "json"})
	await npx "gulp"
	await run "npm", "publish", "--registry=#{registry}" for registry from ["https://registry.npmjs.org", "https://npm.pkg.github.com"]
	await run "git", action..., "v#{version}" for action from [["tag"], ["push", "origin"]]

# Watches for file changes.
export watch = ->
	npx "coffee", "--compile", "--map", "--no-header", "--output", "lib", "--watch", "src"
	npx "sass", sassOptions..., "--watch", "src/ui/index.sass:www/css/mc2it.css"

# The default task.
export default gulp.series clean, build

# Executes a command from a local package.
npx = (command, args...) -> run "npm", "exec", "--", command, args...

# Spawns a new process using the specified command.
run = (command, args...) -> new Promise (resolve, reject) ->
	spawn command, args, shell: on, stdio: "inherit"
		.on "close", (code) -> if code then reject(Error [command, args...].join(" ")) else resolve()
