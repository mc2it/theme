import {mkdir, writeFile} from "node:fs/promises";
import {EOL} from "node:os";
import {env} from "node:process";
import {compileAsync, NodePackageImporter} from "sass-embedded";

/**
 * Compiles the style sheet.
 * @returns {Promise<void>} Resolves when the style sheet has been compiled.
 */
export default async function compileSass() {
	const production = env.NODE_ENV == "production";
	const {css, sourceMap} = await compileAsync("src/ui/index.scss", {
		importers: [new NodePackageImporter],
		silenceDeprecations: ["color-functions", "mixed-decls"],
		sourceMap: !production,
		sourceMapIncludeSources: false,
		style: production ? "compressed" : "expanded"
	});

	await mkdir("www/css", {recursive: true});
	if (sourceMap) await writeFile("www/css/mc2it.css.map", JSON.stringify(sourceMap));
	return writeFile("www/css/mc2it.css", sourceMap ? `${css}${EOL}/*# sourceMappingURL=mc2it.css.map */` : css);
}
