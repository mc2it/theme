import {cpSync} from "node:fs";
import {cp} from "node:fs/promises";
import {join} from "node:path";

/**
 * Defines the options of the {@link copyAssets} function.
 */
export type CopyOptions = Partial<{

	/**
	 * Value indicating whether to only copy the CSS files.
	 */
	css: boolean;

	/**
	 * Value indicating whether to only copy the font files.
	 */
	fonts: boolean;

	/**
	 * Value indicating whether to only copy the image files.
	 */
	img: boolean;

	/**
	 * Value indicating whether to only copy the Sass files.
	 */
	sass: boolean;
}>;

/**
 * Defines the options of the {@link assetPath} function.
 */
export type PathOptions = Partial<{

	/**
	 * Value indicating whether to return the specific path of Sass files.
	 */
	sass: boolean;
}>;

/**
 * Returns the path to the theme assets.
 * @param options The path options.
 * @returns The path to the theme assets.
 */
export function assetPath(options: PathOptions = {}): string {
	return join(import.meta.dirname, options.sass ? "../src/ui" : "../www");
}

/**
 * Copies the theme assets to a given output directory.
 * @param output The path to the output directory.
 * @param options The copy options.
 * @returns Resolves when the assets have been copied.
 */
export async function copyAssets(output: string, options: CopyOptions = {}): Promise<void> {
	const sources = ["css", "fonts", "img", "sass"];
	let directories = sources.filter(source => (options as Record<string, boolean>)[source]);
	if (!directories.length) directories = sources;

	for (const directory of directories) {
		const input = directory == "sass" ? assetPath({sass: true}) : join(assetPath(), directory);
		const target = directories.length == 1 ? output : join(output, directory);
		await cp(input, target, {recursive: true});
	}
}

/**
 * Copies the theme assets to a given output directory.
 * @param output The path to the output directory.
 * @param options The copy options.
 */
export function copyAssetsSync(output: string, options: CopyOptions = {}): void {
	const sources = ["css", "fonts", "img", "sass"];
	let directories = sources.filter(source => (options as Record<string, boolean>)[source]);
	if (!directories.length) directories = sources;

	for (const directory of directories) {
		const input = directory == "sass" ? assetPath({sass: true}) : join(assetPath(), directory);
		const target = directories.length == 1 ? output : join(output, directory);
		cpSync(input, target, {recursive: true});
	}
}
