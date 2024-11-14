import gulp from "gulp"
import {spawn} from "node:child_process"
import {cp, mkdir, readdir, rm, writeFile} from "node:fs/promises"
import {EOL} from "node:os"
import {join} from "node:path"
import {env} from "node:process"
import {compile, initCompiler, NodePackageImporter} from "sass"

# Builds the project.
export build = ->
	fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files"
	await cp join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2"
	await compileSass()
	await npx "coffee", "--compile", "--no-header", "--output", "lib", "src"

# Deletes all generated files.
export clean = ->
	await rm join("lib", file), recursive: yes for file from await readdir "lib" when not file.endsWith ".d.ts"
	await rm join("var", file), recursive: yes for file from await readdir "var" when file isnt ".gitkeep"
	await rm "www/css", force: yes, recursive: yes
	await rm "www/fonts/material_symbols.woff2", force: yes

# Packages the project.
export dist = ->
	env.NODE_ENV = "production"
	await build()

# Performs the static analysis of source code.
export lint = ->
	await npx "coffeelint", "--file=etc/coffeelint.json", "gulpfile.coffee", "src"

# Publishes the package.
export publish = ->
	{default: {version}} = await import("./package.json", with: {type: "json"})
	await run "gulp"
	await run "npm", "publish", "--registry=#{registry}" for registry from ["https://registry.npmjs.org", "https://npm.pkg.github.com"]
	await run "git", action..., "v#{version}" for action from [["tag"], ["push", "origin"]]

# Watches for file changes.
export watch = ->
	env.NODE_ENV = "development"
	compiler = initCompiler()
	gulp.watch "src/ui/**/*.sass", ignoreInitial: no, buildStyleSheet = -> compileSass(compiler)
	await npx "coffee", "--compile", "--map", "--no-header", "--output", "lib", "--watch", "src"

# The default task.
export default gulp.series clean, dist

# Compiles the Sass stylesheet.
compileSass = (compiler) ->
	build = if compiler then compiler.compile.bind compiler else compile
	production = env.NODE_ENV is "production"

	{css, sourceMap} = build "src/ui/index.sass",
		importers: [new NodePackageImporter]
		silenceDeprecations: ["color-functions", "global-builtin", "import", "mixed-decls"]
		sourceMap: not production
		sourceMapIncludeSources: no
		style: if production then "compressed" else "expanded"

	await mkdir "www/css", recursive: yes
	await writeFile "www/css/mc2it.css", if sourceMap then "#{css}#{EOL}/*# sourceMappingURL=mc2it.css.map */" else css
	await writeFile "www/css/mc2it.css.map", JSON.stringify(sourceMap) if sourceMap

# Executes a command from a local package.
npx = (command, args...) -> run "npm", "exec", "--", command, ...args

# Spawns a new process using the specified command.
run = (command, args...) -> new Promise (resolve, reject) ->
	spawn command, args, shell: on, stdio: "inherit"
		.on "close", (code) -> if code then reject(Error [command, args...].join(" ")) else resolve()