package mc2it.theme.cli;

#if nodejs
import js.Node;
#end

/**
	Command line interface of MC2IT Theme.

	> mc2it_theme [flags] <subcommand>
**/
final class Program {

	/** Copy the theme assets to a given directory. **/
	@:command
	public final copy = new CopyCommand();

	/** Print the path to the theme assets. **/
	@:command
	public final libpath = new LibpathCommand();

	/** Display this help. **/
	public var help = false;

	/** Output the version number. **/
	public var version = false;

	/** Creates a new program. **/
	public function new() {}

	/** Application entry point. **/
	static function main() {
		#if nodejs Node.process.title = "MC2IT Theme"; #end
		Cli.process(Sys.args(), new Program()).handle(Cli.exit);
	}

	// Runs this command.
	@:defaultCommand
	public function run(): Promise<Noise> {
		Sys.println(version ? Platform.packageVersion : Cli.getDoc(this));
		return Noise;
	}
}
