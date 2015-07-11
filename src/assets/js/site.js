require(['editor/content_editor', 'editor/article', 'content/content_retriever', 'config/config', 'session/session'], function (ContentEditor, Article, ContentRetriever, Config, Session) {

    function load () {
        return Config.get('projects').then(function (projects) {
            var selectedProject = projects[0];

            return Session.set('project', selectedProject).then(function () {
                return true;
            });
        });
    }

    load().then(function () {
        $('article').click(function () {
            var article = new Article(this, 'lorem-ipsum'),
                editor = new ContentEditor(article, {
                    contentRetriever: ContentRetriever
                });

            editor.getSourceContent().then(function (result) {
                console.log(result);
            });
        });
    });
});
