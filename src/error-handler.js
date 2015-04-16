(function() {

  // defining behaviour
  function ArubaExceptionHandler() {
    return function(exception, cause) {
      exception.message += ' (caused by "' + cause + '")';
      throw exception;
    };
  }

  // registering on angular
  angular
    .module("aruba.js")
    .factory("$exceptionHandler", ArubaExceptionHandler);

})();
