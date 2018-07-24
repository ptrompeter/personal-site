$(document).ready(function(){
    var html = $("html");
    function goHome() {
        $("article").hide();
        $(".nav-item").removeClass("active");
        $("#home").addClass("active");
    }
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
        goHome();
    });
    $(document).on('click','.navbar-collapse.show',function(e) {
        $(this).collapse('hide');
    });
    $("#navButton").on('click', function(e){
        goHome();
    });
});