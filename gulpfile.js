import {cp, mkdir, writeFile} from "node:fs/promises";
import {join} from "node:path";
import {deleteAsync} from "del";
import {execa} from "execa";
import gulp from "gulp";
import {compileAsync, NodePackageImporter} from "sass-embedded";
import pkg from "./package.json" with {type: "json"};

// Runs a command.
const $ = execa({preferLocal: true, stdio: "inherit"});

// Builds the project.
export async function build() {
	const fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files";
	await cp(join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2");

	const importers = [new NodePackageImporter];
	const {css} = await compileAsync("src/ui/index.scss", {importers, silenceDeprecations: ["mixed-decls"], style: "compressed"});
	await mkdir("www/css", {recursive: true});
	await writeFile("www/css/mc2it.css", css);

	return $`tsc --project src/tsconfig.json`;
}

// Deletes all generated files.
export function clean() {
	return deleteAsync(["lib", "var/**/*", "www/css", "www/fonts/material_symbols.woff2"]);
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

// The default task.
export default gulp.series(
	clean,
	build
);
