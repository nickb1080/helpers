// Generated by CoffeeScript 1.7.1
(function() {
  (function(root, factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], function(exports) {
        root.Module = factory(root, exports);
      });
    } else if (typeof exports !== "undefined") {
      factory(root, exports);
    } else {
      root.Module = factory(root, {});
    }
  })(this, function(root, Module, _) {
    var previousModule;
    previousModule = root.Module;
    Module = (function() {
      function Module() {}

      return Module;

    })();
    Module.noConflict = function() {
      root.Module = previousModule;
      return this;
    };
    return Module;
  });

}).call(this);