#!/usr/bin/env node
import {program} from "commander";
import pkg from "../package.json" assert {type: "json"};
import {copy, libpath} from "../src/cli.js";

// Start the application.
program.name("mc2it_theme")
	.description("Command line interface of MC2IT Theme.")
	.version(pkg.version, "-v, --version")
	.addCommand(copy)
	.addCommand(libpath)
	.parse();
