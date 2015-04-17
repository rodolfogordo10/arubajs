/*global angular*/
(function () {
    "use strict";

    // Config method
    function ArubaConfig($provide)
    {
        $provide.decorator("$log", function ($delegate, shadowLogger) {
            return shadowLogger($delegate);
        });
    }

    // registering on angular
    angular.module("aruba.js", []);
    angular.module("aruba.js").config(["$provide", ArubaConfig]);
}());
