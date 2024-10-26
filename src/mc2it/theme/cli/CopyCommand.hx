package mc2it.theme.cli;

using haxe.io.Path;

/**
	Copy the theme assets to a given directory.

	> mc2it_theme copy [flags] <directory>
**/
class CopyCommand {

	/** Copy only CSS files. **/
	public var css = false;

	/** Copy only font files. **/
	public var fonts = false;

	/** Copy only image files. **/
	public var img = false;

	/** Display this help. **/
	public var help = false;

	/** Creates a new `copy` command. **/
	public function new() {}

	/** directory : The path to the output directory. **/
	@:defaultCommand
	public function run(rest: Rest<String>): Promise<Noise> {
		if (help) {
			Sys.println(Cli.getDoc(this));
			return Noise;
		}

		final haxelibRun = Sys.getEnv("HAXELIB_RUN") == "1";
		final requiredArgs = haxelibRun ? 2 : 1;
		if (rest.length < requiredArgs) return new Error(BadRequest, "You must provide the path of the output directory.");

		final output = rest[0].isAbsolute() ? rest.shift() : Path.join([haxelibRun ? rest.pop() : Sys.getCwd(), rest.shift()]);
		Theme.copyAssets(output, {css: css, fonts: fonts, img: img});
		return Noise;
	}
}
