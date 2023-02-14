import {cp} from "node:fs/promises";
import esbuild from "esbuild";
import {execa} from "execa";
import gulp from "gulp";
import buildOptions from "./etc/esbuild.js";

/** Builds the project. */
export async function build() {
	await cp("node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2", "www/fonts/bootstrap_icons.woff2");
	await esbuild.build(buildOptions());
	return exec("tsc", ["--project", "src/jsconfig.json"]);
}

/** Builds the redistributable package. */
export async function dist() {
	await build();
	return esbuild.build(buildOptions({production: true}));
}

/** Builds the documentation. */
export async function doc() {
	await exec("typedoc", ["--options", "etc/typedoc.json"]);
	return cp("www/favicon.ico", "docs/favicon.ico");
}

/** Watches for file changes. */
export async function watch() {
	const context = await esbuild.context(buildOptions());
	gulp.watch("src/mc2it_theme/ui/**/*.css", {ignoreInitial: false}, context.rebuild);
}

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
