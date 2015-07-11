require(['editor/content_editor', 'editor/article'], function (ContentEditor, Article) {

    $('article').click(function () {
        var article = new Article(this),
            editor = new ContentEditor(article, {});
    });
});
