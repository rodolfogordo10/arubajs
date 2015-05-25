/*global angular */
(function () {
    'use strict';

    function CachingService($templateCache, $route, $http) {


        this.cacheViews = function (cacheObj, routeObj) {
            // setting defaults
            var partial, r,
                viewCache = cacheObj || $templateCache,
                router = routeObj || $route;

            // looping routes
            for (r in router.routes) {
                // jslint -object protection
                if (router.routes.hasOwnProperty(r)) {
                    // evaluate partial
                    partial = router.routes[r].templateUrl;
                    if (partial) {
                        // caching route
                        $http.get(partial, {cache: viewCache});
                    }
                }
            }
        };
    }

    CachingService.$inject = ['$templateCache', '$route', '$http'];

    // registering service
    angular.module('aruba.js').service('cacheService', CachingService);

}());
