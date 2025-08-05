import {env} from "node:process";

/**
 * Gets the build options.
 * @returns {import("esbuild").BuildOptions} The options to be passed to the builder.
 */
export function esbuildOptions() {
	const production = env.NODE_ENV == "production";
	return {
		bundle: true,
		conditions: production ? [] : ["development"],
		entryPoints: ["src/UI/Main.css"],
		external: ["*.webp", "*.woff2"],
		legalComments: "none",
		minify: production,
		outfile: `www/Styles/Mc2it.${production ? "min.css" : "css"}`,
		sourcemap: true,
		sourcesContent: true
	};
}
