import {cp} from "node:fs/promises";
import {join} from "node:path";

/**
 * Returns the path to the library assets.
 * @param options The path options.
 * @returns The path to the library assets.
 */
export function assetPath(options: PathOptions = {}): string {
	return join(import.meta.dirname, options.scss ? "../src/ui" : "../www");
}

/**
 * Copies the library assets to a given directory.
 * @param output The path to the output directory.
 * @param options The copy options.
 * @returns Resolves when the assets have been copied.
 */
export async function copyAssets(output: string, options: CopyOptions = {}): Promise<void> {
	const sources = ["css", "fonts", "img"];
	let directories = sources.filter(source => (options as Record<string, boolean>)[source]);
	if (!directories.length) directories = sources;

	const input = join(import.meta.dirname, "../www");
	for (const directory of directories)
		await cp(join(input, directory), directories.length == 1 ? output : join(output, directory), {recursive: true});
}

/**
 * Defines the options of the {@link copyAssets} function.
 */
export type CopyOptions = Partial<{

	/**
	 * Value indicating whether to copy only the CSS files.
	 */
	css: boolean;

	/**
	 * Value indicating whether to copy only the font files.
	 */
	fonts: boolean;

	/**
	 * Value indicating whether copy only the image files.
	 */
	img: boolean;
}>;

/**
 * Defines the options of the {@link assetPath} function.
 */
export type PathOptions = Partial<{

	/**
	 * Value indicating whether to return the specific path for SCSS files.
	 */
	scss: boolean;
}>;
