#!/usr/bin/env node
(function(re,je){"use strict";var k=function(){return q.__string_rec(this,"")},W=W||{},c;class ie{constructor(e,t){this.r=new RegExp(e,t.split("u").join(""))}match(e){return this.r.global&&(this.r.lastIndex=0),this.r.m=this.r.exec(e),this.r.s=e,this.r.m!=null}matched(e){if(this.r.m!=null&&e>=0&&e<this.r.m.length)return this.r.m[e];throw x.thrown("EReg::matched")}}ie.__name__=!0;class w{static cca(e,t){let s=e.charCodeAt(t);if(s==s)return s}static substr(e,t,s){if(s==null)s=e.length;else if(s<0)if(t==0)s=e.length+s;else return"";return e.substr(t,s)}static now(){return Date.now()}}w.__name__=!0;class Y{static fold(e,t,s){let n=Ce(e);for(;n.hasNext();)s=t(n.next(),s);return s}static find(e,t){let s=Ce(e);for(;s.hasNext();){let n=s.next();if(t(n))return n}return null}}Y.__name__=!0,Math.__name__=!0;class le{static field(e,t){try{return e[t]}catch{return null}}}le.__name__=!0;class v{static string(e){return q.__string_rec(e,"")}}v.__name__=!0;class C{static isSpace(e,t){let s=w.cca(e,t);return s>8&&s<14?!0:s==32}static ltrim(e){let t=e.length,s=0;for(;s<t&&C.isSpace(e,s);)++s;return s>0?w.substr(e,s,t-s):e}static rtrim(e){let t=e.length,s=0;for(;s<t&&C.isSpace(e,t-s-1);)++s;return s>0?w.substr(e,0,t-s):e}static trim(e){return C.ltrim(C.rtrim(e))}static lpad(e,t,s){if(t.length<=0)return e;let n="";for(s-=e.length;n.length<s;)n+=t==null?"null":""+t;return n+=e==null?"null":""+e,n}static replace(e,t,s){return e.split(t).join(s)}}C.__name__=!0;class ae{static systemName(){let e=process.platform;switch(e){case"darwin":return"Mac";case"freebsd":return"BSD";case"linux":return"Linux";case"win32":return"Windows";default:return e}}}ae.__name__=!0;var z=W["haxe.StackItem"]={__ename__:!0,__constructs__:null,CFunction:{_hx_name:"CFunction",_hx_index:0,__enum__:"haxe.StackItem",toString:k},Module:(c=function(a){return{_hx_index:1,m:a,__enum__:"haxe.StackItem",toString:k}},c._hx_name="Module",c.__params__=["m"],c),FilePos:(c=function(a,e,t,s){return{_hx_index:2,s:a,file:e,line:t,column:s,__enum__:"haxe.StackItem",toString:k}},c._hx_name="FilePos",c.__params__=["s","file","line","column"],c),Method:(c=function(a,e){return{_hx_index:3,classname:a,method:e,__enum__:"haxe.StackItem",toString:k}},c._hx_name="Method",c.__params__=["classname","method"],c),LocalFunction:(c=function(a){return{_hx_index:4,v:a,__enum__:"haxe.StackItem",toString:k}},c._hx_name="LocalFunction",c.__params__=["v"],c)};z.__constructs__=[z.CFunction,z.Module,z.FilePos,z.Method,z.LocalFunction];class x extends Error{constructor(e,t,s){super(e),this.message=e,this.__previousException=t,this.__nativeException=s??this}unwrap(){return this.__nativeException}get_native(){return this.__nativeException}static caught(e){return e instanceof x?e:e instanceof Error?new x(e.message,null,e):new se(e,null,e)}static thrown(e){return e instanceof x?e.get_native():e instanceof Error?e:new se(e)}}x.__name__=!0;class se extends x{constructor(e,t,s){super(String(e),t,s),this.value=e}unwrap(){return this.value}}se.__name__=!0;class S{constructor(e){switch(e){case".":case"..":this.dir=e,this.file="";return}let t=e.lastIndexOf("/"),s=e.lastIndexOf("\\");t<s?(this.dir=w.substr(e,0,s),e=w.substr(e,s+1,null),this.backslash=!0):s<t?(this.dir=w.substr(e,0,t),e=w.substr(e,t+1,null)):this.dir=null;let n=e.lastIndexOf(".");n!=-1?(this.ext=w.substr(e,n+1,null),this.file=w.substr(e,0,n)):(this.ext=null,this.file=e)}static directory(e){let t=new S(e);return t.dir==null?"":t.dir}static join(e){let t=[],s=0;for(;s<e.length;){let i=e[s];++s,i!=null&&i!=""&&t.push(i)}if(t.length==0)return"";let n=t[0],r=1,l=t.length;for(;r<l;)n=S.addTrailingSlash(n),n+=t[r++];return S.normalize(n)}static normalize(e){let t="/";if(e=e.split("\\").join(t),e==t)return t;let s=[],n=0,r=e.split(t);for(;n<r.length;){let d=r[n];++n,d==".."&&s.length>0&&s[s.length-1]!=".."?s.pop():d==""?(s.length>0||w.cca(e,0)==47)&&s.push(d):d!="."&&s.push(d)}let l="",i=!1,u=!1,_=0,y=s.join(t);for(;_<y.length;){let d=y,m=_++,g=d.charCodeAt(m);g>=55296&&g<=56319&&(g=g-55232<<10|d.charCodeAt(m+1)&1023);let h=g;h>=65536&&++_;let p=h;switch(p){case 47:if(!i)u=!0;else{let te=p;i=!1,u&&(l+="/",u=!1),l+=String.fromCodePoint(te)}break;case 58:l+=":",i=!0;break;default:let E=p;i=!1,u&&(l+="/",u=!1),l+=String.fromCodePoint(E)}}return l}static addTrailingSlash(e){if(e.length==0)return"/";let t=e.lastIndexOf("/"),s=e.lastIndexOf("\\");return t<s?s!=e.length-1?e+"\\":e:t!=e.length-1?e+"/":e}static isAbsolute(e){return!!(e.startsWith("/")||e.charAt(1)==":"||e.startsWith("\\\\"))}}S.__name__=!0;class ue{constructor(e){this.current=0,this.array=e}hasNext(){return this.current<this.array.length}next(){return this.array[this.current++]}}ue.__name__=!0;class q{static __string_rec(e,t){if(e==null)return"null";if(t.length>=5)return"<...>";let s=typeof e;switch(s=="function"&&(e.__name__||e.__ename__)&&(s="object"),s){case"function":return"<function>";case"object":if(e.__enum__){let _=W[e.__enum__].__constructs__[e._hx_index],y=_._hx_name;return _.__params__?(t=t+"	",y+"("+function(d){var m;let g=[];{let h=0,p=_.__params__;for(;h<p.length;){let E=p[h];h=h+1,g.push(q.__string_rec(e[E],t))}}return m=g,m}(this).join(",")+")"):y}if(e instanceof Array){let u="[";t+="	";let _=0,y=e.length;for(;_<y;){let d=_++;u+=(d>0?",":"")+q.__string_rec(e[d],t)}return u+="]",u}let n;try{n=e.toString}catch{return"???"}if(n!=null&&n!=Object.toString&&typeof n=="function"){let u=e.toString();if(u!="[object Object]")return u}let r=`{
`;t+="	";let l=e.hasOwnProperty!=null,i=null;for(i in e)l&&!e.hasOwnProperty(i)||i=="prototype"||i=="__class__"||i=="__super__"||i=="__interfaces__"||i=="__properties__"||(r.length!=2&&(r+=`, 
`),r+=t+i+" : "+q.__string_rec(e[i],t));return t=t.substring(1),r+=`
`+t+"}",r;case"string":return e;default:return String(e)}}}q.__name__=!0;var R=require("fs"),Re=require("path"),ce=require("buffer").Buffer;class j{static copyAssets(e,t){t==null&&(t={});let s=["css","fonts","img"],n=[],r=0;for(;r<s.length;){let u=s[r];++r,le.field(t,u)&&n.push(u)}let l=0,i=n.length>0?n:s;for(;l<i.length;){let u=i[l];++l,j.copyDirectory(S.join([j.assetPath,u]),n.length==1?e:S.join([e,u]))}}static copyDirectory(e,t){let s=0,n=R.readdirSync(e);for(;s<n.length;){let r=n[s];++s;let l=S.join([e,r]),i=S.join([t,r]);T.isDirectory(l)?j.copyDirectory(l,i):(T.createDirectory(S.directory(i)),H.copy(l,i))}}}re.copyAssets=j.copyAssets,j.__name__=!0;class M{static get_packageVersion(){return M.packageVersion==null&&(M.packageVersion="4.0.2"),M.packageVersion}}M.__name__=!0;class _e{constructor(){this.help=!1,this.img=!1,this.fonts=!1,this.css=!1}run(e){if(this.help){let n=new K().format($.get());return process.stdout.write(v.string(n)),process.stdout.write(`
`),new N(new F(o.Success(null)))}let t=process.env.HAXELIB_RUN=="1";if(e.length<1||t&&e.length<2)return new N(new F(o.Failure(new I(400,"You must provide the path of the output directory.",{fileName:"src/mc2it_theme/cli/CopyCommand.hx",lineNumber:40,className:"mc2it_theme.cli.CopyCommand",methodName:"run"}))));let s=S.isAbsolute(e[0])?e.shift():S.join([t?e.pop():S.addTrailingSlash(process.cwd()),e.shift()]);return j.copyAssets(s,{css:this.css,fonts:this.fonts,img:this.img}),new N(new F(o.Success(null)))}}_e.__name__=!0;class oe{constructor(){this.help=!1}run(){let e=this.help?new K().format(B.get()):j.assetPath;return process.stdout.write(v.string(e)),process.stdout.write(`
`),O.NOISE}}oe.__name__=!0;class J{constructor(){this.version=!1,this.help=!1,this.libpath=new oe,this.copy=new _e}run(){let e=this.version?M.get_packageVersion():new K().format(U.get());return process.stdout.write(v.string(e)),process.stdout.write(`
`),O.NOISE}static main(){new ge(new J,new Q(5)).process(process.argv.slice(2)).handle(he.exit)}}J.__name__=!0;class T{static isDirectory(e){try{return R.statSync(e).isDirectory()}catch{return!1}}static createDirectory(e){try{R.mkdirSync(e)}catch(t){let s=x.caught(t).unwrap();if(s.code=="ENOENT")T.createDirectory(Re.dirname(e)),R.mkdirSync(e);else{let n;try{n=R.statSync(e)}catch{throw s}if(!n.isDirectory())throw s}}}}T.__name__=!0;class H{static copy(e,t){let s=R.openSync(e,"r"),n=R.fstatSync(s),r=R.openSync(t,"w",n.mode),l,i=0;for(;l=R.readSync(s,H.copyBuf,0,65536,i),l>0;)R.writeSync(r,H.copyBuf,0,l),i+=l;R.closeSync(s),R.closeSync(r)}}H.__name__=!0;class he{static exit(e){switch(e._hx_index){case 0:process.exit(0);break;case 1:let t=e.failure,s=t.message;t.data!=null&&(s+=", "+(t.data==null?"null":v.string(t.data))),process.stdout.write(v.string(s)),process.stdout.write(`
`);let n=t.code;process.exit(n);break}}}he.__name__=!0;class fe{constructor(e){this.buffer=e}}fe.__name__=!0;class ${static get(){return $.doc==null&&($.doc={doc:`\r
	Copy the library assets to a given directory.\r
\r
	> bootstrap_bundle copy [flags] <directory>\r
`,commands:[{isDefault:!0,isSub:!1,names:[],doc:" directory : The path to the output directory. "}],flags:[{names:["--css"],aliases:["c"],doc:" Copy only the CSS files. "},{names:["--fonts"],aliases:["f"],doc:" Copy only the font files. "},{names:["--img"],aliases:["i"],doc:" Copy only the image files. "},{names:["--help"],aliases:["h"],doc:" Display this help. "}]}),$.doc}}$.__name__=!0;class B{static get(){return B.doc==null&&(B.doc={doc:`\r
	Print the path to the library assets.\r
\r
	> mc2it_theme libpath [flags]\r
`,commands:[{isDefault:!0,isSub:!1,names:[],doc:null}],flags:[{names:["--help"],aliases:["h"],doc:" Display this help. "}]}),B.doc}}B.__name__=!0;class U{static get(){return U.doc==null&&(U.doc={doc:`\r
	Command line interface of MC2IT Theme.\r
\r
	> mc2it_theme <subcommand>\r
`,commands:[{isDefault:!1,isSub:!0,names:["copy"],doc:" Copy the library assets to a given directory. "},{isDefault:!1,isSub:!0,names:["libpath"],doc:" Print the path to the library assets. "},{isDefault:!0,isSub:!1,names:[],doc:null}],flags:[{names:["--help"],aliases:["h"],doc:" Display this help. "},{names:["--version"],aliases:["v"],doc:" Output the version number. "}]}),U.doc}}U.__name__=!0;class V{constructor(e,t,s){this.command=e,this.prompt=t,this.hasFlags=s}processArgs(e){let t=this;return this.hasFlags?I.catchExceptions(function(){let s=V.expandAssignments(e),n=[],r=0,l=!1;for(;r<s.length;){let i=s[r];if(i=="--")l=!0,++r;else if(!l&&w.cca(i,0)==45){let u=t.processFlag(s,r);if(u==-1)if(w.cca(i,1)!=45){let _=t.processAlias(s,r);if(_==-1)throw x.thrown('Unrecognized alias "'+i+'"');r+=_+1}else throw x.thrown('Unrecognized flag "'+i+'"');else r+=u+1}else n.push(i),++r}return n},null,{fileName:"tink/cli/Router.hx",lineNumber:25,className:"tink.cli.Router",methodName:"processArgs"}):o.Success(e)}processFlag(e,t){return-1}processAlias(e,t){return-1}static expandAssignments(e){let t=[],s=!0,n=0;for(;n<e.length;){let r=e[n];if(++n,r=="--"&&(s=!1),!s)t.push(r);else{let l=w.cca(r,0),i=w.cca(r,1),u=r.indexOf("=");l==null?t.push(r):l==45?i==null?t.push(r):i==45&&u!=-1?(t.push(w.substr(r,0,u)),t.push(w.substr(r,u+1,null))):t.push(r):t.push(r)}}return t}}V.__name__=!0;class de extends V{constructor(e,t){super(e,t,!0)}process(e){let t=this;if(e[0]==null){let s,n=this.processArgs(e);switch(n._hx_index){case 0:s=n.data;break;case 1:return new N(new F(o.Failure(n.failure)))}return O.next(this.promptRequired(),function(r){return t.run_run(s)})}else{let s,n=this.processArgs(e);switch(n._hx_index){case 0:s=n.data;break;case 1:return new N(new F(o.Failure(n.failure)))}return O.next(this.promptRequired(),function(r){return t.run_run(s)})}}processFlag(e,t){switch(e[t]){case"--css":this.command.css=!0;break;case"--fonts":this.command.fonts=!0;break;case"--help":this.command.help=!0;break;case"--img":this.command.img=!0;break;default:return-1}return t-t}processAlias(e,t){let s=e[t],n=1,r=s.length;for(;n<r;){let l=n++,i=w.cca(s,l);if(i==null)throw x.thrown("Invalid alias '-"+s.charAt(l)+"'");switch(i){case 99:this.command.css=!0;break;case 102:this.command.fonts=!0;break;case 104:this.command.help=!0;break;case 105:this.command.img=!0;break;default:throw x.thrown("Invalid alias '-"+s.charAt(l)+"'")}}return t-t}promptRequired(){return A.async(function(e){e(o.Success(null))})}run_run(e){return e.length<0?new N(new F(o.Failure(new I(null,"Insufficient arguments. Expected: 0, Got: "+e.length,{fileName:"src/mc2it_theme/cli/CopyCommand.hx",lineNumber:31,className:"tink.cli.Router0",methodName:"run_run"})))):this.command.run(e.slice(0,e.length))}}de.__name__=!0;class me extends V{constructor(e,t){super(e,t,!0)}process(e){let t=this;if(e[0]==null){let s,n=this.processArgs(e);switch(n._hx_index){case 0:s=n.data;break;case 1:return new N(new F(o.Failure(n.failure)))}return O.next(this.promptRequired(),function(r){return t.run_run(s)})}else{let s,n=this.processArgs(e);switch(n._hx_index){case 0:s=n.data;break;case 1:return new N(new F(o.Failure(n.failure)))}return O.next(this.promptRequired(),function(r){return t.run_run(s)})}}processFlag(e,t){if(e[t]=="--help")this.command.help=!0;else return-1;return t-t}processAlias(e,t){let s=e[t],n=1,r=s.length;for(;n<r;){let l=n++,i=w.cca(s,l);if(i==null)throw x.thrown("Invalid alias '-"+s.charAt(l)+"'");if(i==104)this.command.help=!0;else throw x.thrown("Invalid alias '-"+s.charAt(l)+"'")}return t-t}promptRequired(){return A.async(function(e){e(o.Success(null))})}run_run(e){return this.command.run()}}me.__name__=!0;class ge extends V{constructor(e,t){super(e,t,!0)}process(e){let t=this,s=e[0];if(s==null){let n,r=this.processArgs(e);switch(r._hx_index){case 0:n=r.data;break;case 1:return new N(new F(o.Failure(r.failure)))}return O.next(this.promptRequired(),function(l){return t.run_run(n)})}else switch(s){case"copy":return this.run_copy(e.slice(1));case"libpath":return this.run_libpath(e.slice(1));default:let n,r=this.processArgs(e);switch(r._hx_index){case 0:n=r.data;break;case 1:return new N(new F(o.Failure(r.failure)))}return O.next(this.promptRequired(),function(l){return t.run_run(n)})}}processFlag(e,t){switch(e[t]){case"--help":this.command.help=!0;break;case"--version":this.command.version=!0;break;default:return-1}return t-t}processAlias(e,t){let s=e[t],n=1,r=s.length;for(;n<r;){let l=n++,i=w.cca(s,l);if(i==null)throw x.thrown("Invalid alias '-"+s.charAt(l)+"'");switch(i){case 104:this.command.help=!0;break;case 118:this.command.version=!0;break;default:throw x.thrown("Invalid alias '-"+s.charAt(l)+"'")}}return t-t}promptRequired(){return A.async(function(e){e(o.Success(null))})}run_copy(e){return new de(this.command.copy,new Q(5)).process(e)}run_libpath(e){return new me(this.command.libpath,new Q(5)).process(e)}run_run(e){return this.command.run()}}ge.__name__=!0;class K{constructor(e){this.re=new ie("^\\s*\\*?\\s{0,2}(.*)$",""),this.root=e}format(e){let t="";t+=`
`;let s=this.formatDoc(e.doc);s!=null&&(t+=v.string(""+s+`

`));let n=e.commands,r=[],l=0;for(;l<n.length;){let _=n[l];++l,_.isDefault||r.push(_)}this.root!=null&&(t+=v.string("  Usage: "+this.root+`
`));let i=Y.find(e.commands,function(_){return _.isDefault});if(i!=null){let _=this.formatDoc(i.doc);_!=null&&(t+=v.string(this.indent(_,4)+`

`))}let u=this;if(r.length>0){let _=Y.fold(r,function(m,g){let h=0,p=m.names;for(;h<p.length;){let E=p[h];++h,E.length>g&&(g=E.length)}return g},0);this.root!=null&&(t+=v.string("  Usage: "+this.root+` <subcommand>
`)),t+=v.string(`    Subcommands:
`);let y=function(m,g){g==null&&(g="(doc missing)"),t+=v.string(u.indent(C.lpad(m," ",_)+" : "+C.trim(u.indent(g,_+3)),6)+`
`)},d=0;for(;d<r.length;){let m=r[d];++d;let g=m.names[0];if(y(g,this.formatDoc(m.doc)),m.names.length>1){let h=1,p=m.names.length;for(;h<p;)y(m.names[h++],"Alias of "+g)}}}if(e.flags.length>0){let _=function(h){let p=h.names.join(", ");if(h.aliases.length>0){let E=h.aliases,te=new Array(E.length),Ne=0,Ie=E.length;for(;Ne<Ie;){let Ee=Ne++;te[Ee]="-"+E[Ee]}p+=", "+te.join(", ")}return p},y=Y.fold(e.flags,function(h,p){let E=_(h);return E.length>p&&(p=E.length),p},0),d=function(h,p){p==null&&(p=""),t+=v.string(u.indent(C.lpad(h," ",y)+" : "+C.trim(u.indent(p,y+3)),6)+`
`)};t=(t+=`
`)+v.string(`  Flags:
`);let m=0,g=e.flags;for(;m<g.length;){let h=g[m];++m,d(_(h),this.formatDoc(h.doc))}}return t}indent(e,t){let s=e.split(`
`),n=new Array(s.length),r=0,l=s.length;for(;r<l;){let i=r++;n[i]=C.lpad(""," ",t)+s[i]}return n.join(`
`)}formatDoc(e){if(e==null)return null;let t=e.split(`
`),s=C.trim,n=new Array(t.length),r=0,l=t.length;for(;r<l;){let d=r++;n[d]=s(t[d])}let i=n;for(;i[0]=="";)i=i.slice(1);for(;i[i.length-1]=="";)i.pop();let u=new Array(i.length),_=0,y=i.length;for(;_<y;){let d=_++,m=i[d];u[d]=this.re.match(m)?this.re.matched(1):m}return u.join(`
`)}}K.__name__=!0;class pe{constructor(e,t){this.source=e,this.sink=t}}pe.__name__=!0;class we extends pe{constructor(){let e=process.stdin,t=null;t={},super(X.wrap("stdin",e,t.chunkSize,t.onEnd),ee.wrap("stdout",process.stdout))}}we.__name__=!0;class Q{constructor(e,t){this.trials=e,this.proxy=t??new we}}Q.__name__=!0;class f{static invoke(e,t){f.depth<500?(f.depth++,e(t),f.depth--):f.defer(function(){e(t)})}static defer(e){global.setImmediate(e)}}class xe{constructor(){}cancel(){let e=this.link;e?.cancel()}}xe.__name__=!0;class ne{constructor(e,t){this.dissolved=!1,this.a=e,this.b=t}cancel(){if(!this.dissolved){this.dissolved=!0;let e=this.a;e?.cancel();let t=this.b;t?.cancel(),this.a=null,this.b=null}}}ne.__name__=!0;class ye{constructor(e,t){if(e==null)throw x.thrown("callback expected but null received");this.cb=e,this.list=t}cancel(){if(this.list!=null){let e=this.list;this.cb=null,this.list=null,--e.used<=e.cells.length>>1&&e.compact()}}}ye.__name__=!0;class L{constructor(e){L._hx_skip_constructor||this._hx_constructor(e)}_hx_constructor(e){this.disposeHandlers=[],this.f=e}dispose(){let e=this.disposeHandlers;if(e!=null){this.disposeHandlers=null;let t=this.f;this.f=L.noop,t();let s=0;for(;s<e.length;)e[s++]()}}static noop(){}}L.__name__=!0;class be extends L{constructor(e){L._hx_skip_constructor=!0,super(),L._hx_skip_constructor=!1,this._hx_constructor(e)}_hx_constructor(e){e==null&&(e=!1),this.onfill=function(){},this.ondrain=function(){},this.busy=!1,this.queue=[],this.used=0;let t=this;super._hx_constructor(function(){t.busy||t.destroy()}),this.destructive=e,this.cells=[]}destroy(){let e=0,t=this.cells;for(;e<t.length;){let s=t[e];++e,s.cb=null,s.list=null}if(this.queue=null,this.cells=null,this.used>0){this.used=0;let s=this.ondrain;f.depth<500?(f.depth++,s(),f.depth--):f.defer(s)}}invoke(e){let t=this;if(f.depth<500){if(f.depth++,t.disposeHandlers!=null)if(t.busy){if(t.destructive!=!0){let s=t,n=e,r=function(){s.invoke(n)};t.queue.push(r)}}else{t.busy=!0,t.destructive&&t.dispose();let s=t.cells.length,n=0;for(;n<s;){let r=t.cells[n++];r.list!=null&&r.cb(e)}t.busy=!1,t.disposeHandlers==null?t.destroy():(t.used<t.cells.length&&t.compact(),t.queue.length>0&&t.queue.shift()())}f.depth--}else f.defer(function(){if(t.disposeHandlers!=null)if(t.busy){if(t.destructive!=!0){let s=t,n=e,r=function(){s.invoke(n)};t.queue.push(r)}}else{t.busy=!0,t.destructive&&t.dispose();let s=t.cells.length,n=0;for(;n<s;){let r=t.cells[n++];r.list!=null&&r.cb(e)}t.busy=!1,t.disposeHandlers==null?t.destroy():(t.used<t.cells.length&&t.compact(),t.queue.length>0&&t.queue.shift()())}})}compact(){if(!this.busy)if(this.used==0){this.resize(0);let e=this.ondrain;f.depth<500?(f.depth++,e(),f.depth--):f.defer(e)}else{let e=0,t=0,s=this.cells.length;for(;t<s;){let n=t++,r=this.cells[n];if(r.cb!=null&&(e!=n&&(this.cells[e]=r),++e==this.used))break}this.resize(this.used)}}resize(e){this.cells.length=e}}be.__name__=!0;class I{constructor(e,t,s){e==null&&(e=500),this.isTinkError=!0,this.code=e,this.message=t,this.pos=s,this.exceptionStack=[],this.callStack=[]}static withData(e,t,s,n){return I.typed(e,t,s,n)}static typed(e,t,s,n){let r=new I(e,t,n);return r.data=s,r}static asError(e){return e!=null&&e.isTinkError?e:null}static catchExceptions(e,t,s){try{return o.Success(e())}catch(n){let r=x.caught(n).unwrap(),l=I.asError(r);return o.Failure(l??(t==null?I.withData(null,"Unexpected Error",r,s):t(r)))}}}I.__name__=!0;class D{constructor(){D._hx_skip_constructor||this._hx_constructor()}_hx_constructor(){}getStatus(){return b.NeverEver}handle(e){return null}eager(){}}D.__name__=!0;class F{constructor(e){this.value=e}isComputed(){return!0}get(){return this.value}compute(){}}F.__name__=!0;class N extends D{constructor(e){super(),this.value=e}getStatus(){return b.Ready(this.value)}handle(e){return f.invoke(e,Z.get(this.value)),null}eager(){this.value.isComputed()||Z.get(this.value)}}N.__name__=!0;class A{static never(){return A.NEVER_INST}static first(e,t){let s=e;switch(s.getStatus()._hx_index){case 3:switch(t.getStatus()._hx_index){case 3:return s;case 4:return s;default:return s}break;case 4:return t;default:switch(t.getStatus()._hx_index){case 3:return t;case 4:return s;default:return new G(function(n){return new ne(e.handle(n),t.handle(n))})}}}static flatMap(e,t,s){let n=e.getStatus();switch(n._hx_index){case 3:let r=n.result;return new G(function(l){return t(Z.get(r)).handle(function(i){l(i)})});case 4:return A.never();default:return new G(function(l){let i=new xe;return new ne(e.handle(function(u){let _=t(u).handle(l),y=i.link;y?.cancel(),i.link=_}),i)})}}static async(e,t){t==null&&(t=!1);let s=A.irreversible(e);return t||s.eager(),s}static irreversible(e){return new G(function(t){return e(t),null})}}var b=W["tink.core.FutureStatus"]={__ename__:!0,__constructs__:null,Suspended:{_hx_name:"Suspended",_hx_index:0,__enum__:"tink.core.FutureStatus",toString:k},Awaited:{_hx_name:"Awaited",_hx_index:1,__enum__:"tink.core.FutureStatus",toString:k},EagerlyAwaited:{_hx_name:"EagerlyAwaited",_hx_index:2,__enum__:"tink.core.FutureStatus",toString:k},Ready:(c=function(a){return{_hx_index:3,result:a,__enum__:"tink.core.FutureStatus",toString:k}},c._hx_name="Ready",c.__params__=["result"],c),NeverEver:{_hx_name:"NeverEver",_hx_index:4,__enum__:"tink.core.FutureStatus",toString:k}};b.__constructs__=[b.Suspended,b.Awaited,b.EagerlyAwaited,b.Ready,b.NeverEver];class G extends D{constructor(e){D._hx_skip_constructor=!0,super(),D._hx_skip_constructor=!1,this._hx_constructor(e)}_hx_constructor(e){this.status=b.Suspended,super._hx_constructor(),this.wakeup=e,this.callbacks=new be(!0);let t=this;this.callbacks.ondrain=function(){if(t.status==b.Awaited){t.status=b.Suspended;let s=t.link;s?.cancel(),t.link=null}},this.callbacks.onfill=function(){t.status==b.Suspended&&(t.status=b.Awaited,t.arm())}}getStatus(){return this.status}trigger(e){if(this.status._hx_index!=3){this.status=b.Ready(new F(e));let t=this.link;this.link=null,this.wakeup=null,this.callbacks.invoke(e),t?.cancel()}}handle(e){let t=this.status;if(t._hx_index==3)return f.invoke(e,Z.get(t.result)),null;{let s=this.callbacks;if(s.disposeHandlers==null)return null;{let n=new ye(e,s);if(s.cells.push(n),s.used++==0){let r=s.onfill;f.depth<500?(f.depth++,r(),f.depth--):f.defer(r)}return n}}}arm(){let e=this;this.link=this.wakeup(function(t){e.trigger(t)})}eager(){switch(this.status._hx_index){case 0:this.status=b.EagerlyAwaited,this.arm();break;case 1:this.status=b.EagerlyAwaited;break;default:}}}G.__name__=!0;class Z{static get(e){return e.compute(),e.get()}}var o=W["tink.core.Outcome"]={__ename__:!0,__constructs__:null,Success:(c=function(a){return{_hx_index:0,data:a,__enum__:"tink.core.Outcome",toString:k}},c._hx_name="Success",c.__params__=["data"],c),Failure:(c=function(a){return{_hx_index:1,failure:a,__enum__:"tink.core.Outcome",toString:k}},c._hx_name="Failure",c.__params__=["failure"],c)};o.__constructs__=[o.Success,o.Failure];class O{static next(e,t,s){return A.flatMap(e,function(n){switch(n._hx_index){case 0:return t(n.data);case 1:return new N(new F(o.Failure(n.failure)))}})}}class ke{}ke.__name__=!0;class Se{constructor(){}}Se.__name__=!0;class ve extends Se{constructor(e){super(),this.upcoming=e}}ve.__name__=!0;class ee extends ke{constructor(e){super(),this.target=e}static wrap(e,t){return new ee(new Ae(e,t))}}ee.__name__=!0;class X extends ve{constructor(e){super(A.async(function(t){e.read().handle(function(s){let n=t,r;switch(s._hx_index){case 0:let l=s.data;r=l==null?P.End:P.Link(l,new X(e));break;case 1:r=P.Fail(s.failure);break}n(r)})},!0))}static wrap(e,t,s,n){return new X(new Fe(e,t,s,n))}}X.__name__=!0;class Fe{constructor(e,t,s,n){this.name=e,this.native=t,this.chunkSize=s;let r=A.async(function(l){t.once("end",function(){l(o.Success(null))}),t.once("error",function(i){l(o.Failure(new I(null,""+i.code+" - Failed reading from "+e+" because "+i.message,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:22,className:"tink.io.nodejs.WrappedReadable",methodName:"new"})))})});r.eager(),this.end=r,n!=null&&this.end.handle(function(){process.nextTick(n)})}read(){let e=this;return A.first(A.async(function(t){let s=null;s=function(){try{let n=e.native.read(e.chunkSize);if(n==null)e.native.once("readable",s);else{let r=typeof n=="string"?new ce(n):n;t(o.Success(new fe(r)))}}catch(n){let r=x.caught(n).unwrap();t(o.Failure(I.withData(null,"Error while reading from "+e.name,r,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:48,className:"tink.io.nodejs.WrappedReadable",methodName:"read"})))}},s()}),this.end)}}Fe.__name__=!0;class Ae{constructor(e,t){this.name=e,this.native=t,this.ended=A.async(function(s){t.once("end",function(){s(o.Success(!1))}),t.once("finish",function(){s(o.Success(!1))}),t.once("close",function(){s(o.Success(!1))}),t.on("error",function(n){s(o.Failure(new I(null,""+n.code+": "+n.message,{fileName:"tink/io/nodejs/WrappedWritable.hx",lineNumber:24,className:"tink.io.nodejs.WrappedWritable",methodName:"new"})))})})}}Ae.__name__=!0;var P=W["tink.streams.Step"]={__ename__:!0,__constructs__:null,Link:(c=function(a,e){return{_hx_index:0,value:a,next:e,__enum__:"tink.streams.Step",toString:k}},c._hx_name="Link",c.__params__=["value","next"],c),Fail:(c=function(a){return{_hx_index:1,e:a,__enum__:"tink.streams.Step",toString:k}},c._hx_name="Fail",c.__params__=["e"],c),End:{_hx_name:"End",_hx_index:2,__enum__:"tink.streams.Step",toString:k}};P.__constructs__=[P.Link,P.Fail,P.End];function Ce(a){return a instanceof Array?new ue(a):a.iterator()}typeof performance<"u"&&typeof performance.now=="function"&&(w.now=performance.now.bind(performance)),String.fromCodePoint==null&&(String.fromCodePoint=function(a){return a<65536?String.fromCharCode(a):String.fromCharCode((a>>10)+55232)+String.fromCharCode((a&1023)+56320)}),String.__name__=!0,Array.__name__=!0,q.__toStr={}.toString,re.assetPath=j.assetPath=C.replace(S.join([S.directory(__filename),"../www"]),"/",ae.systemName()=="Windows"?"\\":"/"),H.copyBuf=ce.alloc(65536),f.depth=0,L._hx_skip_constructor=!1,D._hx_skip_constructor=!1,A.NEVER_INST=new D,O.NOISE=new N(new F(o.Success(null))),J.main()})(typeof exports<"u"?exports:global,global);
