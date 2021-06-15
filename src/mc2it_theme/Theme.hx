package mc2it_theme;

import bootstrap.Version as BsVersion;

/** Bootstrap theme used by MC2IT applications. **/
abstract class Theme {

	/** The version number of the [Bootstrap](https://getbootstrap.com) library. **/
	public static inline final bootstrap = BsVersion.bootstrap;

	/** The version number of the [Bootstrap Icons](https://icons.getbootstrap.com) library. **/
	public static inline final bootstrapIcons = BsVersion.bootstrapIcons;

	/** The version number of this theme. **/
	public static inline final version = Version.getPackageVersion();
}
