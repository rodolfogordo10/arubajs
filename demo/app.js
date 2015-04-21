/*global angular, console*/
angular.module('demoApp', ['aruba.js']);
angular.module('demoApp').run(['$log', 'boot.options', function ($log, options) {
    'use strict';
    console.log('demoApp has been started...', options.custom_key);
    console.info("Let's go to Aruba? ", $log.dispatch());
}]);
