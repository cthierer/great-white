
define(function () {
    var Article = function (element, fileName) {
        if (element instanceof jQuery) {
            element = element.get();
        }

        this.getElement = function () {
            return element;
        };

        this.getFileName = function () {
            return fileName;
        };
    };

    return Article;
});
