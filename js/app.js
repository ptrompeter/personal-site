$(document).ready(function(){
    var html = $("html");
    $("#about").click(function () {
        if (!html.hasClass("background-tint")) {
            html.addClass("background-tint");
        }
    });
    $("#portfolio").click(function () {
        if(!html.hasClass("background-tint")) {
            html.addClass("background-tint");
        }
    });
    $("#home").click(function () {
        html.removeClass("background-tint");
    });
});