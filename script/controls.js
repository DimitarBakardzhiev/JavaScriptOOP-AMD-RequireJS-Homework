define(["handlebars"], function () {
    var ComboBox = (function () {
        // constructor
        var ComboBox = function (items) {
            // fix creating an object without "new" keyword
            if (!(this instanceof arguments.callee))
                return new ComboBox(items);
            this.items = items;
        };
        // function rendering the template
        ComboBox.prototype.render = function (template) {
            var comboBoxHtml = Handlebars.compile(template);
            var container = document.getElementById('container');
            container.innerHTML = comboBoxHtml({
                collection: this.items
            });
        }
        return ComboBox;
    }());
    return {
        ComboBox: ComboBox
    }
});