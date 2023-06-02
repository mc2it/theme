//! --class-path src --define hxnodejs --define no-deprecation-warnings --library hxnodejs --library tink_core
import haxe.Timer;
import js.esbuild.Esbuild;
import js.glob_watcher.GlobWatcher;
import js.lib.Error as JsError;
using Lambda;
using tink.CoreApi;

/** Watches for file changes. **/
function main() {
	measureCommand("lix Build --debug");

	final srcDir = "src/mc2it_theme";
	GlobWatcher.watch('$srcDir/**/*.hx', done -> ["build", "run"].iter(file -> measureCommand(done, 'haxe --debug $file.hxml')));
	Promise.ofJsPromise(Esbuild.context(Tools.buildOptions)).handle(outcome -> switch outcome {
		case Failure(error): throw error;
		case Success(context): GlobWatcher.watch('$srcDir/ui/**/*.css', done -> measurePromise(done, 'esbuild $srcDir/ui/index.css', context.rebuild()));
	});
}

/** Measures the time it takes to run the specified `command`. **/
private function measureCommand(?done: Callback<Null<JsError>>, command: String)
	measurePromise(done, command, Promise.irreversible((resolve, reject) ->
		Sys.command(command) == 0 ? resolve(Noise) : reject(new Error('The command "$command" failed.'))
	));

/** Measures the time it takes to run the specified `promise`. **/
private function measurePromise(?done: Callback<Null<JsError>>, prompt: String, promise: Promise<Any>) {
	Sys.print('$prompt ');
	final timestamp = Timer.stamp();
	promise.handle(outcome -> switch outcome {
		case Failure(error): done != null ? done.invoke(error.toJsError()) : throw error;
		case Success(_): Sys.println('> ${Tools.formatDuration(Timer.stamp() - timestamp)}'); done?.invoke(null);
	});
}
