/**
 * The path to the library assets.
 * @type {string}
 */
export const assetPath: string;

/**
 * Copies the library assets to a given `output` directory.
 * @param {string} output The path to the output directory.
 * @param {{css?: boolean, fonts?: boolean, img?: boolean}} [options] The copy options.
 */
export function copyAssets(output: string, options?: {css?: boolean, fonts?: boolean, img?: boolean}): void;
