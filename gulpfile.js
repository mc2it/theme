import {cp} from "node:fs/promises";
import {join} from "node:path";
import {env} from "node:process";
import {deleteAsync} from "del";
import {execa} from "execa";
import gulp from "gulp";
import pkg from "./package.json" with {type: "json"};
import compileSass from "./etc/sass.js";

// Runs a command.
const $ = execa({preferLocal: true, stdio: "inherit"});

// Builds the project.
export async function build() {
	const fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files";
	await cp(join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2");
	return Promise.all([compileSass(), $`tsc --project src/tsconfig.json`]);
}

// Deletes all generated files.
export function clean() {
	return deleteAsync(["lib", "var/**/*", "www/css", "www/fonts/material_symbols.woff2"]);
}

// Packages the application.
export function dist() {
	env.NODE_ENV = "production";
	return build();
}

// Performs the static analysis of source code.
export async function lint() {
	await build();
	await $`tsc --project tsconfig.json`;
	await $`eslint --config=etc/eslint.js gulpfile.js bin src`;
	return $`stylelint --config=etc/stylelint.js src/ui/**/*.scss`;
}

// Publishes the package.
export async function publish() {
	for (const registry of ["https://registry.npmjs.org", "https://npm.pkg.github.com"]) await $`npm publish --registry=${registry}`;
	for (const action of [["tag"], ["push", "origin"]]) await $`git ${action} v${pkg.version}`;
}

// Watches for file changes.
export async function watch() {
	await build();

	const buildApp = () => $`tsc --sourceMap --project src/tsconfig.json`;
	gulp.watch("src/**/*.ts", buildApp);

	const buildStyleSheet = () => compileSass();
	gulp.watch("src/ui/**/*.scss", buildStyleSheet);
}

// The default task.
export default gulp.series(
	clean,
	dist
);
