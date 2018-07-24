$(document).ready(function(){
    var html = $("html");
    var navItems= $(".nav-item");
    console.log(navItems);
    $("#about").click(function () {
        $("article").hide();
        $("#about-article").fadeIn(500);
        $(".nav-item").removeClass("active");
        $("#about").addClass("active");
    });

    $("#portfolio").click(function () {
        $("article").hide();
        $("#portfolio-article").fadeIn(500);
        $(".nav-item").removeClass("active");
        $("#portfolio").addClass("active");
    });
    $("#home").click(function () {
        $("article").hide();
        html.removeClass("background-tint");
        $(".nav-item").removeClass("active");
        $("#home").addClass("active");
    });
    $(document).on('click','.navbar-collapse.show',function(e) {
        $(this).collapse('hide');
    });
});