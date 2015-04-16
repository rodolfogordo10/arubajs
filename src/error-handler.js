/*global angular*/
(function () {
    "use strict";

    // defining behaviour
    function ArubaExceptionHandler() {

        return function NewHandler(exception, cause) {
            exception.message += ' (caused by "' + cause + '")';
            throw exception;
        };
    }

    // registering on angular
    angular
        .module("aruba.js")
        .factory("$exceptionHandler", ArubaExceptionHandler);

}());
