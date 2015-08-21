/*global angular */
(function () {
    'use strict';

    angular.module('aruba.js').service('coreApiService', ['boot.options', function (options) {

        var base_core_url = options.core_url + options.def_api_version + "/" + options.def_api_app + '/',
            accounts_url  = options.accounts_url,
            application_name = options.def_api_app;

        // Returns Core API Service URL based on Current Application
        this.getAppCoreUrl = function () {
            return base_core_url;
        };

        this.getAccountsCoreUrl = function () {
            return options.core_url + options.def_api_version + '/accounts/';
        };

        // Returns Accounts URL
        this.getAccountsUrl = function () {
            return accounts_url;
        };

        // Returns Application name capitalizing the first letter with UpperCase
        this.getApplicationName = function () {
            return application_name.charAt(0).toUpperCase() + application_name.slice(1);

        };

    }]);
}());
