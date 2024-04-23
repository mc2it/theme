#!/usr/bin/env node
import{argv as x,exit as _}from"node:process";import{parseArgs as k}from"node:util";import y from"node:console";import{parseArgs as g}from"node:util";import{cp as d}from"node:fs/promises";import{join as n}from"node:path";import{fileURLToPath as a}from"node:url";function l(t={}){return a(new URL(t.scss?"../src/ui":"../www",import.meta.url))}async function p(t,e={}){let s=["css","fonts","img"],o=s.filter(i=>e[i]);o.length||(o=s);let r=a(new URL("../www",import.meta.url));for(let i of o)await d(n(r,i),o.length==1?t:n(t,i),{recursive:!0})}var b=`
Copy the library assets to a given directory.

Usage:
  mc2it_theme copy [options] <directory>

Arguments:
  directory      The path to the output directory.

Options:
  -c, --css      Copy only the CSS files.
  -f, --fonts    Copy only the font files.
  -i, --img      Copy only the image files.
  -h, --help     Display this help.
`;async function c(t){let{positionals:e,values:s}=g({allowPositionals:!0,args:t,options:{css:{short:"c",type:"boolean",default:!1},fonts:{short:"f",type:"boolean",default:!1},help:{short:"h",type:"boolean",default:!1},img:{short:"i",type:"boolean",default:!1}}});if(s.help)return y.log(b.trim());if(!e.length)throw Error("You must provide the path of the output directory.");return p(e[0],s)}import v from"node:console";import{parseArgs as w}from"node:util";var C=`
Print the path to the library assets.

Usage:
  mc2it_theme libpath [options]

Options:
  -s, --scss  Print the specific path for SCSS files.
  -h, --help  Display this help.
`;function m(t){let{values:e}=w({args:t,options:{help:{short:"h",type:"boolean",default:!1},scss:{short:"s",type:"boolean",default:!1}}});v.log(e.help?C.trim():l(e))}var h={bugs:"https://github.com/mc2it/theme/issues",description:"Bootstrap theme used by MC2IT applications.",homepage:"https://mc2it.github.io/theme",license:"MIT",name:"@mc2it/theme",repository:"mc2it/theme",type:"module",version:"7.0.0",author:{email:"dev@mc2it.com",name:"MC2IT",url:"https://www.mc2it.com"},bin:{mc2it_theme:"./bin/mc2it_theme.js"},contributors:[{email:"cedric@belin.io",name:"C\xE9dric Belin",url:"https://belin.io"}],dependencies:{bootstrap:"^5.3.3"},devDependencies:{"@fontsource-variable/material-symbols-rounded":"^5.0.29","@types/eslint__js":"^8.42.3","@types/gulp":"^4.0.17","@types/node":"^20.12.7",del:"^7.1.0",esbuild:"^0.20.2",eslint:"^8.57.0",execa:"^8.0.1",gulp:"^5.0.0","sass-embedded":"^1.75.0","source-map-js":"^1.2.0",stylelint:"^16.3.1","stylelint-config-standard-scss":"^13.1.0",typedoc:"^0.25.13",typescript:"^5.4.5","typescript-eslint":"^7.7.0"},engines:{node:">=20.0.0"},exports:{".":{sass:"./src/ui/index.scss",types:"./lib/index.d.ts",import:"./lib/index.js"},"./_variables.scss":{sass:"./src/ui/_theme.scss"}},files:["lib/","src/","www/"],keywords:["bootstrap","css","mc2it","theme","ui"],scripts:{prepack:"gulp",start:"gulp cli && node bin/mc2it_theme.js"}};var f=`
Command line interface of MC2IT Theme.

Usage:
  mc2it_theme [options] <command>

Options:
  -h, --help                  Display this help.
  -v, --version               Output the version number.

Commands:
  copy [options] <directory>  Copy the library assets to a given directory.
  libpath [options]           Print the path to the library assets.
`;async function O(){let{positionals:t,tokens:e,values:s}=k({allowPositionals:!0,strict:!1,tokens:!0,options:{help:{short:"h",type:"boolean",default:!1},version:{short:"v",type:"boolean",default:!1}}});if(s.version)return console.log(h.version);if(!t.length||s.help&&!t.length)return console.log(f.trim());let{index:o}=e.find(({kind:u})=>u=="positional"),r=x.slice(o+3),[i]=t;switch(i){case"copy":await c(r);break;case"libpath":m(r);break;default:console.log(f.trim())}}O().catch(t=>{console.error(t instanceof Error?t.message:t),_(1)});export{O as main};
