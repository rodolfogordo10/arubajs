/*global angular */
(function () {
    'use strict';

    angular.module('aruba.js').service('$localstorage', ['$window', function ($window) {
        return {
            remove: function () {
                $window.localStorage.clear();
            },
            set: function (key, value) {
                $window.localStorage[key] = value;
            },
            get: function (key) {
                return $window.localStorage[key];
            },
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        };
    }]);
}());
