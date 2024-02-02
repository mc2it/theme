package mc2it_theme.cli;

using StringTools;
using haxe.io.Path;

/**
	Print the path to the library assets.

	> mc2it_theme libpath [flags]
**/
class LibpathCommand {

	/** Display this help. **/
	public var help = false;

	/** Creates a new `libpath` command. **/
	public function new() {}

	// Runs this command.
	@:defaultCommand
	public function run() {
		Sys.println(help ? Cli.getDoc(this) : Theme.assetPath);
		return Promise.NOISE;
	}
}
