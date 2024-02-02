#!/usr/bin/env node
import{argv as C}from"node:process";import{parseArgs as P}from"node:util";import b from"node:console";import{parseArgs as y}from"node:util";import{cp as f}from"node:fs/promises";import{join as l}from"node:path";import{fileURLToPath as c}from"node:url";function p(t={}){return c(new URL(t.scss?"../src/ui":"../www",import.meta.url))}async function a(t,e={}){let o=["css","fonts","img"],s=o.filter(i=>e[i]);s.length||(s=o);let n=c(new URL("../www",import.meta.url));for(let i of s)await f(l(n,i),s.length==1?t:l(t,i),{recursive:!0})}var g=`
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
`;async function m(t){let{positionals:e,values:o}=y({allowPositionals:!0,args:t,options:{css:{short:"c",type:"boolean",default:!1},fonts:{short:"f",type:"boolean",default:!1},help:{short:"h",type:"boolean",default:!1},img:{short:"i",type:"boolean",default:!1}}});if(o.help)return b.log(g.trim());if(!e.length)throw Error("You must provide the path of the output directory.");return a(e[0],o)}import w from"node:console";import{parseArgs as v}from"node:util";var j=`
Print the path to the library assets.

Usage:
  mc2it_theme libpath [options]

Options:
  -s, --scss  Print the specific path for SCSS files.
  -h, --help  Display this help.
`;function h(t){let{values:e}=v({args:t,options:{help:{short:"h",type:"boolean",default:!1},scss:{short:"s",type:"boolean",default:!1}}});w.log(e.help?j.trim():p(e))}var u={bugs:"https://github.com/mc2it/theme/issues",description:"Bootstrap theme used by MC2IT applications.",homepage:"https://mc2it.github.io/theme",license:"MIT",name:"@mc2it/theme",repository:"mc2it/theme",type:"module",version:"7.0.0",author:{email:"dev@mc2it.com",name:"MC2IT",url:"https://www.mc2it.com"},bin:{mc2it_theme:"./bin/mc2it_theme.js"},contributors:[{email:"cedric@belin.io",name:"C\xE9dric Belin",url:"https://belin.io"}],dependencies:{bootstrap:"^5.3.2"},devDependencies:{"@fontsource-variable/material-symbols-rounded":"^5.0.21","@types/node":"^20.11.16","@typescript-eslint/eslint-plugin":"^6.20.0","@typescript-eslint/parser":"^6.20.0","clean-css-cli":"^5.6.3",del:"^7.1.0",esbuild:"^0.20.0",eslint:"^8.56.0",execa:"^8.0.1",sass:"^1.70.0",typedoc:"^0.25.7",typescript:"^5.3.3"},engines:{node:">=20.0.0"},exports:{types:"./lib/index.d.ts",import:"./lib/index.js"},files:["lib/","src/","www/"],keywords:["bootstrap","css","mc2it","theme","ui"],scripts:{build:"npm run build-cli && npm run build-css","build-cli":'tsc --project src/tsconfig.json && esbuild "--banner:js=#!/usr/bin/env node" --bundle --format=esm --legal-comments=none --log-level=warning --minify --outfile=bin/mc2it_theme.js --platform=node src/cli.ts',"build-css":"sass --load-path=node_modules --no-source-map src/ui/index.scss www/css/main.css && cleancss -O2 --output=www/css/mc2it.min.css www/css/mc2it.css && node tool/build.js",clean:"node tool/clean.js",dist:"npm run clean && npm run build && git update-index --chmod=+x bin/mc2it_theme.js",doc:"typedoc --options etc/typedoc.js && node tool/doc.js",lint:"npm run build && tsc --project tsconfig.json && eslint --config=etc/eslint.cjs src tool",postpublish:"node tool/publish.js",prepack:"npm run dist",start:"npm run build && node bin/mc2it_theme.js"}};var r=`
Command line interface of MC2IT Theme.

Usage:
  mc2it_theme [options] <command>

Options:
  -h, --help                  Display this help.
  -v, --version               Output the version number.

Commands:
  copy [options] <directory>  Copy the library assets to a given directory.
  libpath [options]           Print the path to the library assets.
`;async function O(){let{positionals:t,tokens:e,values:o}=P({allowPositionals:!0,strict:!1,tokens:!0,options:{help:{short:"h",type:"boolean",default:!1},version:{short:"v",type:"boolean",default:!1}}});if(o.version)return console.log(u.version);if(o.help&&!t.length||!t.length)return console.log(r.trim());let{index:s}=e.find(({kind:d})=>d=="positional"),n=C.slice(s+3),[i]=t;switch(i){case"copy":await m(n);break;case"libpath":h(n);break;default:console.log(r.trim())}}O().catch(t=>{console.error(t instanceof Error?t.message:t),process.exitCode=1});export{O as main};
