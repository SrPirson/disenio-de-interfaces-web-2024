$(function () {
    var frutas = [];
    console.log(frutas.length);

    $(".origen img").dblclick(function (event) {

        frutas[frutas.length] = $(this).clone();
        //Borrando los elementos del origen
        //frutas[frutas.length] = $(this).detach();
        $(".destino h2 span").text(frutas.length);
    });

    $("#echar").click(function (event) {
        if (!frutas.length) {
            alert("Cesta Vacía");
        } else {
            frutas.forEach(element =>
                $(".destino").children().last().after(element)
            );

            frutas = [];
            $(".destino h2 span").text(0);
        }
    });

    $("#vaciar").click(function (event) {
        $(".destino").children().slice(1).remove();
    });


});