/**
 * @type {Partial<import("typedoc").TypeDocOptions>}
 */
export default {
	entryPoints: ["../src/index.js"],
	excludePrivate: true,
	gitRevision: "main",
	hideGenerator: true,
	name: "MC2IT Theme",
	out: "../docs/api",
	readme: "none",
	tsconfig: "../src/tsconfig.json"
};
