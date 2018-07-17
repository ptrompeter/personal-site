$(document).ready(function(){
    var html = $("html");
    $("#about").click(function () {
        if (!html.hasClass("background-tint")) {
            html.addClass("background-tint");
        }
        $("article").hide();
        $("#about-article").fadeIn(500);
        // $("#about-me").children().each(function(index) {
        //     $(this).delay(400*index).fadeIn(300);
    });

    $("#portfolio").click(function () {
        if(!html.hasClass("background-tint")) {
            html.addClass("background-tint");
        }
        $("article").hide();
        $("#portfolio-article").fadeIn(500);
    });
    $("#home").click(function () {
        $("article").hide();
        html.removeClass("background-tint");
    });
});