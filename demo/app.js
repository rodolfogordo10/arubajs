/*global angular, console, setTimeout*/
angular.module('demoApp', ['aruba.js', 'ngRoute']);

angular.module('demoApp').run(['$log', 'boot.options', function ($log, options) {
    'use strict';
    $log.log('demoApp has been started...', options.custom_key);
    $log.info("Let's go to Aruba? ", $log.dispatch());
}]);

angular.module('demoApp').controller('MainController', ['$scope', 'coreApiService', '$log', function ($scope, coreApiService, $log) {

    // testing coreApiService
    $log.info('Core URL: ', coreApiService.getUrl());

    // testing error handling
    $scope.$on('ARUBAJS_INTERNAL_ERROR', function () {
        $log.warn('Error catched successfully!');
    });
    
    throw "Teste error handling!";
}]);
