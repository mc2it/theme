#!/usr/bin/env node
(function ($hx_exports, $global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
class EReg {
	constructor(r,opt) {
		this.r = new RegExp(r,opt.split("u").join(""));
	}
	match(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	matched(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched");
		}
	}
}
EReg.__name__ = true;
class HxOverrides {
	static cca(s,index) {
		let x = s.charCodeAt(index);
		if(x != x) {
			return undefined;
		}
		return x;
	}
	static substr(s,pos,len) {
		if(len == null) {
			len = s.length;
		} else if(len < 0) {
			if(pos == 0) {
				len = s.length + len;
			} else {
				return "";
			}
		}
		return s.substr(pos,len);
	}
	static now() {
		return Date.now();
	}
}
HxOverrides.__name__ = true;
class Lambda {
	static fold(it,f,first) {
		let x = $getIterator(it);
		while(x.hasNext()) first = f(x.next(),first);
		return first;
	}
	static find(it,f) {
		let v = $getIterator(it);
		while(v.hasNext()) {
			let v1 = v.next();
			if(f(v1)) {
				return v1;
			}
		}
		return null;
	}
}
Lambda.__name__ = true;
Math.__name__ = true;
class Reflect {
	static field(o,field) {
		try {
			return o[field];
		} catch( _g ) {
			return null;
		}
	}
}
Reflect.__name__ = true;
class Std {
	static string(s) {
		return js_Boot.__string_rec(s,"");
	}
}
Std.__name__ = true;
class StringTools {
	static isSpace(s,pos) {
		let c = HxOverrides.cca(s,pos);
		if(!(c > 8 && c < 14)) {
			return c == 32;
		} else {
			return true;
		}
	}
	static ltrim(s) {
		let l = s.length;
		let r = 0;
		while(r < l && StringTools.isSpace(s,r)) ++r;
		if(r > 0) {
			return HxOverrides.substr(s,r,l - r);
		} else {
			return s;
		}
	}
	static rtrim(s) {
		let l = s.length;
		let r = 0;
		while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
		if(r > 0) {
			return HxOverrides.substr(s,0,l - r);
		} else {
			return s;
		}
	}
	static trim(s) {
		return StringTools.ltrim(StringTools.rtrim(s));
	}
	static lpad(s,c,l) {
		if(c.length <= 0) {
			return s;
		}
		let buf_b = "";
		l -= s.length;
		while(buf_b.length < l) buf_b += c == null ? "null" : "" + c;
		buf_b += s == null ? "null" : "" + s;
		return buf_b;
	}
	static replace(s,sub,by) {
		return s.split(sub).join(by);
	}
}
StringTools.__name__ = true;
class Sys {
	static systemName() {
		let _g = process.platform;
		switch(_g) {
		case "darwin":
			return "Mac";
		case "freebsd":
			return "BSD";
		case "linux":
			return "Linux";
		case "win32":
			return "Windows";
		default:
			return _g;
		}
	}
}
Sys.__name__ = true;
var haxe_StackItem = $hxEnums["haxe.StackItem"] = { __ename__:true,__constructs__:null
	,CFunction: {_hx_name:"CFunction",_hx_index:0,__enum__:"haxe.StackItem",toString:$estr}
	,Module: ($_=function(m) { return {_hx_index:1,m:m,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Module",$_.__params__ = ["m"],$_)
	,FilePos: ($_=function(s,file,line,column) { return {_hx_index:2,s:s,file:file,line:line,column:column,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="FilePos",$_.__params__ = ["s","file","line","column"],$_)
	,Method: ($_=function(classname,method) { return {_hx_index:3,classname:classname,method:method,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Method",$_.__params__ = ["classname","method"],$_)
	,LocalFunction: ($_=function(v) { return {_hx_index:4,v:v,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="LocalFunction",$_.__params__ = ["v"],$_)
};
haxe_StackItem.__constructs__ = [haxe_StackItem.CFunction,haxe_StackItem.Module,haxe_StackItem.FilePos,haxe_StackItem.Method,haxe_StackItem.LocalFunction];
class haxe_Exception extends Error {
	constructor(message,previous,native) {
		super(message);
		this.message = message;
		this.__previousException = previous;
		this.__nativeException = native != null ? native : this;
	}
	unwrap() {
		return this.__nativeException;
	}
	get_native() {
		return this.__nativeException;
	}
	static caught(value) {
		if(((value) instanceof haxe_Exception)) {
			return value;
		} else if(((value) instanceof Error)) {
			return new haxe_Exception(value.message,null,value);
		} else {
			return new haxe_ValueException(value,null,value);
		}
	}
	static thrown(value) {
		if(((value) instanceof haxe_Exception)) {
			return value.get_native();
		} else if(((value) instanceof Error)) {
			return value;
		} else {
			let e = new haxe_ValueException(value);
			return e;
		}
	}
}
haxe_Exception.__name__ = true;
class haxe_ValueException extends haxe_Exception {
	constructor(value,previous,native) {
		super(String(value),previous,native);
		this.value = value;
	}
	unwrap() {
		return this.value;
	}
}
haxe_ValueException.__name__ = true;
class haxe_io_Path {
	constructor(path) {
		switch(path) {
		case ".":case "..":
			this.dir = path;
			this.file = "";
			return;
		}
		let c1 = path.lastIndexOf("/");
		let c2 = path.lastIndexOf("\\");
		if(c1 < c2) {
			this.dir = HxOverrides.substr(path,0,c2);
			path = HxOverrides.substr(path,c2 + 1,null);
			this.backslash = true;
		} else if(c2 < c1) {
			this.dir = HxOverrides.substr(path,0,c1);
			path = HxOverrides.substr(path,c1 + 1,null);
		} else {
			this.dir = null;
		}
		let cp = path.lastIndexOf(".");
		if(cp != -1) {
			this.ext = HxOverrides.substr(path,cp + 1,null);
			this.file = HxOverrides.substr(path,0,cp);
		} else {
			this.ext = null;
			this.file = path;
		}
	}
	static directory(path) {
		let s = new haxe_io_Path(path);
		if(s.dir == null) {
			return "";
		}
		return s.dir;
	}
	static join(paths) {
		let _g = [];
		let _g1 = 0;
		while(_g1 < paths.length) {
			let v = paths[_g1];
			++_g1;
			if(v != null && v != "") {
				_g.push(v);
			}
		}
		if(_g.length == 0) {
			return "";
		}
		let path = _g[0];
		let _g2 = 1;
		let _g3 = _g.length;
		while(_g2 < _g3) {
			path = haxe_io_Path.addTrailingSlash(path);
			path += _g[_g2++];
		}
		return haxe_io_Path.normalize(path);
	}
	static normalize(path) {
		let slash = "/";
		path = path.split("\\").join(slash);
		if(path == slash) {
			return slash;
		}
		let target = [];
		let _g = 0;
		let _g1 = path.split(slash);
		while(_g < _g1.length) {
			let token = _g1[_g];
			++_g;
			if(token == ".." && target.length > 0 && target[target.length - 1] != "..") {
				target.pop();
			} else if(token == "") {
				if(target.length > 0 || HxOverrides.cca(path,0) == 47) {
					target.push(token);
				}
			} else if(token != ".") {
				target.push(token);
			}
		}
		let acc_b = "";
		let colon = false;
		let slashes = false;
		let _g2_offset = 0;
		let _g2_s = target.join(slash);
		while(_g2_offset < _g2_s.length) {
			let s = _g2_s;
			let index = _g2_offset++;
			let c = s.charCodeAt(index);
			if(c >= 55296 && c <= 56319) {
				c = c - 55232 << 10 | s.charCodeAt(index + 1) & 1023;
			}
			let c1 = c;
			if(c1 >= 65536) {
				++_g2_offset;
			}
			let c2 = c1;
			switch(c2) {
			case 47:
				if(!colon) {
					slashes = true;
				} else {
					let i = c2;
					colon = false;
					if(slashes) {
						acc_b += "/";
						slashes = false;
					}
					acc_b += String.fromCodePoint(i);
				}
				break;
			case 58:
				acc_b += ":";
				colon = true;
				break;
			default:
				let i = c2;
				colon = false;
				if(slashes) {
					acc_b += "/";
					slashes = false;
				}
				acc_b += String.fromCodePoint(i);
			}
		}
		return acc_b;
	}
	static addTrailingSlash(path) {
		if(path.length == 0) {
			return "/";
		}
		let c1 = path.lastIndexOf("/");
		let c2 = path.lastIndexOf("\\");
		if(c1 < c2) {
			if(c2 != path.length - 1) {
				return path + "\\";
			} else {
				return path;
			}
		} else if(c1 != path.length - 1) {
			return path + "/";
		} else {
			return path;
		}
	}
	static isAbsolute(path) {
		if(path.startsWith("/")) {
			return true;
		}
		if(path.charAt(1) == ":") {
			return true;
		}
		if(path.startsWith("\\\\")) {
			return true;
		}
		return false;
	}
}
haxe_io_Path.__name__ = true;
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
haxe_iterators_ArrayIterator.__name__ = true;
class js_Boot {
	static __string_rec(o,s) {
		if(o == null) {
			return "null";
		}
		if(s.length >= 5) {
			return "<...>";
		}
		let t = typeof(o);
		if(t == "function" && (o.__name__ || o.__ename__)) {
			t = "object";
		}
		switch(t) {
		case "function":
			return "<function>";
		case "object":
			if(o.__enum__) {
				let e = $hxEnums[o.__enum__];
				let con = e.__constructs__[o._hx_index];
				let n = con._hx_name;
				if(con.__params__) {
					s = s + "\t";
					return n + "(" + ((function($this) {
						var $r;
						let _g = [];
						{
							let _g1 = 0;
							let _g2 = con.__params__;
							while(true) {
								if(!(_g1 < _g2.length)) {
									break;
								}
								let p = _g2[_g1];
								_g1 = _g1 + 1;
								_g.push(js_Boot.__string_rec(o[p],s));
							}
						}
						$r = _g;
						return $r;
					}(this))).join(",") + ")";
				} else {
					return n;
				}
			}
			if(((o) instanceof Array)) {
				let str = "[";
				s += "\t";
				let _g = 0;
				let _g1 = o.length;
				while(_g < _g1) {
					let i = _g++;
					str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
				}
				str += "]";
				return str;
			}
			let tostr;
			try {
				tostr = o.toString;
			} catch( _g ) {
				return "???";
			}
			if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
				let s2 = o.toString();
				if(s2 != "[object Object]") {
					return s2;
				}
			}
			let str = "{\n";
			s += "\t";
			let hasp = o.hasOwnProperty != null;
			let k = null;
			for( k in o ) {
			if(hasp && !o.hasOwnProperty(k)) {
				continue;
			}
			if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
				continue;
			}
			if(str.length != 2) {
				str += ", \n";
			}
			str += s + k + " : " + js_Boot.__string_rec(o[k],s);
			}
			s = s.substring(1);
			str += "\n" + s + "}";
			return str;
		case "string":
			return o;
		default:
			return String(o);
		}
	}
}
js_Boot.__name__ = true;
var js_node_Fs = require("fs");
var js_node_Path = require("path");
var js_node_buffer_Buffer = require("buffer").Buffer;
class mc2it_$theme_Theme {
	static copyAssets(output,options) {
		if(options == null) {
			options = { };
		}
		let sources = ["css","fonts","img"];
		let _g = [];
		let _g1 = 0;
		while(_g1 < sources.length) {
			let v = sources[_g1];
			++_g1;
			if(Reflect.field(options,v)) {
				_g.push(v);
			}
		}
		let input = haxe_io_Path.join([haxe_io_Path.directory(__filename),"../www"]);
		let _g2 = 0;
		let _g3 = _g.length > 0 ? _g : sources;
		while(_g2 < _g3.length) {
			let directory = _g3[_g2];
			++_g2;
			mc2it_$theme_Theme.copyDirectory(haxe_io_Path.join([input,directory]),_g.length == 1 ? output : haxe_io_Path.join([output,directory]));
		}
	}
	static copyDirectory(source,destination) {
		let _g = 0;
		let _g1 = js_node_Fs.readdirSync(source);
		while(_g < _g1.length) {
			let entry = _g1[_g];
			++_g;
			let input = haxe_io_Path.join([source,entry]);
			let output = haxe_io_Path.join([destination,entry]);
			if(sys_FileSystem.isDirectory(input)) {
				mc2it_$theme_Theme.copyDirectory(input,output);
			} else {
				sys_FileSystem.createDirectory(haxe_io_Path.directory(output));
				sys_io_File.copy(input,output);
			}
		}
	}
}
$hx_exports["copyAssets"] = mc2it_$theme_Theme.copyAssets;
mc2it_$theme_Theme.__name__ = true;
class mc2it_$theme_Version {
	static get_packageVersion() {
		if(mc2it_$theme_Version.packageVersion == null) {
			mc2it_$theme_Version.packageVersion = "4.0.0";
		}
		return mc2it_$theme_Version.packageVersion;
	}
}
mc2it_$theme_Version.__name__ = true;
class mc2it_$theme_cli_CopyCommand {
	constructor() {
		this.img = false;
		this.help = false;
		this.fonts = false;
		this.css = false;
	}
	run(rest) {
		if(this.help) {
			let v = new tink_cli_doc_DefaultFormatter().format(tink_cli_Doc0.get());
			process.stdout.write(Std.string(v));
			process.stdout.write("\n");
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
		}
		let haxelibRun = process.env["HAXELIB_RUN"] == "1";
		if(rest.length < 1 || haxelibRun && rest.length < 2) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(new tink_core_TypedError(400,"You must provide the path of the output directory.",{ fileName : "src/mc2it_theme/cli/CopyCommand.hx", lineNumber : 36, className : "mc2it_theme.cli.CopyCommand", methodName : "run"}))));
		}
		mc2it_$theme_Theme.copyAssets(haxe_io_Path.isAbsolute(rest[0]) ? rest[0] : haxe_io_Path.join([haxelibRun ? rest[rest.length - 1] : process.cwd(),rest[0]]),{ css : this.css, fonts : this.fonts, img : this.img});
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
	}
}
mc2it_$theme_cli_CopyCommand.__name__ = true;
class mc2it_$theme_cli_LibpathCommand {
	constructor() {
		this.help = false;
	}
	run() {
		let v = this.help ? new tink_cli_doc_DefaultFormatter().format(tink_cli_Doc1.get()) : mc2it_$theme_Theme.assetPath;
		process.stdout.write(Std.string(v));
		process.stdout.write("\n");
		return tink_core_Promise.NOISE;
	}
}
mc2it_$theme_cli_LibpathCommand.__name__ = true;
class mc2it_$theme_cli_Program {
	constructor() {
		this.version = false;
		this.libpath = new mc2it_$theme_cli_LibpathCommand();
		this.help = false;
		this.copy = new mc2it_$theme_cli_CopyCommand();
	}
	run() {
		let v = this.version ? mc2it_$theme_Version.get_packageVersion() : new tink_cli_doc_DefaultFormatter().format(tink_cli_Doc2.get());
		process.stdout.write(Std.string(v));
		process.stdout.write("\n");
		return tink_core_Promise.NOISE;
	}
	static main() {
		new tink_cli_Router2(new mc2it_$theme_cli_Program(),new tink_cli_prompt_RetryPrompt(5)).process(process.argv.slice(2)).handle(tink_Cli.exit);
	}
}
mc2it_$theme_cli_Program.__name__ = true;
class sys_FileSystem {
	static isDirectory(path) {
		try {
			return js_node_Fs.statSync(path).isDirectory();
		} catch( _g ) {
			return false;
		}
	}
	static createDirectory(path) {
		try {
			js_node_Fs.mkdirSync(path);
		} catch( _g ) {
			let _g1 = haxe_Exception.caught(_g).unwrap();
			if(_g1.code == "ENOENT") {
				sys_FileSystem.createDirectory(js_node_Path.dirname(path));
				js_node_Fs.mkdirSync(path);
			} else {
				let stat;
				try {
					stat = js_node_Fs.statSync(path);
				} catch( _g ) {
					throw _g1;
				}
				if(!stat.isDirectory()) {
					throw _g1;
				}
			}
		}
	}
}
sys_FileSystem.__name__ = true;
class sys_io_File {
	static copy(srcPath,dstPath) {
		let src = js_node_Fs.openSync(srcPath,"r");
		let dst = js_node_Fs.openSync(dstPath,"w",js_node_Fs.fstatSync(src).mode);
		let bytesRead;
		let pos = 0;
		while(true) {
			bytesRead = js_node_Fs.readSync(src,sys_io_File.copyBuf,0,65536,pos);
			if(!(bytesRead > 0)) {
				break;
			}
			js_node_Fs.writeSync(dst,sys_io_File.copyBuf,0,bytesRead);
			pos += bytesRead;
		}
		js_node_Fs.closeSync(src);
		js_node_Fs.closeSync(dst);
	}
}
sys_io_File.__name__ = true;
class tink_Cli {
	static exit(result) {
		switch(result._hx_index) {
		case 0:
			process.exit(0);
			break;
		case 1:
			let _g = result.failure;
			let message = _g.message;
			if(_g.data != null) {
				message += ", " + (_g.data == null ? "null" : Std.string(_g.data));
			}
			process.stdout.write(Std.string(message));
			process.stdout.write("\n");
			let code = _g.code;
			process.exit(code);
			break;
		}
	}
}
tink_Cli.__name__ = true;
class tink_chunk_nodejs_BufferChunk {
	constructor(buffer) {
		this.buffer = buffer;
	}
}
tink_chunk_nodejs_BufferChunk.__name__ = true;
class tink_cli_Doc0 {
	static get() {
		if(tink_cli_Doc0.doc == null) {
			tink_cli_Doc0.doc = { doc : " Copy the library assets to a given directory. ", commands : [{ isDefault : true, isSub : false, names : [], doc : " <directory> : The path to the output directory. "}], flags : [{ names : ["--css"], aliases : ["c"], doc : " Copy only the CSS files. "},{ names : ["--fonts"], aliases : ["f"], doc : " Copy only the font files. "},{ names : ["--help"], aliases : ["h"], doc : " Display this help. "},{ names : ["--img"], aliases : ["i"], doc : " Copy only the image files. "}]};
		}
		return tink_cli_Doc0.doc;
	}
}
tink_cli_Doc0.__name__ = true;
class tink_cli_Doc1 {
	static get() {
		if(tink_cli_Doc1.doc == null) {
			tink_cli_Doc1.doc = { doc : " Print the path to the library assets. ", commands : [{ isDefault : true, isSub : false, names : [], doc : null}], flags : [{ names : ["--help"], aliases : ["h"], doc : " Display this help. "}]};
		}
		return tink_cli_Doc1.doc;
	}
}
tink_cli_Doc1.__name__ = true;
class tink_cli_Doc2 {
	static get() {
		if(tink_cli_Doc2.doc == null) {
			tink_cli_Doc2.doc = { doc : " Command line interface of MC2IT Theme. ", commands : [{ isDefault : false, isSub : true, names : ["copy"], doc : " Copy the library assets to a given directory. "},{ isDefault : false, isSub : true, names : ["libpath"], doc : " Print the path to the library assets. "},{ isDefault : true, isSub : false, names : [], doc : null}], flags : [{ names : ["--help"], aliases : ["h"], doc : " Display this help. "},{ names : ["--version"], aliases : ["v"], doc : " Output the version number. "}]};
		}
		return tink_cli_Doc2.doc;
	}
}
tink_cli_Doc2.__name__ = true;
class tink_cli_Router {
	constructor(command,prompt,hasFlags) {
		this.command = command;
		this.prompt = prompt;
		this.hasFlags = hasFlags;
	}
	processArgs(args) {
		let _gthis = this;
		if(!this.hasFlags) {
			return tink_core_Outcome.Success(args);
		} else {
			return tink_core_TypedError.catchExceptions(function() {
				let args1 = tink_cli_Router.expandAssignments(args);
				let rest = [];
				let i = 0;
				let flagsEnded = false;
				while(i < args1.length) {
					let arg = args1[i];
					if(arg == "--") {
						flagsEnded = true;
						++i;
					} else if(!flagsEnded && HxOverrides.cca(arg,0) == 45) {
						let _g = _gthis.processFlag(args1,i);
						if(_g == -1) {
							if(HxOverrides.cca(arg,1) != 45) {
								let _g = _gthis.processAlias(args1,i);
								if(_g == -1) {
									throw haxe_Exception.thrown("Unrecognized alias \"" + arg + "\"");
								} else {
									i += _g + 1;
								}
							} else {
								throw haxe_Exception.thrown("Unrecognized flag \"" + arg + "\"");
							}
						} else {
							i += _g + 1;
						}
					} else {
						rest.push(arg);
						++i;
					}
				}
				return rest;
			},null,{ fileName : "tink/cli/Router.hx", lineNumber : 25, className : "tink.cli.Router", methodName : "processArgs"});
		}
	}
	processFlag(args,index) {
		return -1;
	}
	processAlias(args,index) {
		return -1;
	}
	static expandAssignments(args) {
		let ret = [];
		let flags = true;
		let _g = 0;
		while(_g < args.length) {
			let arg = args[_g];
			++_g;
			if(arg == "--") {
				flags = false;
			}
			if(!flags) {
				ret.push(arg);
			} else {
				let _g = HxOverrides.cca(arg,0);
				let _g1 = HxOverrides.cca(arg,1);
				let _g2 = arg.indexOf("=");
				if(_g == null) {
					ret.push(arg);
				} else if(_g == 45) {
					if(_g1 == null) {
						ret.push(arg);
					} else if(_g1 == 45) {
						if(_g2 != -1) {
							ret.push(HxOverrides.substr(arg,0,_g2));
							ret.push(HxOverrides.substr(arg,_g2 + 1,null));
						} else {
							ret.push(arg);
						}
					} else {
						ret.push(arg);
					}
				} else {
					ret.push(arg);
				}
			}
		}
		return ret;
	}
}
tink_cli_Router.__name__ = true;
class tink_cli_Router0 extends tink_cli_Router {
	constructor(command,prompt) {
		super(command,prompt,true);
	}
	process(args) {
		let _gthis = this;
		if(args[0] == null) {
			let args1;
			let _g = this.processArgs(args);
			switch(_g._hx_index) {
			case 0:
				args1 = _g.data;
				break;
			case 1:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(_g.failure)));
			}
			return tink_core_Promise.next(this.promptRequired(),function(_) {
				return _gthis.run_run(args1);
			});
		} else {
			let args1;
			let _g = this.processArgs(args);
			switch(_g._hx_index) {
			case 0:
				args1 = _g.data;
				break;
			case 1:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(_g.failure)));
			}
			return tink_core_Promise.next(this.promptRequired(),function(_) {
				return _gthis.run_run(args1);
			});
		}
	}
	processFlag(args,index) {
		switch(args[index]) {
		case "--css":
			this.command.css = true;
			break;
		case "--fonts":
			this.command.fonts = true;
			break;
		case "--help":
			this.command.help = true;
			break;
		case "--img":
			this.command.img = true;
			break;
		default:
			return -1;
		}
		return index - index;
	}
	processAlias(args,index) {
		let str = args[index];
		let _g = 1;
		let _g1 = str.length;
		while(_g < _g1) {
			let i = _g++;
			let _g1 = HxOverrides.cca(str,i);
			if(_g1 == null) {
				throw haxe_Exception.thrown("Invalid alias '-" + str.charAt(i) + "'");
			} else {
				switch(_g1) {
				case 99:
					this.command.css = true;
					break;
				case 102:
					this.command.fonts = true;
					break;
				case 104:
					this.command.help = true;
					break;
				case 105:
					this.command.img = true;
					break;
				default:
					throw haxe_Exception.thrown("Invalid alias '-" + str.charAt(i) + "'");
				}
			}
		}
		return index - index;
	}
	promptRequired() {
		return tink_core_Future.async(function(cb) {
			cb(tink_core_Outcome.Success(null));
		});
	}
	run_run(args) {
		if(args.length < 0) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(new tink_core_TypedError(null,"Insufficient arguments. Expected: " + 0 + ", Got: " + args.length,{ fileName : "src/mc2it_theme/cli/CopyCommand.hx", lineNumber : 27, className : "tink.cli.Router0", methodName : "run_run"}))));
		}
		return this.command.run(args.slice(0,args.length));
	}
}
tink_cli_Router0.__name__ = true;
class tink_cli_Router1 extends tink_cli_Router {
	constructor(command,prompt) {
		super(command,prompt,true);
	}
	process(args) {
		let _gthis = this;
		if(args[0] == null) {
			let args1;
			let _g = this.processArgs(args);
			switch(_g._hx_index) {
			case 0:
				args1 = _g.data;
				break;
			case 1:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(_g.failure)));
			}
			return tink_core_Promise.next(this.promptRequired(),function(_) {
				return _gthis.run_run(args1);
			});
		} else {
			let args1;
			let _g = this.processArgs(args);
			switch(_g._hx_index) {
			case 0:
				args1 = _g.data;
				break;
			case 1:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(_g.failure)));
			}
			return tink_core_Promise.next(this.promptRequired(),function(_) {
				return _gthis.run_run(args1);
			});
		}
	}
	processFlag(args,index) {
		if(args[index] == "--help") {
			this.command.help = true;
		} else {
			return -1;
		}
		return index - index;
	}
	processAlias(args,index) {
		let str = args[index];
		let _g = 1;
		let _g1 = str.length;
		while(_g < _g1) {
			let i = _g++;
			let _g1 = HxOverrides.cca(str,i);
			if(_g1 == null) {
				throw haxe_Exception.thrown("Invalid alias '-" + str.charAt(i) + "'");
			} else if(_g1 == 104) {
				this.command.help = true;
			} else {
				throw haxe_Exception.thrown("Invalid alias '-" + str.charAt(i) + "'");
			}
		}
		return index - index;
	}
	promptRequired() {
		return tink_core_Future.async(function(cb) {
			cb(tink_core_Outcome.Success(null));
		});
	}
	run_run(args) {
		return this.command.run();
	}
}
tink_cli_Router1.__name__ = true;
class tink_cli_Router2 extends tink_cli_Router {
	constructor(command,prompt) {
		super(command,prompt,true);
	}
	process(args) {
		let _gthis = this;
		let _g = args[0];
		if(_g == null) {
			let args1;
			let _g = this.processArgs(args);
			switch(_g._hx_index) {
			case 0:
				args1 = _g.data;
				break;
			case 1:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(_g.failure)));
			}
			return tink_core_Promise.next(this.promptRequired(),function(_) {
				return _gthis.run_run(args1);
			});
		} else {
			switch(_g) {
			case "copy":
				return this.run_copy(args.slice(1));
			case "libpath":
				return this.run_libpath(args.slice(1));
			default:
				let args1;
				let _g1 = this.processArgs(args);
				switch(_g1._hx_index) {
				case 0:
					args1 = _g1.data;
					break;
				case 1:
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(_g1.failure)));
				}
				return tink_core_Promise.next(this.promptRequired(),function(_) {
					return _gthis.run_run(args1);
				});
			}
		}
	}
	processFlag(args,index) {
		switch(args[index]) {
		case "--help":
			this.command.help = true;
			break;
		case "--version":
			this.command.version = true;
			break;
		default:
			return -1;
		}
		return index - index;
	}
	processAlias(args,index) {
		let str = args[index];
		let _g = 1;
		let _g1 = str.length;
		while(_g < _g1) {
			let i = _g++;
			let _g1 = HxOverrides.cca(str,i);
			if(_g1 == null) {
				throw haxe_Exception.thrown("Invalid alias '-" + str.charAt(i) + "'");
			} else {
				switch(_g1) {
				case 104:
					this.command.help = true;
					break;
				case 118:
					this.command.version = true;
					break;
				default:
					throw haxe_Exception.thrown("Invalid alias '-" + str.charAt(i) + "'");
				}
			}
		}
		return index - index;
	}
	promptRequired() {
		return tink_core_Future.async(function(cb) {
			cb(tink_core_Outcome.Success(null));
		});
	}
	run_copy(args) {
		return new tink_cli_Router0(this.command.copy,new tink_cli_prompt_RetryPrompt(5)).process(args);
	}
	run_libpath(args) {
		return new tink_cli_Router1(this.command.libpath,new tink_cli_prompt_RetryPrompt(5)).process(args);
	}
	run_run(args) {
		return this.command.run();
	}
}
tink_cli_Router2.__name__ = true;
class tink_cli_doc_DefaultFormatter {
	constructor(root) {
		this.re = new EReg("^\\s*\\*?\\s{0,2}(.*)$","");
		this.root = root;
	}
	format(spec) {
		let out_b = "";
		out_b += "\n";
		let _g = this.formatDoc(spec.doc);
		if(_g != null) {
			out_b += Std.string("" + _g + "\n" + "\n");
		}
		let _this = spec.commands;
		let _g1 = [];
		let _g2 = 0;
		while(_g2 < _this.length) {
			let v = _this[_g2];
			++_g2;
			if(!v.isDefault) {
				_g1.push(v);
			}
		}
		if(this.root != null) {
			out_b += Std.string("  Usage: " + this.root + "\n");
		}
		let _g3 = Lambda.find(spec.commands,function(c) {
			return c.isDefault;
		});
		if(_g3 != null) {
			let _g = this.formatDoc(_g3.doc);
			if(_g != null) {
				out_b += Std.string(this.indent(_g,4) + "\n" + "\n");
			}
		}
		let _gthis = this;
		if(_g1.length > 0) {
			let maxCommandLength = Lambda.fold(_g1,function(command,max) {
				let _g = 0;
				let _g1 = command.names;
				while(_g < _g1.length) {
					let name = _g1[_g];
					++_g;
					if(name.length > max) {
						max = name.length;
					}
				}
				return max;
			},0);
			if(this.root != null) {
				out_b += Std.string("  Usage: " + this.root + " <subcommand>" + "\n");
			}
			out_b += Std.string("    Subcommands:" + "\n");
			let addCommand = function(name,doc) {
				if(doc == null) {
					doc = "(doc missing)";
				}
				out_b += Std.string(_gthis.indent(StringTools.lpad(name," ",maxCommandLength) + " : " + StringTools.trim(_gthis.indent(doc,maxCommandLength + 3)),6) + "\n");
			};
			let _g = 0;
			while(_g < _g1.length) {
				let command = _g1[_g];
				++_g;
				let name = command.names[0];
				addCommand(name,this.formatDoc(command.doc));
				if(command.names.length > 1) {
					let _g = 1;
					let _g1 = command.names.length;
					while(_g < _g1) addCommand(command.names[_g++],"Alias of " + name);
				}
			}
		}
		if(spec.flags.length > 0) {
			let nameOf = function(flag) {
				let variants = flag.names.join(", ");
				if(flag.aliases.length > 0) {
					let _this = flag.aliases;
					let result = new Array(_this.length);
					let _g = 0;
					let _g1 = _this.length;
					while(_g < _g1) {
						let i = _g++;
						result[i] = "-" + _this[i];
					}
					variants += ", " + result.join(", ");
				}
				return variants;
			};
			let maxFlagLength = Lambda.fold(spec.flags,function(flag,max) {
				let name = nameOf(flag);
				if(name.length > max) {
					max = name.length;
				}
				return max;
			},0);
			let addFlag = function(name,doc) {
				if(doc == null) {
					doc = "";
				}
				out_b += Std.string(_gthis.indent(StringTools.lpad(name," ",maxFlagLength) + " : " + StringTools.trim(_gthis.indent(doc,maxFlagLength + 3)),6) + "\n");
			};
			out_b = (out_b += "\n") + Std.string("  Flags:" + "\n");
			let _g = 0;
			let _g1 = spec.flags;
			while(_g < _g1.length) {
				let flag = _g1[_g];
				++_g;
				addFlag(nameOf(flag),this.formatDoc(flag.doc));
			}
		}
		return out_b;
	}
	indent(v,level) {
		let _this = v.split("\n");
		let result = new Array(_this.length);
		let _g = 0;
		let _g1 = _this.length;
		while(_g < _g1) {
			let i = _g++;
			result[i] = StringTools.lpad(""," ",level) + _this[i];
		}
		return result.join("\n");
	}
	formatDoc(doc) {
		if(doc == null) {
			return null;
		}
		let _this = doc.split("\n");
		let f = StringTools.trim;
		let result = new Array(_this.length);
		let _g = 0;
		let _g1 = _this.length;
		while(_g < _g1) {
			let i = _g++;
			result[i] = f(_this[i]);
		}
		let lines = result;
		while(lines[0] == "") lines = lines.slice(1);
		while(lines[lines.length - 1] == "") lines.pop();
		let result1 = new Array(lines.length);
		let _g2 = 0;
		let _g3 = lines.length;
		while(_g2 < _g3) {
			let i = _g2++;
			let line = lines[i];
			result1[i] = this.re.match(line) ? this.re.matched(1) : line;
		}
		return result1.join("\n");
	}
}
tink_cli_doc_DefaultFormatter.__name__ = true;
class tink_cli_prompt_IoPrompt {
	constructor(source,sink) {
		this.source = source;
		this.sink = sink;
	}
}
tink_cli_prompt_IoPrompt.__name__ = true;
class tink_cli_prompt_NodePrompt extends tink_cli_prompt_IoPrompt {
	constructor() {
		let r = process.stdin;
		let options = null;
		options = { };
		super(tink_io_nodejs_NodejsSource.wrap("stdin",r,options.chunkSize,options.onEnd),tink_io_nodejs_NodejsSink.wrap("stdout",process.stdout));
	}
}
tink_cli_prompt_NodePrompt.__name__ = true;
class tink_cli_prompt_RetryPrompt {
	constructor(trials,proxy) {
		this.trials = trials;
		this.proxy = proxy == null ? new tink_cli_prompt_NodePrompt() : proxy;
	}
}
tink_cli_prompt_RetryPrompt.__name__ = true;
class tink_core_Callback {
	static invoke(this1,data) {
		if(tink_core_Callback.depth < 500) {
			tink_core_Callback.depth++;
			this1(data);
			tink_core_Callback.depth--;
		} else {
			tink_core_Callback.defer(function() {
				this1(data);
			});
		}
	}
	static defer(f) {
		process.nextTick(f);
	}
}
class tink_core_CallbackLinkRef {
	constructor() {
	}
	cancel() {
		let this1 = this.link;
		if(this1 != null) {
			this1.cancel();
		}
	}
}
tink_core_CallbackLinkRef.__name__ = true;
class tink_core__$Callback_LinkPair {
	constructor(a,b) {
		this.dissolved = false;
		this.a = a;
		this.b = b;
	}
	cancel() {
		if(!this.dissolved) {
			this.dissolved = true;
			let this1 = this.a;
			if(this1 != null) {
				this1.cancel();
			}
			let this2 = this.b;
			if(this2 != null) {
				this2.cancel();
			}
			this.a = null;
			this.b = null;
		}
	}
}
tink_core__$Callback_LinkPair.__name__ = true;
class tink_core__$Callback_ListCell {
	constructor(cb,list) {
		if(cb == null) {
			throw haxe_Exception.thrown("callback expected but null received");
		}
		this.cb = cb;
		this.list = list;
	}
	cancel() {
		if(this.list != null) {
			let list = this.list;
			this.cb = null;
			this.list = null;
			if(--list.used <= list.cells.length >> 1) {
				list.compact();
			}
		}
	}
}
tink_core__$Callback_ListCell.__name__ = true;
class tink_core_SimpleDisposable {
	constructor(dispose) {
		if(tink_core_SimpleDisposable._hx_skip_constructor) {
			return;
		}
		this._hx_constructor(dispose);
	}
	_hx_constructor(dispose) {
		this.disposeHandlers = [];
		this.f = dispose;
	}
	dispose() {
		let _g = this.disposeHandlers;
		if(_g != null) {
			this.disposeHandlers = null;
			let f = this.f;
			this.f = tink_core_SimpleDisposable.noop;
			f();
			let _g1 = 0;
			while(_g1 < _g.length) _g[_g1++]();
		}
	}
	static noop() {
	}
}
tink_core_SimpleDisposable.__name__ = true;
class tink_core_CallbackList extends tink_core_SimpleDisposable {
	constructor(destructive) {
		tink_core_SimpleDisposable._hx_skip_constructor = true;
		super();
		tink_core_SimpleDisposable._hx_skip_constructor = false;
		this._hx_constructor(destructive);
	}
	_hx_constructor(destructive) {
		if(destructive == null) {
			destructive = false;
		}
		this.onfill = function() {
		};
		this.ondrain = function() {
		};
		this.busy = false;
		this.queue = [];
		this.used = 0;
		let _gthis = this;
		super._hx_constructor(function() {
			if(!_gthis.busy) {
				_gthis.destroy();
			}
		});
		this.destructive = destructive;
		this.cells = [];
	}
	destroy() {
		let _g = 0;
		let _g1 = this.cells;
		while(_g < _g1.length) {
			let c = _g1[_g];
			++_g;
			c.cb = null;
			c.list = null;
		}
		this.queue = null;
		this.cells = null;
		if(this.used > 0) {
			this.used = 0;
			let fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		}
	}
	invoke(data) {
		let _gthis = this;
		if(tink_core_Callback.depth < 500) {
			tink_core_Callback.depth++;
			if(_gthis.disposeHandlers != null) {
				if(_gthis.busy) {
					if(_gthis.destructive != true) {
						let _g = $bind(_gthis,_gthis.invoke);
						let data1 = data;
						let tmp = function() {
							_g(data1);
						};
						_gthis.queue.push(tmp);
					}
				} else {
					_gthis.busy = true;
					if(_gthis.destructive) {
						_gthis.dispose();
					}
					let length = _gthis.cells.length;
					let _g = 0;
					while(_g < length) {
						let _this = _gthis.cells[_g++];
						if(_this.list != null) {
							_this.cb(data);
						}
					}
					_gthis.busy = false;
					if(_gthis.disposeHandlers == null) {
						_gthis.destroy();
					} else {
						if(_gthis.used < _gthis.cells.length) {
							_gthis.compact();
						}
						if(_gthis.queue.length > 0) {
							(_gthis.queue.shift())();
						}
					}
				}
			}
			tink_core_Callback.depth--;
		} else {
			tink_core_Callback.defer(function() {
				if(_gthis.disposeHandlers != null) {
					if(_gthis.busy) {
						if(_gthis.destructive != true) {
							let _g = $bind(_gthis,_gthis.invoke);
							let data1 = data;
							let tmp = function() {
								_g(data1);
							};
							_gthis.queue.push(tmp);
						}
					} else {
						_gthis.busy = true;
						if(_gthis.destructive) {
							_gthis.dispose();
						}
						let length = _gthis.cells.length;
						let _g = 0;
						while(_g < length) {
							let _this = _gthis.cells[_g++];
							if(_this.list != null) {
								_this.cb(data);
							}
						}
						_gthis.busy = false;
						if(_gthis.disposeHandlers == null) {
							_gthis.destroy();
						} else {
							if(_gthis.used < _gthis.cells.length) {
								_gthis.compact();
							}
							if(_gthis.queue.length > 0) {
								(_gthis.queue.shift())();
							}
						}
					}
				}
			});
		}
	}
	compact() {
		if(this.busy) {
			return;
		} else if(this.used == 0) {
			this.resize(0);
			let fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		} else {
			let compacted = 0;
			let _g = 0;
			let _g1 = this.cells.length;
			while(_g < _g1) {
				let i = _g++;
				let _g1 = this.cells[i];
				if(_g1.cb != null) {
					if(compacted != i) {
						this.cells[compacted] = _g1;
					}
					if(++compacted == this.used) {
						break;
					}
				}
			}
			this.resize(this.used);
		}
	}
	resize(length) {
		this.cells.length = length;
	}
}
tink_core_CallbackList.__name__ = true;
class tink_core_TypedError {
	constructor(code,message,pos) {
		if(code == null) {
			code = 500;
		}
		this.isTinkError = true;
		this.code = code;
		this.message = message;
		this.pos = pos;
		this.exceptionStack = [];
		this.callStack = [];
	}
	static withData(code,message,data,pos) {
		return tink_core_TypedError.typed(code,message,data,pos);
	}
	static typed(code,message,data,pos) {
		let ret = new tink_core_TypedError(code,message,pos);
		ret.data = data;
		return ret;
	}
	static asError(v) {
		if(v != null && v.isTinkError) {
			return v;
		} else {
			return null;
		}
	}
	static catchExceptions(f,report,pos) {
		try {
			return tink_core_Outcome.Success(f());
		} catch( _g ) {
			let e = tink_core_TypedError.asError(haxe_Exception.caught(_g).unwrap());
			return tink_core_Outcome.Failure(e == null ? report == null ? tink_core_TypedError.withData(null,"Unexpected Error",e,pos) : report(e) : e);
		}
	}
}
tink_core_TypedError.__name__ = true;
class tink_core__$Future_NeverFuture {
	constructor() {
	}
	getStatus() {
		return tink_core_FutureStatus.NeverEver;
	}
	handle(callback) {
		return null;
	}
	eager() {
	}
}
tink_core__$Future_NeverFuture.__name__ = true;
class tink_core__$Lazy_LazyConst {
	constructor(value) {
		this.value = value;
	}
	isComputed() {
		return true;
	}
	get() {
		return this.value;
	}
	compute() {
	}
}
tink_core__$Lazy_LazyConst.__name__ = true;
class tink_core__$Future_SyncFuture {
	constructor(value) {
		this.value = value;
	}
	getStatus() {
		return tink_core_FutureStatus.Ready(this.value);
	}
	handle(cb) {
		tink_core_Callback.invoke(cb,tink_core_Lazy.get(this.value));
		return null;
	}
	eager() {
		if(!this.value.isComputed()) {
			tink_core_Lazy.get(this.value);
		}
	}
}
tink_core__$Future_SyncFuture.__name__ = true;
class tink_core_Future {
	static first(this1,that) {
		let _g = this1;
		switch(_g.getStatus()._hx_index) {
		case 3:
			switch(that.getStatus()._hx_index) {
			case 3:
				return _g;
			case 4:
				return _g;
			default:
				return _g;
			}
			break;
		case 4:
			return that;
		default:
			switch(that.getStatus()._hx_index) {
			case 3:
				return that;
			case 4:
				return _g;
			default:
				return new tink_core__$Future_SuspendableFuture(function(fire) {
					return new tink_core__$Callback_LinkPair(this1.handle(fire),that.handle(fire));
				});
			}
		}
	}
	static flatMap(this1,next,gather) {
		let _g = this1.getStatus();
		switch(_g._hx_index) {
		case 3:
			let l = _g.result;
			return new tink_core__$Future_SuspendableFuture(function(fire) {
				return next(tink_core_Lazy.get(l)).handle(function(v) {
					fire(v);
				});
			});
		case 4:
			return tink_core_Future.NEVER;
		default:
			return new tink_core__$Future_SuspendableFuture(function($yield) {
				let inner = new tink_core_CallbackLinkRef();
				return new tink_core__$Callback_LinkPair(this1.handle(function(v) {
					let outer = next(v).handle($yield);
					inner.link = outer;
				}),inner);
			});
		}
	}
	static async(init,lazy) {
		if(lazy == null) {
			lazy = false;
		}
		let ret = tink_core_Future.irreversible(init);
		if(lazy) {
			return ret;
		} else {
			ret.eager();
			return ret;
		}
	}
	static irreversible(init) {
		return new tink_core__$Future_SuspendableFuture(function($yield) {
			init($yield);
			return null;
		});
	}
}
var tink_core_FutureStatus = $hxEnums["tink.core.FutureStatus"] = { __ename__:true,__constructs__:null
	,Suspended: {_hx_name:"Suspended",_hx_index:0,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Awaited: {_hx_name:"Awaited",_hx_index:1,__enum__:"tink.core.FutureStatus",toString:$estr}
	,EagerlyAwaited: {_hx_name:"EagerlyAwaited",_hx_index:2,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Ready: ($_=function(result) { return {_hx_index:3,result:result,__enum__:"tink.core.FutureStatus",toString:$estr}; },$_._hx_name="Ready",$_.__params__ = ["result"],$_)
	,NeverEver: {_hx_name:"NeverEver",_hx_index:4,__enum__:"tink.core.FutureStatus",toString:$estr}
};
tink_core_FutureStatus.__constructs__ = [tink_core_FutureStatus.Suspended,tink_core_FutureStatus.Awaited,tink_core_FutureStatus.EagerlyAwaited,tink_core_FutureStatus.Ready,tink_core_FutureStatus.NeverEver];
class tink_core__$Future_SuspendableFuture {
	constructor(wakeup) {
		this.status = tink_core_FutureStatus.Suspended;
		this.wakeup = wakeup;
		this.callbacks = new tink_core_CallbackList(true);
		let _gthis = this;
		this.callbacks.ondrain = function() {
			if(_gthis.status == tink_core_FutureStatus.Awaited) {
				_gthis.status = tink_core_FutureStatus.Suspended;
				let this1 = _gthis.link;
				if(this1 != null) {
					this1.cancel();
				}
				_gthis.link = null;
			}
		};
		this.callbacks.onfill = function() {
			if(_gthis.status == tink_core_FutureStatus.Suspended) {
				_gthis.status = tink_core_FutureStatus.Awaited;
				_gthis.arm();
			}
		};
	}
	getStatus() {
		return this.status;
	}
	trigger(value) {
		if(this.status._hx_index != 3) {
			this.status = tink_core_FutureStatus.Ready(new tink_core__$Lazy_LazyConst(value));
			let link = this.link;
			this.link = null;
			this.wakeup = null;
			this.callbacks.invoke(value);
			if(link != null) {
				link.cancel();
			}
		}
	}
	handle(callback) {
		let _g = this.status;
		if(_g._hx_index == 3) {
			tink_core_Callback.invoke(callback,tink_core_Lazy.get(_g.result));
			return null;
		} else {
			let _this = this.callbacks;
			if(_this.disposeHandlers == null) {
				return null;
			} else {
				let node = new tink_core__$Callback_ListCell(callback,_this);
				_this.cells.push(node);
				if(_this.used++ == 0) {
					let fn = _this.onfill;
					if(tink_core_Callback.depth < 500) {
						tink_core_Callback.depth++;
						fn();
						tink_core_Callback.depth--;
					} else {
						tink_core_Callback.defer(fn);
					}
				}
				return node;
			}
		}
	}
	arm() {
		let _gthis = this;
		this.link = this.wakeup(function(x) {
			_gthis.trigger(x);
		});
	}
	eager() {
		switch(this.status._hx_index) {
		case 0:
			this.status = tink_core_FutureStatus.EagerlyAwaited;
			this.arm();
			break;
		case 1:
			this.status = tink_core_FutureStatus.EagerlyAwaited;
			break;
		default:
		}
	}
}
tink_core__$Future_SuspendableFuture.__name__ = true;
class tink_core_Lazy {
	static get(this1) {
		this1.compute();
		return this1.get();
	}
}
var tink_core_Outcome = $hxEnums["tink.core.Outcome"] = { __ename__:true,__constructs__:null
	,Success: ($_=function(data) { return {_hx_index:0,data:data,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Success",$_.__params__ = ["data"],$_)
	,Failure: ($_=function(failure) { return {_hx_index:1,failure:failure,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Failure",$_.__params__ = ["failure"],$_)
};
tink_core_Outcome.__constructs__ = [tink_core_Outcome.Success,tink_core_Outcome.Failure];
class tink_core_Promise {
	static next(this1,f,gather) {
		return tink_core_Future.flatMap(this1,function(o) {
			switch(o._hx_index) {
			case 0:
				return f(o.data);
			case 1:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(o.failure)));
			}
		});
	}
}
class tink_io_SinkBase {
}
tink_io_SinkBase.__name__ = true;
class tink_streams_StreamBase {
	constructor() {
	}
}
tink_streams_StreamBase.__name__ = true;
class tink_streams_Generator extends tink_streams_StreamBase {
	constructor(upcoming) {
		super();
		this.upcoming = upcoming;
	}
}
tink_streams_Generator.__name__ = true;
class tink_io_nodejs_NodejsSink extends tink_io_SinkBase {
	constructor(target) {
		super();
		this.target = target;
	}
	static wrap(name,native) {
		return new tink_io_nodejs_NodejsSink(new tink_io_nodejs_WrappedWritable(name,native));
	}
}
tink_io_nodejs_NodejsSink.__name__ = true;
class tink_io_nodejs_NodejsSource extends tink_streams_Generator {
	constructor(target) {
		super(tink_core_Future.async(function(cb) {
			target.read().handle(function(o) {
				let cb1 = cb;
				let tmp;
				switch(o._hx_index) {
				case 0:
					let _g = o.data;
					tmp = _g == null ? tink_streams_Step.End : tink_streams_Step.Link(_g,new tink_io_nodejs_NodejsSource(target));
					break;
				case 1:
					tmp = tink_streams_Step.Fail(o.failure);
					break;
				}
				cb1(tmp);
			});
		},true));
	}
	static wrap(name,native,chunkSize,onEnd) {
		return new tink_io_nodejs_NodejsSource(new tink_io_nodejs_WrappedReadable(name,native,chunkSize,onEnd));
	}
}
tink_io_nodejs_NodejsSource.__name__ = true;
class tink_io_nodejs_WrappedReadable {
	constructor(name,native,chunkSize,onEnd) {
		this.name = name;
		this.native = native;
		this.chunkSize = chunkSize;
		let this1 = tink_core_Future.async(function(cb) {
			native.once("end",function() {
				cb(tink_core_Outcome.Success(null));
			});
			native.once("error",function(e) {
				cb(tink_core_Outcome.Failure(new tink_core_TypedError(null,"" + e.code + " - Failed reading from " + name + " because " + e.message,{ fileName : "tink/io/nodejs/WrappedReadable.hx", lineNumber : 22, className : "tink.io.nodejs.WrappedReadable", methodName : "new"})));
			});
		});
		this1.eager();
		this.end = this1;
		if(onEnd != null) {
			this.end.handle(function() {
				process.nextTick(onEnd);
			});
		}
	}
	read() {
		let _gthis = this;
		return tink_core_Future.first(tink_core_Future.async(function(cb) {
			let attempt = null;
			attempt = function() {
				try {
					let _g = _gthis.native.read(_gthis.chunkSize);
					if(_g == null) {
						_gthis.native.once("readable",attempt);
					} else {
						let buf = typeof(_g) == "string" ? new js_node_buffer_Buffer(_g) : _g;
						cb(tink_core_Outcome.Success(new tink_chunk_nodejs_BufferChunk(buf)));
					}
				} catch( _g ) {
					let _g1 = haxe_Exception.caught(_g).unwrap();
					cb(tink_core_Outcome.Failure(tink_core_TypedError.withData(null,"Error while reading from " + _gthis.name,_g1,{ fileName : "tink/io/nodejs/WrappedReadable.hx", lineNumber : 48, className : "tink.io.nodejs.WrappedReadable", methodName : "read"})));
				}
			};
			attempt();
		}),this.end);
	}
}
tink_io_nodejs_WrappedReadable.__name__ = true;
class tink_io_nodejs_WrappedWritable {
	constructor(name,native) {
		this.name = name;
		this.native = native;
		this.ended = tink_core_Future.async(function(cb) {
			native.once("end",function() {
				cb(tink_core_Outcome.Success(false));
			});
			native.once("finish",function() {
				cb(tink_core_Outcome.Success(false));
			});
			native.once("close",function() {
				cb(tink_core_Outcome.Success(false));
			});
			native.on("error",function(e) {
				cb(tink_core_Outcome.Failure(new tink_core_TypedError(null,"" + e.code + ": " + e.message,{ fileName : "tink/io/nodejs/WrappedWritable.hx", lineNumber : 24, className : "tink.io.nodejs.WrappedWritable", methodName : "new"})));
			});
		});
	}
}
tink_io_nodejs_WrappedWritable.__name__ = true;
var tink_streams_Step = $hxEnums["tink.streams.Step"] = { __ename__:true,__constructs__:null
	,Link: ($_=function(value,next) { return {_hx_index:0,value:value,next:next,__enum__:"tink.streams.Step",toString:$estr}; },$_._hx_name="Link",$_.__params__ = ["value","next"],$_)
	,Fail: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.Step",toString:$estr}; },$_._hx_name="Fail",$_.__params__ = ["e"],$_)
	,End: {_hx_name:"End",_hx_index:2,__enum__:"tink.streams.Step",toString:$estr}
};
tink_streams_Step.__constructs__ = [tink_streams_Step.Link,tink_streams_Step.Fail,tink_streams_Step.End];
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
{
	String.__name__ = true;
	Array.__name__ = true;
}
js_Boot.__toStr = ({ }).toString;
$hx_exports["assetPath"] = mc2it_$theme_Theme.assetPath = StringTools.replace(haxe_io_Path.join([haxe_io_Path.directory(__filename),"../www"]),"/",Sys.systemName() == "Windows" ? "\\" : "/");
sys_io_File.copyBuf = js_node_buffer_Buffer.alloc(65536);
tink_core_Callback.depth = 0;
tink_core_SimpleDisposable._hx_skip_constructor = false;
tink_core_Future.NEVER = new tink_core__$Future_NeverFuture();
tink_core_Promise.NOISE = new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
mc2it_$theme_cli_Program.main();
})(typeof exports != "undefined" ? exports : global, global);
