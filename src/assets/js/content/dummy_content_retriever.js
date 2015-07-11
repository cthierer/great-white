
define(['/assets/js/logger/logger.js', '/assets/js/config/config.js', '/assets/js/session/session.js', '/assets/js/utils/promise.js', '/assets/js/utils/ajax.js', '/assets/js/utils/objects.js'], function (Logger, Config, Session, Promise, Ajax, ObjectUtil) {
    var ContentRetrieverLogger = Logger.get('content.ContentRetriever'),
        ContentRetriever = function () { };

    ContentRetriever.prototype.getPageContent = function (page, options) {
        var deferred = Promise.pending();

        deferred.resolve({
            "file": page,
            "content": "Lorem ipsum"
        });

        return deferred.promise;
    };

    return new ContentRetriever();
});
