require.config({
    paths: {
        "contorls": "controls",
        "jquery": "libs/jquery.min",
        "handlebars": "libs/handlebars.min"
    }
});

require(["controls", "jquery"], function (controls) {
    var people = [
        { id: 1, name: "Doncho Minkov", age: 18, avatarUrl: "images/minkov.jpg" },
        { id: 2, name: "Georgi Georgiev", age: 19, avatarUrl: "images/joreto.jpg" }];
    var comboBox = controls.ComboBox(people);
    var template = $("#person-template").html();
    comboBox.render(template);
});
