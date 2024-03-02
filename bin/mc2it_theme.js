#!/usr/bin/env node
import{argv as P}from"node:process";import{parseArgs as _}from"node:util";import y from"node:console";import{parseArgs as g}from"node:util";import{cp as d}from"node:fs/promises";import{join as a}from"node:path";import{fileURLToPath as p}from"node:url";function l(e={}){return p(new URL(e.scss?"../src/ui":"../www",import.meta.url))}async function c(e,t={}){let o=["css","fonts","img"],s=o.filter(i=>t[i]);s.length||(s=o);let r=p(new URL("../www",import.meta.url));for(let i of s)await d(a(r,i),s.length==1?e:a(e,i),{recursive:!0})}var b=`
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
`;async function m(e){let{positionals:t,values:o}=g({allowPositionals:!0,args:e,options:{css:{short:"c",type:"boolean",default:!1},fonts:{short:"f",type:"boolean",default:!1},help:{short:"h",type:"boolean",default:!1},img:{short:"i",type:"boolean",default:!1}}});if(o.help)return y.log(b.trim());if(!t.length)throw Error("You must provide the path of the output directory.");return c(t[0],o)}import v from"node:console";import{parseArgs as w}from"node:util";var C=`
Print the path to the library assets.

Usage:
  mc2it_theme libpath [options]

Options:
  -s, --scss  Print the specific path for SCSS files.
  -h, --help  Display this help.
`;function h(e){let{values:t}=w({args:e,options:{help:{short:"h",type:"boolean",default:!1},scss:{short:"s",type:"boolean",default:!1}}});v.log(t.help?C.trim():l(t))}var f={bugs:"https://github.com/mc2it/theme/issues",description:"Bootstrap theme used by MC2IT applications.",homepage:"https://mc2it.github.io/theme",license:"MIT",name:"@mc2it/theme",repository:"mc2it/theme",type:"module",version:"7.0.0",author:{email:"dev@mc2it.com",name:"MC2IT",url:"https://www.mc2it.com"},bin:{mc2it_theme:"./bin/mc2it_theme.js"},contributors:[{email:"cedric@belin.io",name:"C\xE9dric Belin",url:"https://belin.io"}],dependencies:{bootstrap:"^5.3.3"},devDependencies:{"@fontsource-variable/material-symbols-rounded":"^5.0.23","@types/eslint__js":"^8.42.3","@types/gulp":"^4.0.17","@types/node":"^20.11.24","clean-css-cli":"^5.6.3",del:"^7.1.0",esbuild:"^0.20.1",eslint:"^8.57.0",execa:"^8.0.1",gulp:"^4.0.2","sass-embedded":"^1.71.1","source-map-js":"^1.0.2",typedoc:"^0.25.9",typescript:"^5.3.3","typescript-eslint":"^7.1.0"},engines:{node:">=20.0.0"},exports:{".":{types:"./lib/index.d.ts",sass:"./src/ui/index.scss",import:"./lib/index.js"},"./_variables.scss":{sass:"./src/ui/_theme.scss"}},files:["lib/","src/","www/"],keywords:["bootstrap","css","mc2it","theme","ui"],scripts:{prepack:"gulp",start:"gulp cli && node bin/mc2it_theme.js"}};var n=`
Command line interface of MC2IT Theme.

Usage:
  mc2it_theme [options] <command>

Options:
  -h, --help                  Display this help.
  -v, --version               Output the version number.

Commands:
  copy [options] <directory>  Copy the library assets to a given directory.
  libpath [options]           Print the path to the library assets.
`;async function O(){let{positionals:e,tokens:t,values:o}=_({allowPositionals:!0,strict:!1,tokens:!0,options:{help:{short:"h",type:"boolean",default:!1},version:{short:"v",type:"boolean",default:!1}}});if(o.version)return console.log(f.version);if(o.help&&!e.length||!e.length)return console.log(n.trim());let{index:s}=t.find(({kind:u})=>u=="positional"),r=P.slice(s+3),[i]=e;switch(i){case"copy":await m(r);break;case"libpath":h(r);break;default:console.log(n.trim())}}O().catch(e=>{console.error(e instanceof Error?e.message:e),process.exitCode=1});export{O as main};
