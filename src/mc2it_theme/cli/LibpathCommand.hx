package mc2it_theme.cli;

using StringTools;
using haxe.io.Path;

/** Print the path to the library assets. **/
class LibpathCommand {

	/** Output usage information. **/
	public var help = false;

	/** Print the specific path to the Sass files. **/
	public var scss = false;

	/** Creates a new `libpath` command. **/
	public function new() {}

	// Runs this command.
	@:defaultCommand
	public function run() {
		final path = Path.join([Sys.programPath().directory(), scss ? "src/mc2it_theme/ui" : "www"]);
		Sys.println(help ? Cli.getDoc(this) : path.replace("/", Sys.systemName() == "Windows" ? "\\" : "/"));
		return Promise.NOISE;
	}
}
