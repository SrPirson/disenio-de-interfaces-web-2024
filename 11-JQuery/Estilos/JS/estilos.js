$(function() {

    // Obtener propiedades CSS.

    // Para obtener un color de un elemento.
    let fondo = $(".p1").css("background-color");
    console.log(fondo);

    // Moficar el color de un elemento.
    $(":header").css("color", "white");

    // Modificar el tamaño de un elemento.
    $(".p1").css("width", "+=50");
    $("#p2").css("height", "-=10");
    $("h3").css("width", "-=50");

    // Obtener el valor de varias propiedades de un elemento.
    var colores = $(".p1").css(["color", "background-color"]);
    console.log(colores);

    // Modificar el valor de varias propiedades de un elemento.
    $(".p1").css({
        "color":"pink",
        "background-color":"purple"
    });



    // Funciones adicionales de JQuery.

    // Obtener medidas de un elemento.
    console.log($(".p1").width());
    console.log($(".p1").height());

    //Modificar medidas de un elemento.
    $(".p1").width("300px");
    $(".p1").height("100px");

    // Añadir una clase a un elemento.
    $("h3").addClass("p1");

    // Eliminar una clase de un elemento.
    $("h3").removeClass();

    // Agrega clase si no está o quita clase si está.
    $("h3").toggleClass("p1");

    // Devuelve true si el elemento tiene la clase indicada.
    if ($("h3").hasClass("p1")) {
        console.log("h3 tiene la clase p1");
    } else {
        console.log("h3 no tiene la clase p1");
    }

    // Se pueden agregar borrar... más de una clase a un elemento.
    $("h3").addClass("p1 p18");



    // Atributos y propiedades.
    // Atributos nos dan información adicional sobre un elemento HTML. (Tiene que estar en el HTML)
    // Propiedades son información de la instancion concreta de esas etiuetas dentro del DOM. (No tiene porque estar en el HTML)

    // Obtener el atributo de un elemento.
    console.log($("img").attr("src"));

    // Eliminar el atributo de un elemento.
    $("img").removeAttr("src");

    // Modificar el atributo a un elemento
    $("img").attr("src", "./img/perro.png");

    // Obtener la propiedad de un elemento.
    console.log($("img").prop("alt"));

    // Eliminar la propiedad de un elemento.
    $("img").removeProp("alt");



    // Valores y contenido

    // Vaciar una etiqueta (contenido) de un elemento
    // $(".p1").empty();

    // Obtener el elemento HTML.
    console.log($(".p1").html());

    // Modificar un elemento HTML.
    $(".p1").html("<h1>Cambiado</h1>");

    // Obtener el texto antiguo tras ser modificado.
    $(".p1").html(function(index, oldtext) {
        $(this).html(oldtext + "<h1>Nuevo</h1>");
    });

    // Obtener el texto de un elemento
    console.log($(".p1").text());

    // Modificar el texto de un elemento
    $(".p1").text("Modificado");

    // Agregar un elemento al inicio de una lista
    $("ul.lista").prepend("<li>INICIO</li>");

    // Otra forma de hacer lo mismo
    $("<li>INICIO2</li>").prependTo("ul.lista")
    
    // Agregar un elemento al final de una lista
    $("ul.lista").append("<li>FINAL</li>");

    // Otra forma de hacer lo mismo
    $("<li>FINAL2</li>").appendTo("ul.lista")

    // Envolver un elemento dentro de la etiqueta que indiquemos
    $("ul.lista").wrap("<section></section>");

    // Desenvolver un elemento envuelto.
    $("ul.lista").unwrap();

    // Envolver el contenido del elemento en una etiqueta.
    $("ul.lista li").wrapInner("<section></section>")

    // Envolver cada elemento interno con una etiqueta
    $("ul.lista li").wrapAll("<section></section>")

    // Obtener información de los elementos de un formulario.
    console.log($("input").eq(1).val());

    // Modificar información de un elemento de un formulario.
    $("input").eq(0).val("Caca");

    console.log("------------------------------------------")



    // Ejercicio practico

    
});