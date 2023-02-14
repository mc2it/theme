//! --class-path src
import mc2it_theme.Version;

/** Runs the script. **/
function main()
	Tools.replaceInFile("package.json", ~/"version": "\d+(\.\d+){2}"/, '"version": "${Version.packageVersion}"');
