/*global angular*/
(function () {
    "use strict";

    // defining behaviour
    function ArubaExceptionHandler() {

        return function (exception, cause) {
            exception.message += ' (caused by "' + cause + '")';
        };
    }

    // registering on angular
    angular
        .module("aruba.js")
        .factory("$exceptionHandler", ArubaExceptionHandler);

}());
