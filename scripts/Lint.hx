/** Performs the static analysis of source code. **/
function main() {
	Sys.command("npx stylelint --config=etc/stylelint.json src/mc2it_theme/ui/**/*.css");
	Sys.command("lix", ["run", "checkstyle",
		"--config", "etc/checkstyle.json",
		"--exitcode",
		"--source", "scripts",
		"--source", "src"
	]);
}
