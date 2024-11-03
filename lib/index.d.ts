/**
 * Defines the options of the {@link copyAssets} function.
 */
export type CopyOptions = Partial<{

	/**
	 * Value indicating whether to only copy the CSS files
	 */
	css: boolean;

	/**
	 * Value indicating whether to only copy the font files
	 */
	fonts: boolean;

	/**
	 * Value indicating whether to only copy the image files
	 */
	img: boolean;
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
export function assetPath(options?: PathOptions): Promise<string>;

/**
 * Copies the theme assets to a given output directory.
 * @param output The path to the output directory.
 * @param options The copy options.
 * @returns Resolves when the assets have been copied.
 */
export function copyAssets(output: string, options?: CopyOptions): Promise<void>;
