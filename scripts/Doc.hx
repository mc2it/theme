//! --class-path src
import mc2it_theme.Version;
import sys.FileSystem;
import sys.io.File;

/** Builds the documentation. **/
function main() {
	if (FileSystem.exists("docs")) Tools.removeDirectory("docs");

	Sys.command("haxe --define doc-gen --no-output --xml var/api.xml build.hxml");
	Sys.command("lix", ["run", "dox",
		"--define", "description", "Bootstrap theme used by MC2IT applications.",
		"--define", "source-path", "https://github.com/mc2it/theme/blob/main/src",
		"--define", "themeColor", "0x165898",
		"--define", "version", Version.packageVersion,
		"--define", "website", "https://mc2it.github.io/theme",
		"--input-path", "var",
		"--output-path", "docs",
		"--title", "MC2IT Theme",
		"--toplevel-package", "mc2it_theme"
	]);

	File.copy("www/favicon.ico", "docs/favicon.ico");
}
