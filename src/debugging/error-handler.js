/*global angular, console*/
(function () {
    "use strict";

    // defining behaviour
    function ArubaExceptionHandler($injector) {

        return function (exception, cause) {

            // preparing message to be dispatched
            var dispatcher = null,
                data = {
                    "error": exception,
                    "details": cause
                };

            // need to figure out what to do with exceptions
            console.error('[ARUBAJS_INTERNAL_ERROR]', exception);
            console.debug('[ARUBAJS_DEBUG_INFO]', cause);

            // dispatching message
            dispatcher = $injector.get('$rootScope');
            dispatcher.$broadcast('ARUBAJS_INTERNAL_ERROR', data);
        };
    }

    // injecting
    ArubaExceptionHandler.$inject = ['$injector'];

    // registering on angular
    angular
        .module("aruba.js")
        .factory("$exceptionHandler", ArubaExceptionHandler);

}());
