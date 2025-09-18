import esbuild from "esbuild";
import gulp from "gulp";
import {spawn} from "node:child_process";
import {cp, readdir, rm} from "node:fs/promises";
import {join} from "node:path";
import {env} from "node:process";
import {esbuildOptions} from "./etc/ESBuild.js";
import pkg from "./package.json" with {type: "json"};

/** Deploys the assets. */
export async function assets() {
	const fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files";
	await cp(join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/Fonts/MaterialSymbols.woff2");
}

/** Builds the project. */
export async function build() {
	await assets();
	await esbuild.build(esbuildOptions());
	await run(`npx tsc ${typeScriptArguments()}`);
}

/** Deletes all generated files. */
export async function clean() {
	for (const folder of ["lib", "www/Styles"]) await rm(folder, {force: true, recursive: true});
	for (const file of await readdir("var")) if (file != ".gitkeep") await rm(join("var", file), {recursive: true});
	await rm("www/Fonts/MaterialSymbols.woff2", {force: true});
}

/** Packages the project. */
export async function dist() {
	env.NODE_ENV = "production";
	await build();
	env.NODE_ENV = "development";
	await esbuild.build(esbuildOptions());
}

/** Performs the static analysis of source code. */
export async function lint() {
	await run("npx tsc --build tsconfig.json --noEmit");
	await run("npx eslint --cache --cache-location=var --config=etc/ESLint.js gulpfile.js bin src");
}

/** Publishes the package. */
export async function publish() {
	await run("npx gulp");
	for (const action of ["tag", "push origin"]) await run(`git ${action} v${pkg.version}`);
	for (const registry of ["https://registry.npmjs.org", "https://npm.pkg.github.com"]) await run(`npm publish --registry=${registry}`);
}

/** Watches for file changes. */
export async function watch() {
	env.NODE_ENV = "development";
	await assets();
	void (await esbuild.context(esbuildOptions())).watch();
	void run(`npx tsc ${typeScriptArguments({watch: true})}`);
}

/** The default task. */
export default gulp.series(clean, dist);

/**
 * Spawns a new process using the specified command.
 * @param {string} command The command to run.
 * @returns {Promise<void>} Resolves when the command is terminated.
 */
function run(command) {
	return new Promise((resolve, reject) => {
		const process = spawn(command, {shell: true, stdio: "inherit"});
		process.on("close", code => code ? reject(Error(command)) : resolve());
	});
}

/**
 * Gets the TypeScript build arguments.
 * @param {{watch?: boolean}} options Value indicating whether to enable file watching.
 * @returns {string} The arguments to be passed to the TypeScript command line.
 */
function typeScriptArguments(options = {}) {
	const args = ["--build", "src/Cli/tsconfig.json"];
	if (env.NODE_ENV != "production") args.push("--sourceMap");
	if (options.watch) args.push("--preserveWatchOutput", "--watch");
	return args.join(" ");
}
