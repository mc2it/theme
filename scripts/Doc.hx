//! --class-path src --library tink_core
import mc2it_theme.Platform;
import sys.FileSystem;
import sys.io.File;
using Lambda;

/** Builds the documentation. **/
function main() {
	["CHANGELOG.md", "LICENSE.md"].iter(file -> File.copy(file, 'docs/${file.toLowerCase()}'));
	if (FileSystem.exists("docs/api")) Tools.removeDirectory("docs/api");

	Sys.command("haxe --define doc-gen --no-output --xml var/api.xml build.hxml");
	Sys.command("lix", ["run", "dox",
		"--define", "description", "Bootstrap theme used by MC2IT applications.",
		"--define", "source-path", "https://github.com/mc2it/theme/blob/main/src",
		"--define", "themeColor", "0x165898",
		"--define", "version", Platform.packageVersion,
		"--define", "website", "https://mc2it.github.io/theme",
		"--input-path", "var",
		"--output-path", "docs/api",
		"--title", "MC2IT Theme",
		"--toplevel-package", "mc2it_theme"
	]);

	File.copy("docs/favicon.ico", "docs/api/favicon.ico");
}
