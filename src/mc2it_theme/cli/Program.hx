package mc2it_theme.cli;

/** Command line interface of MC2IT Theme. **/
final class Program {

	/** Copy the library assets to a given directory. **/
	@:command
	public final copy = new CopyCommand();

	/** Display this help. **/
	public var help = false;

	/** Print the path to the library assets. **/
	@:command
	public final libpath = new LibpathCommand();

	/** Output the version number. **/
	public var version = false;

	/** Creates a new program. **/
	public function new() {}

	/** Application entry point. **/
	static function main() Cli.process(Sys.args(), new Program()).handle(Cli.exit);

	// Runs this command.
	@:defaultCommand
	public function run() {
		Sys.println(version ? Version.packageVersion : Cli.getDoc(this));
		return Promise.NOISE;
	}
}
