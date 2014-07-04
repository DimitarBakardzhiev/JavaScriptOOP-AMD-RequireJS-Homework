define(["handlebars"], function () {
    //  constructor
    var ComboBox = function (items) {
        this.items = items;
    };
    //  function rendering the template
    ComboBox.prototype.render = function (template) {
        var comboBoxHtml = Handlebars.compile(template);
        var container = document.getElementById('container');
        container.innerHTML = comboBoxHtml({
            collection: this.items
        });
    }
    return {
        ComboBox: function (items) {
            //  fix creating an object without "new" keyword
            return new ComboBox(items);
        }
    };
});