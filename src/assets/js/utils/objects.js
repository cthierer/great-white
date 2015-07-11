
define(['./lodash.js'], function (_) {
    return {
        defaults: function (object, defaults) {
            if (!_.isObject(object)) {
                object = {};
            }

            _.defaults(object, defaults);

            return object;
        },
        get: function (object, path) {
            var i = 0,
                value = object,
                parts;

            if (!_.isObject(object) || !_.isString(path)) {
                return object;
            }

            parts = path.split('.');

            while (!_.isUndefined(value) && i < parts.length) {
                var part = parts[i++];

                if (_.has(value, part)) {
                    value = value[part];
                } else {
                    value = undefined;
                }
            }

            return value;
        }
    };
});
