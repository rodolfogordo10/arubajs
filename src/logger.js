(function() {

  // logger definition
  function ArubaLogger() {

    return function($delegate) {

      return {

        log: function() {
          $delegate.log(arguments);
        },

        info: function() {},

        error: function() {},

        warn: function() {}
      };
    };
  }

  // registering on angular
  angular
    .module("aruba.js")
    .factory("shadowLogger", ArubaLogger);
})();
