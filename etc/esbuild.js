/**
 * Returns the build settings.
 * @param {{production?: boolean}} [options] Options indicating whether to target the production environment.
 * @returns {import("esbuild").BuildOptions} The build settings.
 */
module.exports = function(options = {}) {
	const {production = false} = options;
	return {
		bundle: true,
		entryPoints: ["src/mc2it_theme/ui/index.css"],
		external: ["*.gif", "*.jpg", "*.png", "*.webp", "*.woff2"],
		legalComments: "none",
		minify: production,
		outfile: `www/css/${production ? "mc2it.min" : "mc2it"}.css`,
		sourcemap: true
	};
}
