package mc2it_theme;

/** Defines the compilation target. **/
@:noDoc enum abstract Platform(String) {

	/** The code is intended for a browser. **/
	var Browser = "browser";

	/** The code is intended for Node.js. **/
	var Node = "node";
}
