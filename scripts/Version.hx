//! --class-path src --library tink_core
import mc2it_theme.Platform;

/** Updates the version number in the sources. **/
function main()
	Tools.replaceInFile("package.json", ~/"version": "\d+(\.\d+){2}"/, '"version": "${Platform.packageVersion}"');
