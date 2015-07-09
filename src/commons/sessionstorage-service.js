/*global angular */
(function () {
    'use strict';

    angular.module('aruba.js').service('$sessionstorage', ['$window', function ($window) {
        return {
            remove: function () {
                $window.sessionStorage.clear();
            },
            set: function (key, value) {
                $window.sessionStorage[key] = value;
            },
            get: function (key) {
                return $window.sessionStorage[key];
            },
            setObject: function (key, value) {
                $window.sessionStorage[key] = JSON.stringify(value);
            },
            getObject: function (key) {
                return JSON.parse($window.sessionStorage[key] || '{}');
            }
        };
    }]);

}());
