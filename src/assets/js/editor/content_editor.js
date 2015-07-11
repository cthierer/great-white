
define(['/assets/js/logger/logger.js', '/assets/js/utils/objects.js', '/assets/js/editor/article.js'], function (Logger, ObjectUtil, Article) {
    var ContentEditorLogger = Logger.get('editor.ContentEditor'),
        ContentEditor;

    ContentEditor = function (article, options) {
        if (ContentEditorLogger.isDebugEnabled()) {
            ContentEditorLogger.debug('Started editor for article: ', article);
        }

        this.getArticle = function () {
            return article;
        };

        this.getOptions = function () {
            return options || {}
        };

        this.getOption = function (option) {
            return ObjectUtil.get(this.getOptions(), option);
        };

        this.getContentRetriever = function () {
            return this.getOption('contentRetriever');
        }
    };

    ContentEditor.prototype.getSourceContent = function () {
        var page = this.getArticle().getFileName(),
            contentRetriever = this.getContentRetriever();
            
        return contentRetriever.getPageContent(page);
    };

    return ContentEditor;
});
