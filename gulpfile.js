import gulp from "gulp";
import {spawn} from "node:child_process";
import {cp, glob, readdir, readFile, rm, writeFile} from "node:fs/promises";
import {join} from "node:path";
import {env} from "node:process";
import pkg from "./package.json" with {type: "json"};

/** Deploys the assets. */
export async function assets() {
	const fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files";
	await cp(join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2");
}

/** Builds the project. */
export async function build() {
	await assets();
	await run("npx", "tsc", ...typeScriptArguments());
	await run("npx", "sass", ...sassArguments());
}

/** Deletes all generated files. */
export async function clean() {
	for (const folder of ["lib", "www/css"]) await rm(folder, {force: true, recursive: true});
	for (const file of await readdir("var")) if (file != ".gitkeep") await rm(join("var", file), {recursive: true});
	await rm("www/fonts/material_symbols.woff2", {force: true});
}

/** Packages the project. */
export async function dist() {
	env.NODE_ENV = "production"
	await build();
}

/** Performs the static analysis of source code. */
export async function lint() {
	await run("npx", "tsc", "--build", "tsconfig.json", "--noEmit");
	await run("npx", "eslint", "--config=etc/eslint.js", "gulpfile.js", "bin", "src");
}

/** Publishes the package. */
export async function publish() {
	await run("npx", "gulp");
	for (const registry of ["https://registry.npmjs.org", "https://npm.pkg.github.com"]) await run("npm", "publish", `--registry=${registry}`);
	for (const action of [["tag"], ["push", "origin"]]) await run("git", ...action, `v${pkg.version}`);
}

/** Updates the version number in the sources. */
export async function version() {
	for await (const file of glob("*/*.esproj"))
		await replaceInFile(file, /<Version>\d+(\.\d+){2}<\/Version>/, `<Version>${pkg.version}</Version>`);
}

/** Watches for file changes. */
export async function watch() {
	env.NODE_ENV = "development";
	await assets();
	void run("npx", "tsc", ...typeScriptArguments({watch: true}));
	void run("npx", "sass", ...sassArguments({watch: true}));
}

/** The default task. */
export default gulp.series(clean, version, dist);

/**
 * Replaces the specified pattern in a given file.
 * @param {string} file The path of the file to be processed.
 * @param {RegExp} pattern The regular expression to find.
 * @param {string} replacement The replacement text.
 * @returns {Promise<void>} Resolves when the replacement has been completed.
 */
async function replaceInFile(file, pattern, replacement) {
	await writeFile(file, (await readFile(file, "utf8")).replace(pattern, replacement));
}

/**
 * Spawns a new process using the specified command.
 * @param {string} command The command to run.
 * @param {...string} args The command arguments.
 * @returns {Promise<void>} Resolves when the command is terminated.
 */
function run(command, ...args) {
	return new Promise((resolve, reject) => {
		const process = spawn(command, args, {shell: true, stdio: "inherit"});
		process.on("close", code => code ? reject(Error([command, ...args].join(" "))) : resolve());
	});
}

/**
 * Gets the Sass build arguments.
 * @param {{watch?: boolean}} options Value indicating whether to enable file watching.
 * @returns {string[]} The arguments to be passed to the Sass command line.
 */
function sassArguments(options = {}) {
	const args = ["--pkg-importer=node", "--quiet-deps", "--silence-deprecation=import"];
	args.push(...env.NODE_ENV == "production" ? ["--no-source-map", "--style=compressed"] : ["--source-map-urls=absolute"]);
	if (options.watch) args.push("--watch");
	args.push("src/ui/index.scss:www/css/mc2it.css");
	return args;
}

/**
 * Gets the TypeScript build arguments.
 * @param {{watch?: boolean}} options Value indicating whether to enable file watching.
 * @returns {string[]} The arguments to be passed to the TypeScript command line.
 */
function typeScriptArguments(options = {}) {
	const args = ["--build", "src/tsconfig.json"];
	if (env.NODE_ENV != "production") args.push("--sourceMap");
	if (options.watch) args.push("--preserveWatchOutput", "--watch");
	return args;
}
