import {cp, mkdir, writeFile} from "node:fs/promises";
import {join} from "node:path";
import {deleteAsync} from "del";
import {$} from "execa";
import gulp from "gulp";
import {compileAsync, NodePackageImporter} from "sass-embedded";
import pkg from "./package.json" with {type: "json"};

// Builds the project.
export async function build() {
	const fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files";
	await cp(join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2");

	const {css} = await compileAsync("src/ui/index.scss", {importers: [new NodePackageImporter], style: "compressed"});
	await mkdir("www/css", {recursive: true});
	await writeFile("www/css/mc2it.css", css);

	return $`tsc --project src/tsconfig.json`;
}

// Deletes all generated files.
export function clean() {
	return deleteAsync(["lib", "var/**/*", "www/css", "www/fonts/material_symbols.woff2"]);
}

// Builds the documentation.
export async function doc() {
	for (const file of ["CHANGELOG.md", "LICENSE.md"]) await cp(file, `docs/${file.toLowerCase()}`);
	return $`typedoc --options etc/typedoc.js`;
}

// Performs the static analysis of source code.
export async function lint() {
	await $`tsc --project tsconfig.json`;
	await $`eslint --config=etc/eslint.config.js gulpfile.js bin etc src`;
	return $`stylelint --config=etc/stylelint.js src/ui/**/*.scss`;
}

// Publishes the package.
export async function publish() {
	for (const registry of ["https://registry.npmjs.org", "https://npm.pkg.github.com"]) await $`npm publish --registry=${registry}`;
	for (const action of [["tag"], ["push", "origin"]]) await $`git ${action} v${pkg.version}`;
}

// Starts the development server.
export async function serve() {
	await doc();
	return $({stdio: "inherit"})`mkdocs serve --config-file=etc/mkdocs.yaml`;
}

// The default task.
export default gulp.series(
	clean,
	build
);
