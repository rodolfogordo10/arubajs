/*global angular, console*/
(function () {
    "use strict";

    // logger definition
    function ArubaLogger() {
        return function ($delegate) {
            return {
                dispatch: function (method, params) {
                    // defining method
                    var proc = $delegate[method] || $delegate.log,
                        stamp = new Date().toString(),
                        prefix = '[' + stamp + '][' + method + ']::',
                        msg = [],
                        arg;

                    if (method) {
                        // preparing msg
                        msg.push(prefix);

                        // joining params
                        for (arg in params) {
                            if (params.hasOwnProperty(arg)) {
                                msg.push(params[arg]);
                            }
                        }

                        // applying log info
                        proc.apply(null, msg);
                    }
                },

                log: function () {
                    this.dispatch('log', arguments);
                },

                info: function () {
                    this.dispatch('info', arguments);
                },

                error: function () {
                    this.dispatch('error', arguments);
                },

                warn: function () {
                    this.dispatch('warn', arguments);
                }
            };
        };
    }

    // registering on angular
    angular
        .module("aruba.js")
        .factory("shadowLogger", ArubaLogger);
}());
