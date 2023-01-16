import {cp} from "node:fs/promises";
import {env} from "node:process";
import {deleteAsync} from "del";
import esbuild from "esbuild";
import {execa} from "execa";
import gulp from "gulp";
import config from "./jsconfig.json" assert {type: "json"};
import pkg from "./package.json" assert {type: "json"};
import {cssOptions} from "./etc/esbuild.js";

/** Builds the project. */
export async function build() {
	await cp("node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2", "www/fonts/bootstrap_icons.woff2");
	await esbuild.build(cssOptions());
	return exec("tsc", ["--project", "src/jsconfig.json"]);
}

/** Deletes all generated files and reset any saved state. */
export function clean() {
	return deleteAsync(["lib", "var/**/*", "www/css"]);
}

/** Builds the redistributable package. */
export function dist() {
	env.NODE_ENV = "production";
	return build();
}

/** Builds the documentation. */
export async function doc() {
	await exec("typedoc", ["--options", "etc/typedoc.json"]);
	return cp("www/favicon.ico", "docs/favicon.ico");
}

/** Performs the static analysis of source code. */
export async function lint() {
	await exec("eslint", ["--config=etc/eslint.json", ...config.include]);
	await exec("stylelint", ["--config=etc/stylelint.json", "src/ui/**/*.css"]);
	return exec("tsc", ["--project", "jsconfig.json"]);
}

/** Publishes the package in the registry. */
export async function publish() {
	const registries = ["https://registry.npmjs.org", "https://git.mc2it.com/api/packages/mc2it/npm/"];
	for (const registry of registries) await exec("npm", ["publish", `--registry=${registry}`]);
	for (const command of [["tag"], ["push", "origin"]]) await exec("git", [...command, `v${pkg.version}`]);
}

/** Watches for file changes. */
export async function watch() {
	const result = await esbuild({...cssOptions(), incremental: true});
	const compile = () => result.rebuild?.();
	gulp.watch("src/ui/**/*.css", compile);
}

/** Runs the default task. */
export default gulp.series(
	clean,
	dist
);

/**
 * Runs the specified command.
 * @param {string} command The command to run.
 * @param {string[]} [args] The command arguments.
 * @param {import("execa").Options} [options] The child process options.
 * @returns {import("execa").ExecaChildProcess} Resolves when the command is finally terminated.
 */
function exec(command, args = [], options = {}) {
	return execa(command, args, {preferLocal: true, stdio: "inherit", ...options});
}
