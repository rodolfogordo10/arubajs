/*global angular, console, setTimeout*/
angular.module('demoApp', ['aruba.js']);

angular.module('demoApp').run(['$log', 'boot.options', function ($log, options) {
    'use strict';
    console.log('demoApp has been started...', options.custom_key);
    console.info("Let's go to Aruba? ", $log.dispatch());
}]);

angular.module('demoApp').controller('MainController', ['$scope', 'coreApiService', function ($scope, coreApiService) {

    // testing coreApiService
    console.info('Core URL: ', coreApiService.getUrl());

    // testing error handling
    $scope.$on('ARUBAJS_INTERNAL_ERROR', function () {
        console.warn('Error catched successfully!');
    });


    throw "Teste error handling!";
}]);
