/*global window, document, angular, console*/
(function (namespace) {
    'use strict';

    // creating namespace
    function Bootstrapper() {
        this.isBootstrapped = false;
    }

    // boot a module
    Bootstrapper.prototype.boot = function (appName, cb) {
        var self = this;
        window.gapi.config.load(function (err, options) {
            // checking errors...
            if (err) {
                console.warn('Config file not loaded!');
                console.debug(err);
            } else {
                // saving boot settings
                angular.module(appName).value('boot.options', options);
            }

            // starting app
            angular.bootstrap(document, [appName]);
            self.isBootstrapped = true;

            // calling callback
            if (cb) {
                cb();
            }
        });
    };

    // creating instance
    namespace.aruba = new Bootstrapper();

    // saving namespace
    window.gapi = namespace;
}(window.gapi || {}));
