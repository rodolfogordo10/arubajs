/*global window,XMLHttpRequest*/
(function (namespace) {
    'use strict';
    // creating namespace
    function ConfLoader() {
        this.filepath = "conf.json";
    }

    // loading file
    ConfLoader.prototype.load = function (cb) {
        var xhr = new XMLHttpRequest();

        // sending result
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    cb(null, xhr.responseText);
                } else {
                    cb("Error loading file - status " + xhr.status);
                }
            }
        };

        // handling error
        xhr.onerror = function (err) {
            cb(err);
        };

        // fetching file
        xhr.open("GET", this.filepath, true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.send();
    };

    // creating instance
    namespace.loader = new ConfLoader();

    // saving namespace
    window.gapi = namespace;
}(window.gapi || {}));
