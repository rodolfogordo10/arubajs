/*global angular*/
(function () {
    'use strict';

    angular.module('aruba.js').service('soaService', ['$http', 'boot.options', function ($http, options) {

        this.getCep = function (cep) {
            var uri = options.soa_url + '/cep?tipo=cep&busca=' + cep + '&formato=json&access_token=92ecdad96c33f8d070720a249de278c4e033950i';
            return $http.get(uri);
        };

    }]);
}());
