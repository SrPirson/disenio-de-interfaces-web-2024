$(function() {
   
    // Efectos

    $("button:contains('1')").click(function (event) {
        $("#elemento").stop();
        $("#elemento").clearQueue();
        $("#elemento").slideToggle(3000);
    });

    $("button:contains('2')").click(function (event) {
        $("#elemento").fadeToggle();
    });


    // Animaciones

    $("#ejemplo").animate({
        fontSize: "3rem"
      }, 2000);

    //Incremento el  alto y ancho de las imágenes en 3 segundos
    $("#ejemplo").animate({
        width: "300px", // Define el nuevo ancho
        height: "300px" // Define el nuevo alto
    }, 3000);

    //Efecto de desaparecer de las imágenes
    //Cortinilla horizontal
    $("#ejemplo").animate({
        opacity: 0,
        width: 'hide',
    }, 5000);


});