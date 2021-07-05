//! --class-path src --library tink_cli
import Sys.*;
import Tools.removeDirectory;
import mc2it_theme.cli.Version.*;
import sys.FileSystem.*;
import sys.io.File.*;

using haxe.io.Path;

/** Runs the script. **/
function main() {
	if (exists("docs/api")) removeDirectory("docs/api");

	command("haxe --define doc-gen --no-output --xml var/api.xml build.hxml");
	command("lix", [
		"run", "dox",
		"--define", "description", "The Bootstrap theme used by MC2IT applications.",
		"--define", "source-path", "https://github.com/mc2it/ui-theme/blob/main/src",
		"--define", "themeColor", "0x165898",
		"--define", "version", getPackageVersion(),
		"--define", "website", "https://mc2it.github.io/ui-theme",
		"--exclude", "^mc2it_theme\\.cli\\.",
		"--input-path", "var",
		"--output-path", "docs/api",
		"--title", "MC2IT UI Theme",
		"--toplevel-package", "mc2it_theme"
	]);

	copy("docs/favicon.ico", "docs/api/favicon.ico");
}
