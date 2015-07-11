
define(function () {
    var Article = function (element) {
        if (element instanceof jQuery) {
            element = element.get();
        }

        this.getElement = function () {
            return element;
        };
    };

    return Article;
});
