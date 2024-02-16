import {cpSync} from "node:fs";
import {join} from "node:path";

// Builds the project.
const fontsource = "node_modules/@fontsource-variable/material-symbols-rounded/files";
cpSync(join(fontsource, "material-symbols-rounded-latin-fill-normal.woff2"), "www/fonts/material_symbols.woff2");
