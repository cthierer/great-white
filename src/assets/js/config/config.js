
define(['/assets/js/utils/lodash.js', '/assets/js/utils/objects.js', '/assets/js/utils/promise.js'], function (_, ObjectUtil, Promise) {
    var Config = function (data) {
        if (!_.isObject(data)) {
            data = {};
        }

        this.get = function (property) {
            var deferred = Promise.pending();
            if (property) {
                deferred.resolve(ObjectUtil.get(data, property));
            } else {
                deferred.resolve(data);
            }
            return deferred.promise;
        };

        this.set = function (property, value) {
            var deferred = Promise.pending();
            deferred.resolve(ObjectUtil.set(data, property, value));
            return deferred.promise;
        };
    };

    return new Config({
        "mako": {
            "host": "http://localhost:3000",
            "endpoints": {
                "content": "/contents"
            }
        },
        "projects": [
            {
                "name": "great-white",
                "title": "GreatWhite"
            }
        ],
        "content": {
            "selectors": ["article", ".article", ".editable"]
        }
    });
})
