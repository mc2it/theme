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
	 * Value indicating whether to only copy the SCSS files.
	 */
	sass: boolean;
}>;

/**
 * Defines the options of the {@link assetPath} function.
 */
export type PathOptions = Partial<{

	/**
	 * Value indicating whether to return the specific path of SCSS files.
	 */
	sass: boolean;
}>;

/**
 * Returns the path to the theme assets.
 * @param options The path options.
 * @returns The path to the theme assets.
 */
export function assetPath(options: PathOptions = {}): string {
	return join(import.meta.dirname, options.sass ? "../../src/UI" : "../../www");
}

/**
 * Copies the theme assets to a given output directory.
 * @param output The path to the output directory.
 * @param options The copy options.
 * @returns Resolves when the assets have been copied.
 */
export async function copyAssets(output: string, options: CopyOptions = {}): Promise<void> {
	const sources = new Map([["css", "Styles"], ["fonts", "Fonts"], ["img", "Images"], ["sass", "UI"]]);
	const keys = sources.keys().toArray();

	let flags = keys.filter(source => options[source as keyof CopyOptions]);
	if (!flags.length) flags = keys;

	for (const flag of flags) {
		const folder = sources.get(flag)!;
		const input = flag == "sass" ? assetPath({sass: true}) : join(assetPath(), folder);
		const target = flags.length == 1 ? output : join(output, folder);
		await cp(input, target, {recursive: true});
	}
}

/**
 * Copies the theme assets to a given output directory.
 * @param output The path to the output directory.
 * @param options The copy options.
 */
export function copyAssetsSync(output: string, options: CopyOptions = {}): void {
	const sources = new Map([["css", "Styles"], ["fonts", "Fonts"], ["img", "Images"], ["sass", "UI"]]);
	const keys = sources.keys().toArray();

	let flags = keys.filter(source => options[source as keyof CopyOptions]);
	if (!flags.length) flags = keys;

	for (const flag of flags) {
		const folder = sources.get(flag)!;
		const input = flag == "sass" ? assetPath({sass: true}) : join(assetPath(), folder);
		const target = flags.length == 1 ? output : join(output, folder);
		cpSync(input, target, {recursive: true});
	}
}
