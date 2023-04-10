/**
 * The path to the theme assets.
 */
export const assetPath: string;

/**
 * Copies the theme assets to a given `output` directory.
 * @param output The path to the output directory.
 * @param options The copy options.
 */
export function copyAssets(output: string, options?: {css?: boolean, fonts?: boolean, img?: boolean}): void;
