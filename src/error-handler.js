/*global angular, console*/
(function () {
    "use strict";

    // defining behaviour
    function ArubaExceptionHandler() {

        return function (exception, cause) {
            // need to figure out what to do with exceptions
            console.error(exception);
            console.debug(cause);
        };
    }

    // registering on angular
    angular
        .module("aruba.js")
        .factory("$exceptionHandler", ArubaExceptionHandler);

}());
