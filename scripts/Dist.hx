/** Runs the script. **/
function main() {
	for (script in ["Clean", "Build", "Version"]) Sys.command("lix", [script]);
	for (file in ["bin/mc2it_theme.js", "lib/index.js"]) Sys.command("npx", [
		"esbuild",
		"--allow-overwrite",
		"--log-level=warning",
		"--minify",
		'--outfile=$file',
		"--platform=node",
		file
	]);
}
