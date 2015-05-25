/*global angular, console*/
(function () {
    "use strict";

    // defining behaviour
    function ArubaExceptionHandler($injector) {

        return function (exception, cause) {

            // preparing message to be dispatched
            var dispatcher = null,
                logger = null,
                data = {
                    "error": exception,
                    "details": cause
                };

            // logging
            logger = $injector.get('$log');
            logger.error(exception);

            if (cause) {
                logger.debug(cause);
            }

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
