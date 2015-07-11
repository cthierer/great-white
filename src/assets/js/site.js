require(['logger/logger', 'editor/content_editor', 'editor/article', 'content/dummy_content_retriever', 'config/config', 'session/session'], function (Logger, ContentEditor, Article, ContentRetriever, Config, Session) {
    var SiteLogger = Logger.get('site');

    function load () {
        return Config.get().then(function (config) {
            return Session.set('project', config.projects[0]).then(function () {
                return config;
            });
        });
    }

    load().then(function (config) {
        var editables = config.content.selectors.join(',');

        SiteLogger.debug('Editable region selectors:', editables);

        $(editables).click(function () {
            var article = new Article(this),
                editor = new ContentEditor(article, {
                    contentRetriever: ContentRetriever
                });

            editor.getSourceContent().then(function (result) {
                SiteLogger.debug('Retrieved result:', result);
            });
        });
    });
});
