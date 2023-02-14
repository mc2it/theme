#!/usr/bin/env node
(function(se,re){"use strict";var b=function(){return D.__string_rec(this,"")},P=P||{},c;class ie{constructor(e,t){this.r=new RegExp(e,t.split("u").join(""))}match(e){return this.r.global&&(this.r.lastIndex=0),this.r.m=this.r.exec(e),this.r.s=e,this.r.m!=null}matched(e){if(this.r.m!=null&&e>=0&&e<this.r.m.length)return this.r.m[e];throw x.thrown("EReg::matched")}}ie.__name__=!0;class w{static cca(e,t){let n=e.charCodeAt(t);if(n==n)return n}static substr(e,t,n){if(n==null)n=e.length;else if(n<0)if(t==0)n=e.length+n;else return"";return e.substr(t,n)}static now(){return Date.now()}}w.__name__=!0;class X{static fold(e,t,n){let s=Ne(e);for(;s.hasNext();)n=t(s.next(),n);return n}static find(e,t){let n=Ne(e);for(;n.hasNext();){let s=n.next();if(t(s))return s}return null}}X.__name__=!0,Math.__name__=!0;class le{static field(e,t){try{return e[t]}catch{return null}}}le.__name__=!0;class v{static string(e){return D.__string_rec(e,"")}}v.__name__=!0;class A{static isSpace(e,t){let n=w.cca(e,t);return n>8&&n<14?!0:n==32}static ltrim(e){let t=e.length,n=0;for(;n<t&&A.isSpace(e,n);)++n;return n>0?w.substr(e,n,t-n):e}static rtrim(e){let t=e.length,n=0;for(;n<t&&A.isSpace(e,t-n-1);)++n;return n>0?w.substr(e,0,t-n):e}static trim(e){return A.ltrim(A.rtrim(e))}static lpad(e,t,n){if(t.length<=0)return e;let s="";for(n-=e.length;s.length<n;)s+=t==null?"null":""+t;return s+=e==null?"null":""+e,s}static replace(e,t,n){return e.split(t).join(n)}}A.__name__=!0;class ae{static systemName(){let e=process.platform;switch(e){case"darwin":return"Mac";case"freebsd":return"BSD";case"linux":return"Linux";case"win32":return"Windows";default:return e}}}ae.__name__=!0;var W=P["haxe.StackItem"]={__ename__:!0,__constructs__:null,CFunction:{_hx_name:"CFunction",_hx_index:0,__enum__:"haxe.StackItem",toString:b},Module:(c=function(l){return{_hx_index:1,m:l,__enum__:"haxe.StackItem",toString:b}},c._hx_name="Module",c.__params__=["m"],c),FilePos:(c=function(l,e,t,n){return{_hx_index:2,s:l,file:e,line:t,column:n,__enum__:"haxe.StackItem",toString:b}},c._hx_name="FilePos",c.__params__=["s","file","line","column"],c),Method:(c=function(l,e){return{_hx_index:3,classname:l,method:e,__enum__:"haxe.StackItem",toString:b}},c._hx_name="Method",c.__params__=["classname","method"],c),LocalFunction:(c=function(l){return{_hx_index:4,v:l,__enum__:"haxe.StackItem",toString:b}},c._hx_name="LocalFunction",c.__params__=["v"],c)};W.__constructs__=[W.CFunction,W.Module,W.FilePos,W.Method,W.LocalFunction];class x extends Error{constructor(e,t,n){super(e),this.message=e,this.__previousException=t,this.__nativeException=n??this}unwrap(){return this.__nativeException}get_native(){return this.__nativeException}static caught(e){return e instanceof x?e:e instanceof Error?new x(e.message,null,e):new te(e,null,e)}static thrown(e){return e instanceof x?e.get_native():e instanceof Error?e:new te(e)}}x.__name__=!0;class te extends x{constructor(e,t,n){super(String(e),t,n),this.value=e}unwrap(){return this.value}}te.__name__=!0;class y{constructor(e){switch(e){case".":case"..":this.dir=e,this.file="";return}let t=e.lastIndexOf("/"),n=e.lastIndexOf("\\");t<n?(this.dir=w.substr(e,0,n),e=w.substr(e,n+1,null),this.backslash=!0):n<t?(this.dir=w.substr(e,0,t),e=w.substr(e,t+1,null)):this.dir=null;let s=e.lastIndexOf(".");s!=-1?(this.ext=w.substr(e,s+1,null),this.file=w.substr(e,0,s)):(this.ext=null,this.file=e)}static directory(e){let t=new y(e);return t.dir==null?"":t.dir}static join(e){let t=[],n=0;for(;n<e.length;){let i=e[n];++n,i!=null&&i!=""&&t.push(i)}if(t.length==0)return"";let s=t[0],r=1,a=t.length;for(;r<a;)s=y.addTrailingSlash(s),s+=t[r++];return y.normalize(s)}static normalize(e){let t="/";if(e=e.split("\\").join(t),e==t)return t;let n=[],s=0,r=e.split(t);for(;s<r.length;){let d=r[s];++s,d==".."&&n.length>0&&n[n.length-1]!=".."?n.pop():d==""?(n.length>0||w.cca(e,0)==47)&&n.push(d):d!="."&&n.push(d)}let a="",i=!1,_=!1,u=0,S=n.join(t);for(;u<S.length;){let d=S,m=u++,g=d.charCodeAt(m);g>=55296&&g<=56319&&(g=g-55232<<10|d.charCodeAt(m+1)&1023);let h=g;h>=65536&&++u;let p=h;switch(p){case 47:if(!i)_=!0;else{let ee=p;i=!1,_&&(a+="/",_=!1),a+=String.fromCodePoint(ee)}break;case 58:a+=":",i=!0;break;default:let E=p;i=!1,_&&(a+="/",_=!1),a+=String.fromCodePoint(E)}}return a}static addTrailingSlash(e){if(e.length==0)return"/";let t=e.lastIndexOf("/"),n=e.lastIndexOf("\\");return t<n?n!=e.length-1?e+"\\":e:t!=e.length-1?e+"/":e}static isAbsolute(e){return!!(e.startsWith("/")||e.charAt(1)==":"||e.startsWith("\\\\"))}}y.__name__=!0;class ue{constructor(e){this.current=0,this.array=e}hasNext(){return this.current<this.array.length}next(){return this.array[this.current++]}}ue.__name__=!0;class D{static __string_rec(e,t){if(e==null)return"null";if(t.length>=5)return"<...>";let n=typeof e;switch(n=="function"&&(e.__name__||e.__ename__)&&(n="object"),n){case"function":return"<function>";case"object":if(e.__enum__){let u=P[e.__enum__].__constructs__[e._hx_index],S=u._hx_name;return u.__params__?(t=t+"	",S+"("+function(d){var m;let g=[];{let h=0,p=u.__params__;for(;h<p.length;){let E=p[h];h=h+1,g.push(D.__string_rec(e[E],t))}}return m=g,m}(this).join(",")+")"):S}if(e instanceof Array){let _="[";t+="	";let u=0,S=e.length;for(;u<S;){let d=u++;_+=(d>0?",":"")+D.__string_rec(e[d],t)}return _+="]",_}let s;try{s=e.toString}catch{return"???"}if(s!=null&&s!=Object.toString&&typeof s=="function"){let _=e.toString();if(_!="[object Object]")return _}let r=`{
`;t+="	";let a=e.hasOwnProperty!=null,i=null;for(i in e)a&&!e.hasOwnProperty(i)||i=="prototype"||i=="__class__"||i=="__super__"||i=="__interfaces__"||i=="__properties__"||(r.length!=2&&(r+=`, 
`),r+=t+i+" : "+D.__string_rec(e[i],t));return t=t.substring(1),r+=`
`+t+"}",r;case"string":return e;default:return String(e)}}}D.__name__=!0;var R=require("fs"),Ie=require("path"),ce=require("buffer").Buffer;class O{static copyAssets(e,t){t==null&&(t={});let n=["css","fonts","img"],s=[],r=0;for(;r<n.length;){let u=n[r];++r,le.field(t,u)&&s.push(u)}let a=y.join([y.directory(__filename),"../www"]),i=0,_=s.length>0?s:n;for(;i<_.length;){let u=_[i];++i,O.copyDirectory(y.join([a,u]),s.length==1?e:y.join([e,u]))}}static copyDirectory(e,t){let n=0,s=R.readdirSync(e);for(;n<s.length;){let r=s[n];++n;let a=y.join([e,r]),i=y.join([t,r]);V.isDirectory(a)?O.copyDirectory(a,i):(V.createDirectory(y.directory(i)),z.copy(a,i))}}}se.copyAssets=O.copyAssets,O.__name__=!0;class ${static get_packageVersion(){return $.packageVersion==null&&($.packageVersion="4.0.0"),$.packageVersion}}$.__name__=!0;class _e{constructor(){this.img=!1,this.help=!1,this.fonts=!1,this.css=!1}run(e){if(this.help){let n=new J().format(M.get());return process.stdout.write(v.string(n)),process.stdout.write(`
`),new C(new F(o.Success(null)))}let t=process.env.HAXELIB_RUN=="1";return e.length<1||t&&e.length<2?new C(new F(o.Failure(new j(400,"You must provide the path of the output directory.",{fileName:"src/mc2it_theme/cli/CopyCommand.hx",lineNumber:36,className:"mc2it_theme.cli.CopyCommand",methodName:"run"})))):(O.copyAssets(y.isAbsolute(e[0])?e[0]:y.join([t?e[e.length-1]:process.cwd(),e[0]]),{css:this.css,fonts:this.fonts,img:this.img}),new C(new F(o.Success(null))))}}_e.__name__=!0;class oe{constructor(){this.help=!1}run(){let e=this.help?new J().format(H.get()):O.assetPath;return process.stdout.write(v.string(e)),process.stdout.write(`
`),I.NOISE}}oe.__name__=!0;class Y{constructor(){this.version=!1,this.libpath=new oe,this.help=!1,this.copy=new _e}run(){let e=this.version?$.get_packageVersion():new J().format(B.get());return process.stdout.write(v.string(e)),process.stdout.write(`
`),I.NOISE}static main(){new ge(new Y,new K(5)).process(process.argv.slice(2)).handle(he.exit)}}Y.__name__=!0;class V{static isDirectory(e){try{return R.statSync(e).isDirectory()}catch{return!1}}static createDirectory(e){try{R.mkdirSync(e)}catch(t){let n=x.caught(t).unwrap();if(n.code=="ENOENT")V.createDirectory(Ie.dirname(e)),R.mkdirSync(e);else{let s;try{s=R.statSync(e)}catch{throw n}if(!s.isDirectory())throw n}}}}V.__name__=!0;class z{static copy(e,t){let n=R.openSync(e,"r"),s=R.openSync(t,"w",R.fstatSync(n).mode),r,a=0;for(;r=R.readSync(n,z.copyBuf,0,65536,a),r>0;)R.writeSync(s,z.copyBuf,0,r),a+=r;R.closeSync(n),R.closeSync(s)}}z.__name__=!0;class he{static exit(e){switch(e._hx_index){case 0:process.exit(0);break;case 1:let t=e.failure,n=t.message;t.data!=null&&(n+=", "+(t.data==null?"null":v.string(t.data))),process.stdout.write(v.string(n)),process.stdout.write(`
`);let s=t.code;process.exit(s);break}}}he.__name__=!0;class fe{constructor(e){this.buffer=e}}fe.__name__=!0;class M{static get(){return M.doc==null&&(M.doc={doc:" Copy the library assets to a given directory. ",commands:[{isDefault:!0,isSub:!1,names:[],doc:" <directory> : The path to the output directory. "}],flags:[{names:["--css"],aliases:["c"],doc:" Copy only the CSS files. "},{names:["--fonts"],aliases:["f"],doc:" Copy only the font files. "},{names:["--help"],aliases:["h"],doc:" Display this help. "},{names:["--img"],aliases:["i"],doc:" Copy only the image files. "}]}),M.doc}}M.__name__=!0;class H{static get(){return H.doc==null&&(H.doc={doc:" Print the path to the library assets. ",commands:[{isDefault:!0,isSub:!1,names:[],doc:null}],flags:[{names:["--help"],aliases:["h"],doc:" Display this help. "}]}),H.doc}}H.__name__=!0;class B{static get(){return B.doc==null&&(B.doc={doc:" Command line interface of MC2IT Theme. ",commands:[{isDefault:!1,isSub:!0,names:["copy"],doc:" Copy the library assets to a given directory. "},{isDefault:!1,isSub:!0,names:["libpath"],doc:" Print the path to the library assets. "},{isDefault:!0,isSub:!1,names:[],doc:null}],flags:[{names:["--help"],aliases:["h"],doc:" Display this help. "},{names:["--version"],aliases:["v"],doc:" Output the version number. "}]}),B.doc}}B.__name__=!0;class U{constructor(e,t,n){this.command=e,this.prompt=t,this.hasFlags=n}processArgs(e){let t=this;return this.hasFlags?j.catchExceptions(function(){let n=U.expandAssignments(e),s=[],r=0,a=!1;for(;r<n.length;){let i=n[r];if(i=="--")a=!0,++r;else if(!a&&w.cca(i,0)==45){let _=t.processFlag(n,r);if(_==-1)if(w.cca(i,1)!=45){let u=t.processAlias(n,r);if(u==-1)throw x.thrown('Unrecognized alias "'+i+'"');r+=u+1}else throw x.thrown('Unrecognized flag "'+i+'"');else r+=_+1}else s.push(i),++r}return s},null,{fileName:"tink/cli/Router.hx",lineNumber:25,className:"tink.cli.Router",methodName:"processArgs"}):o.Success(e)}processFlag(e,t){return-1}processAlias(e,t){return-1}static expandAssignments(e){let t=[],n=!0,s=0;for(;s<e.length;){let r=e[s];if(++s,r=="--"&&(n=!1),!n)t.push(r);else{let a=w.cca(r,0),i=w.cca(r,1),_=r.indexOf("=");a==null?t.push(r):a==45?i==null?t.push(r):i==45&&_!=-1?(t.push(w.substr(r,0,_)),t.push(w.substr(r,_+1,null))):t.push(r):t.push(r)}}return t}}U.__name__=!0;class de extends U{constructor(e,t){super(e,t,!0)}process(e){let t=this;if(e[0]==null){let n,s=this.processArgs(e);switch(s._hx_index){case 0:n=s.data;break;case 1:return new C(new F(o.Failure(s.failure)))}return I.next(this.promptRequired(),function(r){return t.run_run(n)})}else{let n,s=this.processArgs(e);switch(s._hx_index){case 0:n=s.data;break;case 1:return new C(new F(o.Failure(s.failure)))}return I.next(this.promptRequired(),function(r){return t.run_run(n)})}}processFlag(e,t){switch(e[t]){case"--css":this.command.css=!0;break;case"--fonts":this.command.fonts=!0;break;case"--help":this.command.help=!0;break;case"--img":this.command.img=!0;break;default:return-1}return t-t}processAlias(e,t){let n=e[t],s=1,r=n.length;for(;s<r;){let a=s++,i=w.cca(n,a);if(i==null)throw x.thrown("Invalid alias '-"+n.charAt(a)+"'");switch(i){case 99:this.command.css=!0;break;case 102:this.command.fonts=!0;break;case 104:this.command.help=!0;break;case 105:this.command.img=!0;break;default:throw x.thrown("Invalid alias '-"+n.charAt(a)+"'")}}return t-t}promptRequired(){return N.async(function(e){e(o.Success(null))})}run_run(e){return e.length<0?new C(new F(o.Failure(new j(null,"Insufficient arguments. Expected: 0, Got: "+e.length,{fileName:"src/mc2it_theme/cli/CopyCommand.hx",lineNumber:27,className:"tink.cli.Router0",methodName:"run_run"})))):this.command.run(e.slice(0,e.length))}}de.__name__=!0;class me extends U{constructor(e,t){super(e,t,!0)}process(e){let t=this;if(e[0]==null){let n,s=this.processArgs(e);switch(s._hx_index){case 0:n=s.data;break;case 1:return new C(new F(o.Failure(s.failure)))}return I.next(this.promptRequired(),function(r){return t.run_run(n)})}else{let n,s=this.processArgs(e);switch(s._hx_index){case 0:n=s.data;break;case 1:return new C(new F(o.Failure(s.failure)))}return I.next(this.promptRequired(),function(r){return t.run_run(n)})}}processFlag(e,t){if(e[t]=="--help")this.command.help=!0;else return-1;return t-t}processAlias(e,t){let n=e[t],s=1,r=n.length;for(;s<r;){let a=s++,i=w.cca(n,a);if(i==null)throw x.thrown("Invalid alias '-"+n.charAt(a)+"'");if(i==104)this.command.help=!0;else throw x.thrown("Invalid alias '-"+n.charAt(a)+"'")}return t-t}promptRequired(){return N.async(function(e){e(o.Success(null))})}run_run(e){return this.command.run()}}me.__name__=!0;class ge extends U{constructor(e,t){super(e,t,!0)}process(e){let t=this,n=e[0];if(n==null){let s,r=this.processArgs(e);switch(r._hx_index){case 0:s=r.data;break;case 1:return new C(new F(o.Failure(r.failure)))}return I.next(this.promptRequired(),function(a){return t.run_run(s)})}else switch(n){case"copy":return this.run_copy(e.slice(1));case"libpath":return this.run_libpath(e.slice(1));default:let s,r=this.processArgs(e);switch(r._hx_index){case 0:s=r.data;break;case 1:return new C(new F(o.Failure(r.failure)))}return I.next(this.promptRequired(),function(a){return t.run_run(s)})}}processFlag(e,t){switch(e[t]){case"--help":this.command.help=!0;break;case"--version":this.command.version=!0;break;default:return-1}return t-t}processAlias(e,t){let n=e[t],s=1,r=n.length;for(;s<r;){let a=s++,i=w.cca(n,a);if(i==null)throw x.thrown("Invalid alias '-"+n.charAt(a)+"'");switch(i){case 104:this.command.help=!0;break;case 118:this.command.version=!0;break;default:throw x.thrown("Invalid alias '-"+n.charAt(a)+"'")}}return t-t}promptRequired(){return N.async(function(e){e(o.Success(null))})}run_copy(e){return new de(this.command.copy,new K(5)).process(e)}run_libpath(e){return new me(this.command.libpath,new K(5)).process(e)}run_run(e){return this.command.run()}}ge.__name__=!0;class J{constructor(e){this.re=new ie("^\\s*\\*?\\s{0,2}(.*)$",""),this.root=e}format(e){let t="";t+=`
`;let n=this.formatDoc(e.doc);n!=null&&(t+=v.string(""+n+`

`));let s=e.commands,r=[],a=0;for(;a<s.length;){let u=s[a];++a,u.isDefault||r.push(u)}this.root!=null&&(t+=v.string("  Usage: "+this.root+`
`));let i=X.find(e.commands,function(u){return u.isDefault});if(i!=null){let u=this.formatDoc(i.doc);u!=null&&(t+=v.string(this.indent(u,4)+`

`))}let _=this;if(r.length>0){let u=X.fold(r,function(m,g){let h=0,p=m.names;for(;h<p.length;){let E=p[h];++h,E.length>g&&(g=E.length)}return g},0);this.root!=null&&(t+=v.string("  Usage: "+this.root+` <subcommand>
`)),t+=v.string(`    Subcommands:
`);let S=function(m,g){g==null&&(g="(doc missing)"),t+=v.string(_.indent(A.lpad(m," ",u)+" : "+A.trim(_.indent(g,u+3)),6)+`
`)},d=0;for(;d<r.length;){let m=r[d];++d;let g=m.names[0];if(S(g,this.formatDoc(m.doc)),m.names.length>1){let h=1,p=m.names.length;for(;h<p;)S(m.names[h++],"Alias of "+g)}}}if(e.flags.length>0){let u=function(h){let p=h.names.join(", ");if(h.aliases.length>0){let E=h.aliases,ee=new Array(E.length),Re=0,De=E.length;for(;Re<De;){let je=Re++;ee[je]="-"+E[je]}p+=", "+ee.join(", ")}return p},S=X.fold(e.flags,function(h,p){let E=u(h);return E.length>p&&(p=E.length),p},0),d=function(h,p){p==null&&(p=""),t+=v.string(_.indent(A.lpad(h," ",S)+" : "+A.trim(_.indent(p,S+3)),6)+`
`)};t=(t+=`
`)+v.string(`  Flags:
`);let m=0,g=e.flags;for(;m<g.length;){let h=g[m];++m,d(u(h),this.formatDoc(h.doc))}}return t}indent(e,t){let n=e.split(`
`),s=new Array(n.length),r=0,a=n.length;for(;r<a;){let i=r++;s[i]=A.lpad(""," ",t)+n[i]}return s.join(`
`)}formatDoc(e){if(e==null)return null;let t=e.split(`
`),n=A.trim,s=new Array(t.length),r=0,a=t.length;for(;r<a;){let d=r++;s[d]=n(t[d])}let i=s;for(;i[0]=="";)i=i.slice(1);for(;i[i.length-1]=="";)i.pop();let _=new Array(i.length),u=0,S=i.length;for(;u<S;){let d=u++,m=i[d];_[d]=this.re.match(m)?this.re.matched(1):m}return _.join(`
`)}}J.__name__=!0;class pe{constructor(e,t){this.source=e,this.sink=t}}pe.__name__=!0;class we extends pe{constructor(){let e=process.stdin,t=null;t={},super(G.wrap("stdin",e,t.chunkSize,t.onEnd),Z.wrap("stdout",process.stdout))}}we.__name__=!0;class K{constructor(e,t){this.trials=e,this.proxy=t??new we}}K.__name__=!0;class f{static invoke(e,t){f.depth<500?(f.depth++,e(t),f.depth--):f.defer(function(){e(t)})}static defer(e){process.nextTick(e)}}class xe{constructor(){}cancel(){let e=this.link;e?.cancel()}}xe.__name__=!0;class ne{constructor(e,t){this.dissolved=!1,this.a=e,this.b=t}cancel(){if(!this.dissolved){this.dissolved=!0;let e=this.a;e?.cancel();let t=this.b;t?.cancel(),this.a=null,this.b=null}}}ne.__name__=!0;class ye{constructor(e,t){if(e==null)throw x.thrown("callback expected but null received");this.cb=e,this.list=t}cancel(){if(this.list!=null){let e=this.list;this.cb=null,this.list=null,--e.used<=e.cells.length>>1&&e.compact()}}}ye.__name__=!0;class q{constructor(e){q._hx_skip_constructor||this._hx_constructor(e)}_hx_constructor(e){this.disposeHandlers=[],this.f=e}dispose(){let e=this.disposeHandlers;if(e!=null){this.disposeHandlers=null;let t=this.f;this.f=q.noop,t();let n=0;for(;n<e.length;)e[n++]()}}static noop(){}}q.__name__=!0;class ke extends q{constructor(e){q._hx_skip_constructor=!0,super(),q._hx_skip_constructor=!1,this._hx_constructor(e)}_hx_constructor(e){e==null&&(e=!1),this.onfill=function(){},this.ondrain=function(){},this.busy=!1,this.queue=[],this.used=0;let t=this;super._hx_constructor(function(){t.busy||t.destroy()}),this.destructive=e,this.cells=[]}destroy(){let e=0,t=this.cells;for(;e<t.length;){let n=t[e];++e,n.cb=null,n.list=null}if(this.queue=null,this.cells=null,this.used>0){this.used=0;let n=this.ondrain;f.depth<500?(f.depth++,n(),f.depth--):f.defer(n)}}invoke(e){let t=this;if(f.depth<500){if(f.depth++,t.disposeHandlers!=null)if(t.busy){if(t.destructive!=!0){let n=Ee(t,t.invoke),s=e,r=function(){n(s)};t.queue.push(r)}}else{t.busy=!0,t.destructive&&t.dispose();let n=t.cells.length,s=0;for(;s<n;){let r=t.cells[s++];r.list!=null&&r.cb(e)}t.busy=!1,t.disposeHandlers==null?t.destroy():(t.used<t.cells.length&&t.compact(),t.queue.length>0&&t.queue.shift()())}f.depth--}else f.defer(function(){if(t.disposeHandlers!=null)if(t.busy){if(t.destructive!=!0){let n=Ee(t,t.invoke),s=e,r=function(){n(s)};t.queue.push(r)}}else{t.busy=!0,t.destructive&&t.dispose();let n=t.cells.length,s=0;for(;s<n;){let r=t.cells[s++];r.list!=null&&r.cb(e)}t.busy=!1,t.disposeHandlers==null?t.destroy():(t.used<t.cells.length&&t.compact(),t.queue.length>0&&t.queue.shift()())}})}compact(){if(!this.busy)if(this.used==0){this.resize(0);let e=this.ondrain;f.depth<500?(f.depth++,e(),f.depth--):f.defer(e)}else{let e=0,t=0,n=this.cells.length;for(;t<n;){let s=t++,r=this.cells[s];if(r.cb!=null&&(e!=s&&(this.cells[e]=r),++e==this.used))break}this.resize(this.used)}}resize(e){this.cells.length=e}}ke.__name__=!0;class j{constructor(e,t,n){e==null&&(e=500),this.isTinkError=!0,this.code=e,this.message=t,this.pos=n,this.exceptionStack=[],this.callStack=[]}static withData(e,t,n,s){return j.typed(e,t,n,s)}static typed(e,t,n,s){let r=new j(e,t,s);return r.data=n,r}static asError(e){return e!=null&&e.isTinkError?e:null}static catchExceptions(e,t,n){try{return o.Success(e())}catch(s){let r=j.asError(x.caught(s).unwrap());return o.Failure(r??(t==null?j.withData(null,"Unexpected Error",r,n):t(r)))}}}j.__name__=!0;class be{constructor(){}getStatus(){return k.NeverEver}handle(e){return null}eager(){}}be.__name__=!0;class F{constructor(e){this.value=e}isComputed(){return!0}get(){return this.value}compute(){}}F.__name__=!0;class C{constructor(e){this.value=e}getStatus(){return k.Ready(this.value)}handle(e){return f.invoke(e,Q.get(this.value)),null}eager(){this.value.isComputed()||Q.get(this.value)}}C.__name__=!0;class N{static first(e,t){let n=e;switch(n.getStatus()._hx_index){case 3:switch(t.getStatus()._hx_index){case 3:return n;case 4:return n;default:return n}break;case 4:return t;default:switch(t.getStatus()._hx_index){case 3:return t;case 4:return n;default:return new T(function(s){return new ne(e.handle(s),t.handle(s))})}}}static flatMap(e,t,n){let s=e.getStatus();switch(s._hx_index){case 3:let r=s.result;return new T(function(a){return t(Q.get(r)).handle(function(i){a(i)})});case 4:return N.NEVER;default:return new T(function(a){let i=new xe;return new ne(e.handle(function(_){let u=t(_).handle(a);i.link=u}),i)})}}static async(e,t){t==null&&(t=!1);let n=N.irreversible(e);return t||n.eager(),n}static irreversible(e){return new T(function(t){return e(t),null})}}var k=P["tink.core.FutureStatus"]={__ename__:!0,__constructs__:null,Suspended:{_hx_name:"Suspended",_hx_index:0,__enum__:"tink.core.FutureStatus",toString:b},Awaited:{_hx_name:"Awaited",_hx_index:1,__enum__:"tink.core.FutureStatus",toString:b},EagerlyAwaited:{_hx_name:"EagerlyAwaited",_hx_index:2,__enum__:"tink.core.FutureStatus",toString:b},Ready:(c=function(l){return{_hx_index:3,result:l,__enum__:"tink.core.FutureStatus",toString:b}},c._hx_name="Ready",c.__params__=["result"],c),NeverEver:{_hx_name:"NeverEver",_hx_index:4,__enum__:"tink.core.FutureStatus",toString:b}};k.__constructs__=[k.Suspended,k.Awaited,k.EagerlyAwaited,k.Ready,k.NeverEver];class T{constructor(e){this.status=k.Suspended,this.wakeup=e,this.callbacks=new ke(!0);let t=this;this.callbacks.ondrain=function(){if(t.status==k.Awaited){t.status=k.Suspended;let n=t.link;n?.cancel(),t.link=null}},this.callbacks.onfill=function(){t.status==k.Suspended&&(t.status=k.Awaited,t.arm())}}getStatus(){return this.status}trigger(e){if(this.status._hx_index!=3){this.status=k.Ready(new F(e));let t=this.link;this.link=null,this.wakeup=null,this.callbacks.invoke(e),t?.cancel()}}handle(e){let t=this.status;if(t._hx_index==3)return f.invoke(e,Q.get(t.result)),null;{let n=this.callbacks;if(n.disposeHandlers==null)return null;{let s=new ye(e,n);if(n.cells.push(s),n.used++==0){let r=n.onfill;f.depth<500?(f.depth++,r(),f.depth--):f.defer(r)}return s}}}arm(){let e=this;this.link=this.wakeup(function(t){e.trigger(t)})}eager(){switch(this.status._hx_index){case 0:this.status=k.EagerlyAwaited,this.arm();break;case 1:this.status=k.EagerlyAwaited;break;default:}}}T.__name__=!0;class Q{static get(e){return e.compute(),e.get()}}var o=P["tink.core.Outcome"]={__ename__:!0,__constructs__:null,Success:(c=function(l){return{_hx_index:0,data:l,__enum__:"tink.core.Outcome",toString:b}},c._hx_name="Success",c.__params__=["data"],c),Failure:(c=function(l){return{_hx_index:1,failure:l,__enum__:"tink.core.Outcome",toString:b}},c._hx_name="Failure",c.__params__=["failure"],c)};o.__constructs__=[o.Success,o.Failure];class I{static next(e,t,n){return N.flatMap(e,function(s){switch(s._hx_index){case 0:return t(s.data);case 1:return new C(new F(o.Failure(s.failure)))}})}}class Se{}Se.__name__=!0;class ve{constructor(){}}ve.__name__=!0;class Fe extends ve{constructor(e){super(),this.upcoming=e}}Fe.__name__=!0;class Z extends Se{constructor(e){super(),this.target=e}static wrap(e,t){return new Z(new Ce(e,t))}}Z.__name__=!0;class G extends Fe{constructor(e){super(N.async(function(t){e.read().handle(function(n){let s=t,r;switch(n._hx_index){case 0:let a=n.data;r=a==null?L.End:L.Link(a,new G(e));break;case 1:r=L.Fail(n.failure);break}s(r)})},!0))}static wrap(e,t,n,s){return new G(new Ae(e,t,n,s))}}G.__name__=!0;class Ae{constructor(e,t,n,s){this.name=e,this.native=t,this.chunkSize=n;let r=N.async(function(a){t.once("end",function(){a(o.Success(null))}),t.once("error",function(i){a(o.Failure(new j(null,""+i.code+" - Failed reading from "+e+" because "+i.message,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:22,className:"tink.io.nodejs.WrappedReadable",methodName:"new"})))})});r.eager(),this.end=r,s!=null&&this.end.handle(function(){process.nextTick(s)})}read(){let e=this;return N.first(N.async(function(t){let n=null;n=function(){try{let s=e.native.read(e.chunkSize);if(s==null)e.native.once("readable",n);else{let r=typeof s=="string"?new ce(s):s;t(o.Success(new fe(r)))}}catch(s){let r=x.caught(s).unwrap();t(o.Failure(j.withData(null,"Error while reading from "+e.name,r,{fileName:"tink/io/nodejs/WrappedReadable.hx",lineNumber:48,className:"tink.io.nodejs.WrappedReadable",methodName:"read"})))}},n()}),this.end)}}Ae.__name__=!0;class Ce{constructor(e,t){this.name=e,this.native=t,this.ended=N.async(function(n){t.once("end",function(){n(o.Success(!1))}),t.once("finish",function(){n(o.Success(!1))}),t.once("close",function(){n(o.Success(!1))}),t.on("error",function(s){n(o.Failure(new j(null,""+s.code+": "+s.message,{fileName:"tink/io/nodejs/WrappedWritable.hx",lineNumber:24,className:"tink.io.nodejs.WrappedWritable",methodName:"new"})))})})}}Ce.__name__=!0;var L=P["tink.streams.Step"]={__ename__:!0,__constructs__:null,Link:(c=function(l,e){return{_hx_index:0,value:l,next:e,__enum__:"tink.streams.Step",toString:b}},c._hx_name="Link",c.__params__=["value","next"],c),Fail:(c=function(l){return{_hx_index:1,e:l,__enum__:"tink.streams.Step",toString:b}},c._hx_name="Fail",c.__params__=["e"],c),End:{_hx_name:"End",_hx_index:2,__enum__:"tink.streams.Step",toString:b}};L.__constructs__=[L.Link,L.Fail,L.End];function Ne(l){return l instanceof Array?new ue(l):l.iterator()}function Ee(l,e){if(e==null)return null;e.__id__==null&&(e.__id__=re.$haxeUID++);var t;return l.hx__closures__==null?l.hx__closures__={}:t=l.hx__closures__[e.__id__],t==null&&(t=e.bind(l),l.hx__closures__[e.__id__]=t),t}re.$haxeUID|=0,typeof performance<"u"&&typeof performance.now=="function"&&(w.now=performance.now.bind(performance)),String.fromCodePoint==null&&(String.fromCodePoint=function(l){return l<65536?String.fromCharCode(l):String.fromCharCode((l>>10)+55232)+String.fromCharCode((l&1023)+56320)}),String.__name__=!0,Array.__name__=!0,D.__toStr={}.toString,se.assetPath=O.assetPath=A.replace(y.join([y.directory(__filename),"../www"]),"/",ae.systemName()=="Windows"?"\\":"/"),z.copyBuf=ce.alloc(65536),f.depth=0,q._hx_skip_constructor=!1,N.NEVER=new be,I.NOISE=new C(new F(o.Success(null))),Y.main()})(typeof exports<"u"?exports:global,global);
