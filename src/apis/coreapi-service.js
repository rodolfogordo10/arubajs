/*global angular */
(function () {
    'use strict';

    angular.module('aruba.js').service('coreApiService', ['boot.options', function (options) {

        var base_core_url = options.core_url + options.def_api_version + "/" + options.def_api_app + '/',
            accounts_url  = options.accounts_url;

        this.getCoreUrl = function () {
            return base_core_url;
        };

        this.getAccountsUrl = function () {
            return accounts_url;
        };

    }]);
}());
