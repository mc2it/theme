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
		Sys.println(help ? Cli.getDoc(this) : Path.join([Sys.getCwd(), scss ? "src/ui" : "www"]).replace("/", Sys.systemName() == "Windows" ? "\\" : "/"));
		return Promise.NOISE;
	}
}
