$(document).ready(function(){
    var html = $("html");
    $("#about").click(function () {
        if (!html.hasClass("background-tint")) {
            html.addClass("background-tint");
        }
        $("article").hide();
        $("#about-me").show();
    });
    $("#portfolio").click(function () {
        if(!html.hasClass("background-tint")) {
            html.addClass("background-tint");
        }
        $("article").hide();
        $("#portfolio").show();
    });
    $("#home").click(function () {
        $("article").hide();
        html.removeClass("background-tint");
    });
});