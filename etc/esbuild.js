import {env} from "node:process";

// Returns a value indicating whether the application runs in production mode.
const isProduction = () => env.NODE_ENV == "production";

/**
 * Returns the CSS settings.
 * @returns {import("esbuild").BuildOptions} The CSS settings.
 */
export function cssOptions() {
	return Object.assign(sharedOptions(isProduction()), {
		entryPoints: ["src/ui/index.css"],
		external: ["*.woff2"],
		outfile: "www/css/mc2it.css",
		sourceRoot: new URL("../www/css/", import.meta.url).href
	});
}

/**
 * Returns the shared settings.
 * @param {boolean} production Value indicating whether the application runs in production mode.
 * @returns {import("esbuild").BuildOptions} The shared settings.
 */
function sharedOptions(production) {
	return {
		bundle: true,
		legalComments: "none",
		minify: production,
		sourcemap: !production,
		sourcesContent: false
	};
}