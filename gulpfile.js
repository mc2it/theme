import gulp from "gulp";
import {spawn} from "node:child_process";
import {cp, readdir, rm} from "node:fs/promises";
import {delimiter, join, resolve} from "node:path";
import {env} from "node:process";
import compileSass from "./etc/sass.js";
import pkg from "./package.json" with {type: "json"};

// Initialize the build system.
env.PATH = `${resolve("node_modules/.bin")}${delimiter}${env.PATH}`;

/** Builds the project. */
export async function build() {
	const fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files";
	await cp(join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2");
	return Promise.all([compileSass(), $("tsc", ["--build", "src/tsconfig.json"])]);
}

/** Deletes all generated files. */
export async function clean() {
	await rm("www/fonts/material_symbols.woff2", {force: true});
	for (const directory of ["lib", "www/css"]) await rm(directory, {force: true, recursive: true});
	for (const file of await readdir("var")) if (file != ".gitkeep") await rm(join("var", file), {recursive: true});
}

/** Packages the application. */
export function dist() {
	env.NODE_ENV = "production";
	return build();
}

/** Performs the static analysis of source code. */
export async function lint() {
	await build();
	await $("tsc", ["--build", "tsconfig.json"]);
	await $("eslint", ["--config=etc/eslint.js", "gulpfile.js", "bin", "src"]);
	return $("stylelint", ["--config=etc/stylelint.js", "src/ui/**/*.scss"]);
}

/** Publishes the package. */
export async function publish() {
	for (const registry of ["https://registry.npmjs.org", "https://npm.pkg.github.com"]) await $("npm", ["publish", `--registry=${registry}`]);
	for (const action of [["tag"], ["push", "origin"]]) await $("git", [...action, `v${pkg.version}`]);
}

/** Watches for file changes. */
export async function watch() {
	await build();

	const buildApp = () => $("tsc", ["--build", "src/tsconfig.json", "--sourceMap"]);
	gulp.watch("src/**/*.ts", buildApp);

	const buildStyleSheet = () => compileSass();
	gulp.watch("src/ui/**/*.scss", buildStyleSheet);
}

/** The default task. */
export default gulp.series(
	clean,
	dist
);

/**
 * Spawns a new process using the specified command.
 * @param {string} command The command to run.
 * @param {string[]} args The command arguments.
 * @param {import("node:child_process").SpawnOptionsWithoutStdio} options The settings to customize how the process is spawned.
 * @return {Promise<void>} Resolves when the command is terminated.
 */
function $(command, args = [], options = {}) {
	const {promise, resolve: fulfill, reject} = /** @type {PromiseWithResolvers<void>} */ (Promise.withResolvers());
	spawn(command, args, {shell: true, stdio: "inherit", ...options}).on("close", code => code ? reject(new Error(command)) : fulfill());
	return promise;
}
