/*global angular*/
(function () {
    "use strict";

    // Config method
    function ArubaConfig($provide) {
        $provide.decorator("$log", function ($delegate, shadowLogger) {
            return shadowLogger($delegate);
        });
    }


    // Run method
    function ArubaRun(options, $injector) {
        var cache = null;

        if (options.onRun.cacheViews) {
            cache = $injector.get("cacheService");
            cache.cacheViews();
        }
    }

    // registering on angular
    angular.module("aruba.js", []);
    angular.module("aruba.js").config(["$provide", ArubaConfig]);
    angular.module("aruba.js").run(["boot.options", "$injector", ArubaRun]);
}());
