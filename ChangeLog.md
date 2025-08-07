# Changelog

## Version [13.2.0](https://github.com/mc2it/theme/compare/v13.1.1...v13.2.0)
- Adjusted the styles of icons in alerts and card headers.

## Version [13.1.1](https://github.com/mc2it/theme/compare/v13.1.0...v13.1.1)
- Fixed the command line interface, which was still referencing [Sass](https://sass-lang.com) assets.

## Version [13.1.0](https://github.com/mc2it/theme/compare/v13.0.0...v13.1.0)
- Imported the [Bootstrap](https://getbootstrap.com) stylesheet into a cascade layer.
- Removed all `!important` flags from the [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) rules.

## Version [13.0.0](https://github.com/mc2it/theme/compare/v12.5.0...v13.0.0)
- Breaking change: ported the [Sass](https://sass-lang.com) stylesheet to [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).
- [Bootstrap](https://getbootstrap.com) is now a peer dependency.
- Use [ESBuild](https://esbuild.github.io) to compile the stylesheet and the [TypeScript](https://www.typescriptlang.org) files.
- Updated the package dependencies.

## Version [12.5.0](https://github.com/mc2it/theme/compare/v12.4.0...v12.5.0)
- Brightened up the theme colors of tables in dark mode.

## Version [12.4.0](https://github.com/mc2it/theme/compare/v12.3.0...v12.4.0)
- Added the `.cursor-pointer` class.

## Version [12.3.0](https://github.com/mc2it/theme/compare/v12.2.2...v12.3.0)
- Added the `.table-row-*` and `.table-cell-*` classes.
- Removed the `.table-variant` class.

## Version [12.2.2](https://github.com/mc2it/theme/compare/v12.2.1...v12.2.2)
- Fixed the border color associated with the `.table-variant` class in dark mode.

## Version [12.2.1](https://github.com/mc2it/theme/compare/v12.2.0...v12.2.1)
- Fixed the background color of toasts.

## Version [12.2.0](https://github.com/mc2it/theme/compare/v12.1.0...v12.2.0)
- Disabled the transparency of toasts and tooltips.

## Version [12.1.0](https://github.com/mc2it/theme/compare/v12.0.0...v12.1.0)
- Added the `.table-variant` class.

## Version [12.0.0](https://github.com/mc2it/theme/compare/v11.2.0...v12.0.0)
- Breaking change: use Pascal case as file naming convention.

## Version [11.2.0](https://github.com/mc2it/theme/compare/v11.1.0...v11.2.0)
- Added the `.cursor-grab` class.

## Version [11.1.0](https://github.com/mc2it/theme/compare/v11.0.0...v11.1.0)
- Added the `.text-pre-line` class.

## Version [11.0.0](https://github.com/mc2it/theme/compare/v10.1.0...v11.0.0)
- Breaking change: ported the source code to [TypeScript](https://www.typescriptlang.org).
- Breaking change: ported the [Sass](https://sass-lang.com) stylesheet to SCSS syntax.

## Version [10.1.0](https://github.com/mc2it/theme/compare/v10.0.1...v10.1.0)
- Added the `copyAssetsSync()` function.

## Version [10.0.1](https://github.com/mc2it/theme/compare/v10.0.0...v10.0.1)
- Fixed a regression: the generated stylesheet was named `main.css` instead of `mc2it.css`.

## Version [10.0.0](https://github.com/mc2it/theme/compare/v9.0.3...v10.0.0)
- Breaking change: ported the [Haxe](https://haxe.org) source code to [CoffeeScript](https://coffeescript.org).
- Breaking change: ported the SCSS stylesheet to [Sass](https://sass-lang.com) indented syntax.
- Breaking change: removed the [Sass](https://sass-lang.com) importer for `theme:` URLs.
- Breaking change: renamed the `--scss` command line option to `--sass`.

## Version [9.0.3](https://github.com/mc2it/theme/compare/v9.0.2...v9.0.3)
- Fixed the action bar padding.

## Version [9.0.2](https://github.com/mc2it/theme/compare/v9.0.1...v9.0.2)
- Fixed the action bar padding.

## Version [9.0.1](https://github.com/mc2it/theme/compare/v9.0.0...v9.0.1)
- Fixed the project URL.

## Version [9.0.0](https://github.com/mc2it/theme/compare/v8.0.0...v9.0.0)
- Breaking change: ported the source code to [Haxe](https://haxe.org).
- Added a [Sass](https://sass-lang.com) importer for `theme:` URLs.
- Removed the alternative logos.

## Version [8.0.0](https://github.com/mc2it/theme/compare/v7.0.8...v8.0.0)
- Breaking change: renamed the configuration module from `_variables` to `_config`.
- Fixed the border radius not respecting the `$enable-rounded` option.
- Updated the package dependencies.

## Version [7.0.8](https://github.com/mc2it/theme/compare/v7.0.7...v7.0.8)
- Enabled the fill of icons in active dropdown items.

## Version [7.0.7](https://github.com/mc2it/theme/compare/v7.0.6...v7.0.7)
- Adjusted the scale of icons in dropdown items.

## Version [7.0.6](https://github.com/mc2it/theme/compare/v7.0.5...v7.0.6)
- Adjusted the scale of icons in dropdown items.

## Version [7.0.5](https://github.com/mc2it/theme/compare/v7.0.4...v7.0.5)
- Adjusted the scale of icons in navigation links.

## Version [7.0.4](https://github.com/mc2it/theme/compare/v7.0.3...v7.0.4)
- Adjusted the `font-weight` of the dropdown headers.

## Version [7.0.3](https://github.com/mc2it/theme/compare/v7.0.2...v7.0.3)
- Migrated the documentation to the [GitHub wiki](https://github.com/mc2it/theme/wiki).

## Version [7.0.2](https://github.com/mc2it/theme/compare/v7.0.1...v7.0.2)
- Fixed the vertical alignment of the `.navbar` image.

## Version [7.0.1](https://github.com/mc2it/theme/compare/v7.0.0...v7.0.1)
- Fixed the styles of the toast component.

## Version [7.0.0](https://github.com/mc2it/theme/compare/v6.2.3...v7.0.0)
- Breaking change: ported the source code to [Sass](https://sass-lang.com) and [TypeScript](https://www.typescriptlang.org).
- Breaking change: removed the `.table-sticky` class.

## Version [6.2.3](https://github.com/mc2it/theme/compare/v6.2.2...v6.2.3)
- Fixed the `pointer-events` of the modal dialogs.

## Version [6.2.2](https://github.com/mc2it/theme/compare/v6.2.1...v6.2.2)
- Reverted the `overflow` of the `<article>` tag.

## Version [6.2.1](https://github.com/mc2it/theme/compare/v6.2.0...v6.2.1)
- Fixed the `overflow` of the `<article>` tag.

## Version [6.2.0](https://github.com/mc2it/theme/compare/v6.1.0...v6.2.0)
- Set the `font-variation` to `FILL` when a navigation bar icon is active.

## Version [6.1.0](https://github.com/mc2it/theme/compare/v6.0.2...v6.1.0)
- Removed the bottom margin from the pagination component.
- Scaled the pagination icons.
- Updated the package dependencies.

## Version [6.0.2](https://github.com/mc2it/theme/compare/v6.0.1...v6.0.2)
- Fixed the vertical alignment of icons.
- Scaled the navigation bar icons.

## Version [6.0.1](https://github.com/mc2it/theme/compare/v6.0.0...v6.0.1)
- Added the missing `.icon-fill` class.

## Version [6.0.0](https://github.com/mc2it/theme/compare/v5.7.1...v6.0.0)
- Replaced [Bootstrap Icons](https://icons.getbootstrap.com) by [Material Symbols](https://fonts.google.com/icons).

## Version [5.7.1](https://github.com/mc2it/theme/compare/v5.7.0...v5.7.1)
- Added the alternative logo.
- Updated the license.

## Version [5.7.0](https://github.com/mc2it/theme/compare/v5.6.0...v5.7.0)
- Added some cursor utilities.

## Version [5.6.0](https://github.com/mc2it/theme/compare/v5.5.0...v5.6.0)
- Added a loading component.
- Updated the brand logo.

## Version [5.5.0](https://github.com/mc2it/theme/compare/v5.4.2...v5.5.0)
- Updated the package dependencies.

## Version [5.4.2](https://github.com/mc2it/theme/compare/v5.4.1...v5.4.2)
- Fixed the styles of the accordion component in dark mode.

## Version [5.4.1](https://github.com/mc2it/theme/compare/v5.4.0...v5.4.1)
- Added a darker bottom border to form controls.

## Version [5.4.0](https://github.com/mc2it/theme/compare/v5.3.0...v5.4.0)
- Use CSS nesting for the stylesheet.

## Version [5.3.0](https://github.com/mc2it/theme/compare/v5.2.1...v5.3.0)
- Added modal styles for the `<dialog>` tag.

## Version [5.2.1](https://github.com/mc2it/theme/compare/v5.2.0...v5.2.1)
- Adjusted the opacity of the toast component.

## Version [5.2.0](https://github.com/mc2it/theme/compare/v5.1.2...v5.2.0)
- Added accordion styles for the `<details>` and `<summary>` tags.
- Customized the default style of the `<optgroup>` tag.

## Version [5.1.2](https://github.com/mc2it/theme/compare/v5.1.1...v5.1.2)
- Fixed the vertical position of the offcanvas header image.

## Version [5.1.1](https://github.com/mc2it/theme/compare/v5.1.0...v5.1.1)
- Fixed the styles of the offcanvas header in dark mode.

## Version [5.1.0](https://github.com/mc2it/theme/compare/v5.0.0...v5.1.0)
- Added the `.filter-invert` class.

## Version [5.0.0](https://github.com/mc2it/theme/compare/v4.0.2...v5.0.0)
- Breaking change: upgraded [Bootstrap](https://getbootstrap.com) to version 5.3.0.
- Added support for dark mode.
- Added a style reset to the `<menu>` tag.

## Version [4.0.2](https://github.com/mc2it/theme/compare/v4.0.1...v4.0.2)
- Upgraded [Bootstrap Icons](https://icons.getbootstrap.com) to version 1.10.5.

## Version [4.0.1](https://github.com/mc2it/theme/compare/v4.0.0...v4.0.1)
- Added the missing `.loading` class applied on the page body during navigation.

## Version [4.0.0](https://github.com/mc2it/theme/compare/v3.5.0...v4.0.0)
- Breaking change: ported the source code to [Haxe](https://haxe.org).

## Version [3.5.0](https://github.com/mc2it/theme/compare/v3.4.2...v3.5.0)
- Included the unminified stylesheet in the package.

## Version [3.4.2](https://github.com/mc2it/theme/compare/v3.4.1...v3.4.2)
- Adjusted the box shadow and maximum width of the popover component.

## Version [3.4.1](https://github.com/mc2it/theme/compare/v3.4.0...v3.4.1)
- Upgraded [Bootstrap](https://getbootstrap.com) to version 5.2.3.
- Upgraded [Bootstrap Icons](https://icons.getbootstrap.com) to version 1.10.2.

## Version [3.4.0](https://github.com/mc2it/theme/compare/v3.3.2...v3.4.0)
- Upgraded [Bootstrap Icons](https://icons.getbootstrap.com) to version 1.10.0.

## Version [3.3.2](https://github.com/mc2it/theme/compare/v3.3.1...v3.3.2)
- Adjusted the maximum width of the tooltip component.

## Version [3.3.1](https://github.com/mc2it/theme/compare/v3.3.0...v3.3.1)
- Fixed the colors of the `.accordion` active buttons.

## Version [3.3.0](https://github.com/mc2it/theme/compare/v3.2.3...v3.3.0)
- The [Bootstrap](https://getbootstrap.com) libraries are now peer dependencies.
- Upgraded [Bootstrap](https://getbootstrap.com) to version 5.2.2.

## Version [3.2.3](https://github.com/mc2it/theme/compare/v3.2.2...v3.2.3)
- Adjusted the styles of the toast component.

## Version [3.2.2](https://github.com/mc2it/theme/compare/v3.2.1...v3.2.2)
- Adjusted the styles of the `.navbar` toggler.

## Version [3.2.1](https://github.com/mc2it/theme/compare/v3.2.0...v3.2.1)
- Fixed the vertical alignment of some `.navbar` parts.
- Fixed the vertical alignment of some `.offcanvas` parts.

## Version [3.2.0](https://github.com/mc2it/theme/compare/v3.1.4...v3.2.0)
- Adjusted the styles of the offcanvas component.
- Upgraded [Bootstrap](https://getbootstrap.com) to version 5.2.1.

## Version [3.1.4](https://github.com/mc2it/theme/compare/v3.1.3...v3.1.4)
- Fixed the `disabled` state of the `.btn-primary` and .`btn-secondary` buttons.

## Version [3.1.3](https://github.com/mc2it/theme/compare/v3.1.2...v3.1.3)
- Fixed the `text-decoration` of the list groups.

## Version [3.1.2](https://github.com/mc2it/theme/compare/v3.1.1...v3.1.2)
- Fixed the `text-decoration` of the buttons.

## Version [3.1.1](https://github.com/mc2it/theme/compare/v3.1.0...v3.1.1)
- Dropped the dependency on [Commander.js](https://github.com/tj/commander.js).

## Version [3.1.0](https://github.com/mc2it/theme/compare/v3.0.2...v3.1.0)
- Added a minimum width to modal buttons.
- Removed the unused `.fw-` classes.

## Version [3.0.2](https://github.com/mc2it/theme/compare/v3.0.1...v3.0.2)
- Fixed the colors of the `.btn-primary` and .`btn-secondary` buttons.
- Restored the drop shadow of the modals.

## Version [3.0.1](https://github.com/mc2it/theme/compare/v3.0.0...v3.0.1)
- Adjusted the logo position.
- Removed the `<article>` margins on small screens.

## Version [3.0.0](https://github.com/mc2it/theme/compare/v2.2.0...v3.0.0)
- Breaking change: replaced the [Sass](https://sass-lang.com) stylesheet by plain CSS styles and custom properties.
- Breaking change: replaced the `getAssetPath()` function by the `assetPath` constant.
- Upgraded [Bootstrap](https://getbootstrap.com) to version 5.2.0.

## Version [2.2.0](https://github.com/mc2it/theme/compare/v2.1.1...v2.2.0)
- Dropped support for the [Stylus](https://stylus-lang.com) stylesheet.
- Removed the `loader` component.
- Upgraded [Bootstrap Icons](https://icons.getbootstrap.com) to version 1.9.1.

## Version [2.1.1](https://github.com/mc2it/theme/compare/v2.1.0...v2.1.1)
- Fixed the `z-index` of the `.table-sticky` class.
- Added the `.input-remove-spin` class.

## Version [2.1.0](https://github.com/mc2it/theme/compare/v2.0.2...v2.1.0)
- Added support for a [Stylus](https://stylus-lang.com) stylesheet.
- Upgraded [Bootstrap Icons](https://icons.getbootstrap.com) to version 1.8.2.

## Version [2.0.2](https://github.com/mc2it/theme/compare/v2.0.1...v2.0.2)
- Fixed the packaging of the command line interface.

## Version [2.0.1](https://github.com/mc2it/theme/compare/v2.0.0...v2.0.1)
- Fixed the packaging.

## Version [2.0.0](https://github.com/mc2it/theme/compare/v1.9.1...v2.0.0)
- Breaking change: dropped support for the [Less](https://lesscss.org) stylesheet.
- Breaking change: ported the command line interface to [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript).
- Added the brand logos.
- Adjusted the color of the toast borders.
- Exposed the core to be consumed by external [Sass](https://sass-lang.com) stylesheets.

## Version [1.9.1](https://github.com/mc2it/theme/compare/v1.9.0...v1.9.1)
- Removed the transparency from the toast backgrounds.

## Version [1.9.0](https://github.com/mc2it/theme/compare/v1.8.0...v1.9.0)
- Added background colors for the toast header.

## Version [1.8.0](https://github.com/mc2it/theme/compare/v1.7.6...v1.8.0)
- Adjusted the vertical position of the brand logo.
- Disabled the popover component.
- Removed the box shadow of the offcanvas component.

## Version [1.7.6](https://github.com/mc2it/theme/compare/v1.7.5...v1.7.6)
- Adjusted the font weight of the form labels.

## Version [1.7.5](https://github.com/mc2it/theme/compare/v1.7.4...v1.7.5)
- Adjusted the padding of the offcanvas component.

## Version [1.7.4](https://github.com/mc2it/theme/compare/v1.7.3...v1.7.4)
- Adjusted the width of the offcanvas component.

## Version [1.7.3](https://github.com/mc2it/theme/compare/v1.7.2...v1.7.3)
- Added the `.fw-100`, `.fw-300`, `.fw-400`, `.fw-600` and `.fw-700` classes.

## Version [1.7.2](https://github.com/mc2it/theme/compare/v1.7.1...v1.7.2)
- Adjusted the font weight of the dropdown headers.

## Version [1.7.1](https://github.com/mc2it/theme/compare/v1.7.0...v1.7.1)
- Removed the extra padding from modal buttons.
- Upgraded [Bootstrap Icons](https://icons.getbootstrap.com) to version 1.8.1.

## Version [1.7.0](https://github.com/mc2it/theme/compare/v1.6.1...v1.7.0)
- Upgraded [Bootstrap Icons](https://icons.getbootstrap.com) to version 1.8.0.

## Version [1.6.1](https://github.com/mc2it/theme/compare/v1.6.0...v1.6.1)
- Fixed the [Less](https://lesscss.org) stylesheet.

## Version [1.6.0](https://github.com/mc2it/theme/compare/v1.5.1...v1.6.0)
- Enabled the responsive images and thumbnails.

## Version [1.5.1](https://github.com/mc2it/theme/compare/v1.5.0...v1.5.1)
- Fixed the `.table-sticky` class.

## Version [1.5.0](https://github.com/mc2it/theme/compare/v1.4.0...v1.5.0)
- Enabled the rounded borders.
- Updated the package dependencies.

## Version [1.4.0](https://github.com/mc2it/theme/compare/v1.3.0...v1.4.0)
- Enabled the [Bootstrap](https://getbootstrap.com) popovers.

## Version [1.3.0](https://github.com/mc2it/theme/compare/v1.2.1...v1.3.0)
- Upgraded [Bootstrap](https://getbootstrap.com) to version 5.1.3.
- Upgraded [Bootstrap Icons](https://icons.getbootstrap.com) to version 1.6.0.

## Version [1.2.1](https://github.com/mc2it/theme/compare/v1.2.0...v1.2.1)
- Added a mixin for scrollbars customization.
- Customized the selection color.

## Version [1.2.0](https://github.com/mc2it/theme/compare/v1.1.0...v1.2.0)
- Enabled the [Bootstrap](https://getbootstrap.com) offcanvas.
- Enabled the [Bootstrap](https://getbootstrap.com) toasts.

## Version [1.1.0](https://github.com/mc2it/theme/compare/v1.0.1...v1.1.0)
- Enabled the [Bootstrap](https://getbootstrap.com) progress bars.
- Upgraded [Bootstrap](https://getbootstrap.com) to version 5.1.1.

## Version [1.0.1](https://github.com/mc2it/theme/compare/v1.0.0...v1.0.1)
- Fixed the issue [twbs/bootstrap#34789](https://github.com/twbs/bootstrap/issues/34789).

## Version [1.0.0](https://github.com/mc2it/theme/compare/v0.6.0...v1.0.0)
- Added new [Less](https://lesscss.org) variables.
- Updated the package dependencies.

## Version [0.6.0](https://github.com/mc2it/theme/compare/v0.5.2...v0.6.0)
- Enabled the [Bootstrap](https://getbootstrap.com) accordions.

## Version [0.5.2](https://github.com/mc2it/theme/compare/v0.5.1...v0.5.2)
- Fixed the generated stylesheet.

## Version [0.5.1](https://github.com/mc2it/theme/compare/v0.5.0...v0.5.1)
- Added the `.text-capitalize-first` class.

## Version [0.5.0](https://github.com/mc2it/theme/compare/v0.4.0...v0.5.0)
- Breaking change: the icon classes are no longer included in the stylesheet.
- Breaking change: the icon tags require the `.bi` class.
- Updated the package dependencies.

## Version [0.4.0](https://github.com/mc2it/theme/compare/v0.3.1...v0.4.0)
- Enabled the [Bootstrap](https://getbootstrap.com) tooltips.
- Updated the package dependencies.

## Version [0.3.1](https://github.com/mc2it/theme/compare/v0.3.0...v0.3.1)
- Fixed the font size of small buttons in tables.

## Version [0.3.0](https://github.com/mc2it/theme/compare/v0.2.0...v0.3.0)
- Added new [Bootstrap icons](https://icons.getbootstrap.com).
- Added new [Less](https://lesscss.org) variables.

## Version [0.2.0](https://github.com/mc2it/theme/compare/v0.1.0...v0.2.0)
- Added new background colors.
- Added new [Bootstrap icons](https://icons.getbootstrap.com).
- Added some [Less](https://lesscss.org) variables corresponding to [Sass](https://sass-lang.com) ones.

## Version 0.1.0
- Initial release.
