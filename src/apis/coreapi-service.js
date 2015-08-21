/*global angular */
(function () {
    'use strict';

    angular.module('aruba.js').service('coreApiService', ['boot.options', function (options) {

        var base_core_url = options.core_url + options.def_api_version + "/" + options.def_api_app + '/',
            accounts_url  = options.accounts_url,
            app_name      = options.def_api_app;

        // Returns Core API Service URL
        this.getCoreUrl = function () {
            return base_core_url;
        };

        // Returns Accounts URL
        this.getAccountsUrl = function () {
            return accounts_url;
        };

        // Returns Application name capitalizing the first letter with UpperCase
        this.getAppplicationName = function () {
            return app_name.charAt(0).toUpperCase() + app_name.slice(1);
        };

    }]);
}());
