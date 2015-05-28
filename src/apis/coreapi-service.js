/*global angular */
(function () {
    'use strict';

    angular.module('aruba.js').service('coreApiService', ['boot.options', function (options) {

        var base_url = options.core_url + options.def_api_version + "/" + options.def_api_app + '/';

        this.getUrl = function () {
            return base_url;
        };

    }]);
}());
