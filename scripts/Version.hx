//! --class-path src --library tink_cli
import Tools;
import mc2it_theme.cli.Version.*;

/** Runs the script. **/
function main()
	replaceInFile("package.json", ~/"version": "\d+(\.\d+){2}"/, '"version": "$packageVersion"');
