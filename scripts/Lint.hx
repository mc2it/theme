/** Performs the static analysis of source code. **/
function main() {
	final linters = [
		"lix run checkstyle --config etc/checkstyle.json --exitcode --source scripts --source src",
		"npx stylelint --config=etc/stylelint.json src/mc2it/theme/ui/**/*.scss"
	];

	var exitCode = 0;
	for (linter in linters) if (Sys.command(linter) != 0) exitCode++;
	Sys.exit(exitCode);
}
