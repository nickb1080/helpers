// Generated by CoffeeScript 1.7.1
(function() {
  var FunctionWorker, root;

  FunctionWorker = (function() {
    function FunctionWorker(fn, name) {
      this.fn = fn;
      this.name = name;
      this.blob = new Blob([FunctionWorker.workerStrFromFn(fn, name)]);
      this.blobURL = URL.createObjectURL(this.blob);
      this.worker = new Worker(this.blobURL);
    }

    FunctionWorker.prototype.start = function(args, thisArg) {
      return this.worker.postMessage({
        cmd: "start",
        args: args.length != null ? args : [args],
        thisArg: thisArg || null
      });
    };

    FunctionWorker.prototype.stop = function() {
      this.worker.postMessage({
        cmd: "stop"
      });
      return this.terminated = true;
    };

    FunctionWorker.workerStrFromFn = function(fn, fnName) {
      return "self.addEventListener( \"message\", function( event ) {\n  var cmd = event.data.cmd;\n  var args = event.data.args;\n  var thisArg = event.data.thisArg;\n  var result;\n  var timer;\n  if ( cmd === \"start\" ) {\n    // var timer = new Date();\n    var " + fnName + " = " + (fn.toString()) + "\n    var result = " + fnName + ".apply( thisArg, args );\n    // var timer = new Date() - timer\n    self.postMessage({ type: \"result\", msg: \"Worker complete.\", value: result });\n\n  } else if ( cmd === \"stop\" ) {\n    self.postMessage({ type: \"stop\", msg: \"Stopped on command.\" });\n\n  } else {\n    self.postMessage({ type: \"stop\", msg: \"Invalid command.\"})\n\n  }\n});";
    };

    return FunctionWorker;

  })();

  root = (typeof exports !== "undefined" && exports !== null ? exports : this);

  root.FunctionWorker = FunctionWorker;

}).call(this);
