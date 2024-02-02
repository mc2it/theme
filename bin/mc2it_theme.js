#!/usr/bin/env node
import{argv as f}from"node:process";import{parseArgs as g}from"node:util";import a from"node:console";import{fileURLToPath as m}from"node:url";import{parseArgs as d}from"node:util";var h=`
Print the path to the library assets.

Usage:
  mc2it_theme libpath [options]

Options:
  -s, --scss  Print the specific path for SCSS files.
  -h, --help  Display this help.
`;function u(e={}){return m(new URL(e.scss?"../src/ui":"../www",import.meta.url))}function i(e){let{values:t}=d({args:e,options:{help:{short:"h",type:"boolean",default:!1},scss:{short:"s",type:"boolean",default:!1}}});a.log(t.help?h.trim():u(t))}var n={bugs:"https://github.com/mc2it/theme/issues",description:"Bootstrap theme used by MC2IT applications.",homepage:"https://mc2it.github.io/theme",license:"MIT",name:"@mc2it/theme",repository:"mc2it/theme",type:"module",version:"7.0.0",author:{email:"dev@mc2it.com",name:"MC2IT",url:"https://www.mc2it.com"},bin:{mc2it_theme:"./bin/mc2it_theme.js"},contributors:[{email:"cedric@belin.io",name:"C\xE9dric Belin",url:"https://belin.io"}],dependencies:{bootstrap:"^5.3.2"},devDependencies:{"@fontsource-variable/material-symbols-rounded":"^5.0.21","@types/node":"^20.11.16","@typescript-eslint/eslint-plugin":"^6.20.0","@typescript-eslint/parser":"^6.20.0","clean-css-cli":"^5.6.3",del:"^7.1.0",esbuild:"^0.20.0",eslint:"^8.56.0",execa:"^8.0.1",sass:"^1.70.0",typedoc:"^0.25.7",typescript:"^5.3.3"},engines:{node:">=20.0.0"},exports:{types:"./lib/index.d.ts",import:"./lib/index.js"},files:["lib/","src/","www/"],keywords:["bootstrap","css","mc2it","theme","ui"],scripts:{build:"npm run build-cli && npm run build-css","build-cli":'tsc --project src/tsconfig.json && esbuild "--banner:js=#!/usr/bin/env node" --bundle --format=esm --legal-comments=none --log-level=warning --minify --outfile=bin/mc2it_theme.js --platform=node src/cli.ts',"build-css":"sass --load-path=node_modules --no-source-map src/ui/index.scss www/css/main.css && cleancss -O2 --output=www/css/mc2it.min.css www/css/mc2it.css && node tool/build.js",clean:"node tool/clean.js",dist:"npm run clean && npm run build && git update-index --chmod=+x bin/mc2it_theme.js",doc:"typedoc --options etc/typedoc.js && node tool/doc.js",lint:"npm run build && tsc --project tsconfig.json && eslint --config=etc/eslint.cjs src tool",postpublish:"node tool/publish.js",prepack:"npm run dist",start:"npm run build && node bin/mc2it_theme.js"}};var r=`
Command line interface of MC2IT Theme.

Usage:
  mc2it_theme [options] <command>

Options:
  -h, --help                        Display this help.
  -v, --version                     Output the version number.

Commands:
  copy [options] <fileOrDirectory>  Copy the library assets to a given directory.
  libpath [options]                 Print the path to the library assets.
`;async function y(){let{positionals:e,tokens:t,values:s}=g({allowPositionals:!0,strict:!1,tokens:!0,options:{help:{short:"h",type:"boolean",default:!1},version:{short:"v",type:"boolean",default:!1}}});if(s.version)return console.log(n.version);if(s.help&&!e.length||!e.length)return console.log(r.trim());let{index:l}=t.find(({kind:p})=>p=="positional"),c=f.slice(l+3),[o]=e;switch(o){case"libpath":i(c);break;default:throw Error(`Unknown command "${o}".`)}}y().catch(e=>{console.error(e instanceof Error?e.message:e),process.exitCode=1});export{y as main};
