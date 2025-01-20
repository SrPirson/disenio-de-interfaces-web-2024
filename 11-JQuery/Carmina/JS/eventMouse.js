$(function () {
    
    $(".caja1").click(function (event) {
        $(".caja1").css("height", "-=10");
        $(".caja1").css("width", "-=10");
    });

    $(".caja1").dblclick(function (event) {
        $(".caja1").css("height", "+=10");
        $(".caja1").css("width", "+=10");
    });

    $(".caja1").hover(function (event) {
        alert($(".caja1").css("height") + " " + $(".caja1").css("width"));
    });

})