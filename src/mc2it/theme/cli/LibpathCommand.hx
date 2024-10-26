package mc2it.theme.cli;

using StringTools;
using haxe.io.Path;

/**
	Print the path to the theme assets.

	> mc2it_theme libpath [flags]
**/
class LibpathCommand {

	/** Print the specific path of SCSS files. **/
	public var scss = false;

	/** Display this help. **/
	public var help = false;

	/** Creates a new `libpath` command. **/
	public function new() {}

	// Runs this command.
	@:defaultCommand
	public function run(): Promise<Noise> {
		Sys.println(help ? Cli.getDoc(this) : Theme.assetPath({scss: scss}));
		return Noise;
	}
}
