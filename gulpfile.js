import {cp} from "node:fs/promises";
import {join} from "node:path";
import {env} from "node:process";
import {deleteAsync} from "del";
import esbuild from "esbuild";
import {$} from "execa";
import gulp from "gulp";
import pkg from "./package.json" with {type: "json"};
import buildOptions from "./etc/esbuild.js";
import compileSass from "./etc/sass.js";

// Deploys the assets.
export async function assets() {
	const fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files";
	return cp(join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2");
}

// Builds the project.
export async function build() {
	await assets();
	await $`tsc --project src/tsconfig.json`;
	return compileSass();
}

// Deletes all generated files.
export function clean() {
	return deleteAsync(["lib", "var/**/*", "www/css", "www/fonts/material_symbols.woff2"]);
}

// Builds the command line interface.
export async function cli() {
	await esbuild.build(buildOptions());
	return $`git update-index --chmod=+x bin/mc2it_theme.js`;
}

// Builds the documentation.
export async function doc() {
	for (const file of ["CHANGELOG.md", "LICENSE.md"]) await cp(file, `docs/${file.toLowerCase()}`);
	await $`typedoc --options etc/typedoc.js`;
	return cp("docs/favicon.ico", "docs/api/favicon.ico");
}

// Packages the project.
export const dist = gulp.series(
	function init(done) { env.NODE_ENV = "production"; done(); },
	build,
	cli
);

// Performs the static analysis of source code.
export async function lint() {
	await $`tsc --project tsconfig.json`;
	return $`eslint --config=etc/eslint.config.js gulpfile.js etc src`;
}

// Publishes the package.
export async function publish() {
	for (const registry of ["https://registry.npmjs.org", "https://npm.pkg.github.com"]) await $`npm publish --registry=${registry}`;
	for (const action of [["tag"], ["push", "origin"]]) await $`git ${action} v${pkg.version}`;
}

// Watches for file changes.
export async function watch() {
	await assets();
	const context = await esbuild.context(buildOptions());
	const buildJs = async () => { await $`tsc --project src/tsconfig.json`; return context.rebuild(); };
	gulp.watch("src/**/*.ts", {ignoreInitial: false}, buildJs);
	gulp.watch("src/ui/**/*.scss", {ignoreInitial: false}, compileSass);
}

// The default task.
export default gulp.series(
	clean,
	dist
);
