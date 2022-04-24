#!/usr/bin/env node
import {readFileSync} from "node:fs";
import process from "node:process";
import {program} from "commander";
import {copy, libpath} from "../lib/cli.js";

// Start the application.
const {version} = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
program.name("mc2it_theme")
	.description("Command line interface of MC2IT Theme.")
	.version(version, "-v, --version")
	.addCommand(copy)
	.addCommand(libpath)
	.parse(process.argv);
