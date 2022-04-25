import {spawn} from "node:child_process";
import {cp, readFile} from "node:fs/promises";
import del from "del";
import log from "fancy-log";
import gulp from "gulp";

// The file patterns providing the list of source files.
const sources = ["*.js", "bin/*.js", "lib/**/*.js"];

/** The default task. */
export default gulp.series(
	clean,
	build
);

/** Builds the project. */
export async function build() {
	log("Copying the fonts...");
	await cp("node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2", "www/fonts/bootstrap_icons.woff2");

	log("Generating the stylesheet...");
	await exec("npx", ["sass", "--load-path=node_modules/bootstrap", "--no-source-map", "lib/ui:www/css"]);
	await exec("npx", ["cleancss", "-O2", "--output=www/css/mc2it.css", "www/css/mc2it.css"]);

	log("Generating the typings...");
	return exec("npx", ["tsc", "--project", "lib/jsconfig.json"]);
}

/** Deletes all generated files and reset any saved state. */
export function clean() {
	return del(["share", "var/**/*", "www/css"]);
}

/** Builds the documentation. */
export async function doc() {
	await exec("npx", ["typedoc", "--options", "etc/typedoc.json"]);
	return cp("www/favicon.ico", "docs/favicon.ico");
}

/** Fixes the coding standards issues. */
export function fix() {
	return exec("npx", ["eslint", "--config=etc/eslint.json", "--fix", ...sources]);
}

/** Performs the static analysis of source code. */
export function lint() {
	return exec("npx", ["eslint", "--config=etc/eslint.json", ...sources]);
}

/** Publishes the package in the registry. */
export async function publish() {
	await exec("npm", ["publish"]);
	const {version} = JSON.parse(await readFile("package.json", "utf8"));
	for (const command of [["tag"], ["push", "origin"]]) await exec("git", [...command, `v${version}`]);
}

/** Watches for file changes. */
export function watch() {
	return exec("npx", ["sass", "--load-path=node_modules/bootstrap", "--no-source-map", "--watch", "lib/ui:www/css"]);
}

/**
 * Spawns a new process using the specified command.
 * @param {string} command The command to run.
 * @param {string[]} [args] The command arguments.
 * @returns {Promise<void>} Resolves when the command is finally terminated.
 */
function exec(command, args = []) {
	return new Promise((resolve, reject) => spawn(command, args, {shell: true, stdio: "inherit"})
		.on("close", code => code ? reject(new Error(args.length ? `${command} ${args.join(" ")}` : command)) : resolve()));
}
