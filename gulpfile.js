import gulp from "gulp";
import {spawn} from "node:child_process";
import {cp, readdir, rm} from "node:fs/promises";
import {join} from "node:path";
import pkg from "./package.json" with {type: "json"};

/** Deploys the assets. */
export async function assets() {
	const fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files";
	await cp(join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2");
}

/** Builds the project. */
export async function build() {
	await assets();
	await npx("tsc", "--build", "src/tsconfig.json");
	await npx("sass", ...sassOptions({sourcemaps: false}), "src/ui/index.scss:www/css/mc2it.css");
}

/** Deletes all generated files. */
export async function clean() {
	for (const folder of ["lib", "www/css"]) await rm(folder, {force: true, recursive: true});
	for (const file of await readdir("var")) if (file != ".gitkeep") await rm(join("var", file), {recursive: true});
	await rm("www/fonts/material_symbols.woff2", {force: true});
}

/** Performs the static analysis of source code. */
export async function lint() {
	await npx("tsc", "--build", "tsconfig.json", "--noEmit");
	await npx("eslint", "--config=etc/eslint.js", "gulpfile.js", "bin", "src");
}

/** Publishes the package. */
export async function publish() {
	await npx("gulp");
	for (const registry of ["https://registry.npmjs.org", "https://npm.pkg.github.com"]) await run("npm", "publish", `--registry=${registry}`);
	for (const action of [["tag"], ["push", "origin"]]) await run("git", ...action, `v${pkg.version}`);
}

/** Watches for file changes. */
export async function watch() {
	await assets();
	void npx("tsc", "--build", "src/tsconfig.json", "--preserveWatchOutput", "--sourceMap", "--watch");
	void npx("sass", ...sassOptions({sourcemaps: true}), "--watch", "src/ui/index.scss:www/css/mc2it.css");
}

/** The default task. */
export default gulp.series(clean, build);

/**
 * Executes a command from a local package.
 * @param {string} command The command to run.
 * @param {...string} args The command arguments.
 * @return {Promise<void>} Resolves when the command is terminated.
 */
function npx(command, ...args) {
	return run("npm", "exec", "--", command, ...args);
}

/**
 * Spawns a new process using the specified command.
 * @param {string} command The command to run.
 * @param {...string} args The command arguments.
 * @return {Promise<void>} Resolves when the command is terminated.
 */
function run(command, ...args) {
	return new Promise((resolve, reject) => {
		const process = spawn(command, args, {shell: true, stdio: "inherit"});
		process.on("close", code => code ? reject(Error([command, ...args].join(" "))) : resolve());
	});
}

/**
 * Returns the Sass build options.
 * @param {{sourcemaps?: boolean}} options Value indicating whether to generate the source maps.
 * @returns {string[]} The flags to be passed to the Sass command line.
 */
function sassOptions(options = {}) {
	const flags = ["--pkg-importer=node", "--quiet-deps", "--silence-deprecation=import"];
	flags.push(...options.sourcemaps ? ["--source-map-urls=absolute"] : ["--no-source-map", "--style=compressed"]);
	return flags;
}
