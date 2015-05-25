/*global angular*/
(function () {
    "use strict";

    // logger definition
    function ArubaLogger() {
        return function ($delegate) {
            return {
                dispatch: function () {
                    return true;
                },

                log: function () {
                    $delegate.log(arguments);
                },

                info: function () {
                    $delegate.info(arguments);
                },

                error: function () {
                    $delegate.error(arguments);
                },

                warn: function () {
                    $delegate.war(arguments);
                }
            };
        };
    }

    // registering on angular
    angular
        .module("aruba.js")
        .factory("shadowLogger", ArubaLogger);
}());
