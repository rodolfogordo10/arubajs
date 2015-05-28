/*global angular*/
(function () {
    'use strict';

    angular.module('aruba.js').service('soaService', ['$http', 'boot.options', function ($http, options) {

        this.getCep = function (cep) {
            var uri = options.soa_url + '/cep?tipo=cep&busca=' + cep + '&formato=json&access_token=' + options.soa_access_token;
            return $http.get(uri);
        };

    }]);
}());
