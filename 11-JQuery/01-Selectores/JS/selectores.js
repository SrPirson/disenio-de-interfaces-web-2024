$(function(){

    // La estructura siempre será:
    // $("selector").accion

    // Selector para ocultar toda la web.
    // $("*").hide(); 

    // Selector por etiquetas.
    // $("img").hide();

    // Selector por id.
    // $("#p2").hide();

    // Selector por clases.
    // $(".p1").hide();

    // Selector de varios elementos.
    // $("h1, h2, h3").hide();

    // Selector por atributo.
    // $("input[type='password']").hide();

    // Selector para uno de varios iguales.
    // $("button").eq(1).hide();



    // Pseudoselectores y Pseudoelementos

    // Selector primer hijo dentro de una lista por clase
    // $("ul.lista li:first-child").hide()

    // Selector ultimo hijo dentro de una lista por clase
    // $("ul.lista li:last-child").hide()

    // Selector hijo especifico dentro de una lista por clase
    // $("ul.lista li:nth-child(2)").hide()

    // Selector primero de su tipo.
    // $("button:first-of-type").hide()

    // Selector ultimo de su tipo.
    // $("button:last-of-type").hide()

    // Selector de elementos requeridos
    // $("input:required").hide();



    // Modificar CSS 

    // Cambiar el color de fondo de un elemento.
    // $(".p1").css("background-color", "pink");

    // Cambiar el color del texto.
    // $("#p2").css("color", "red");



    // Selectores propios de JQuery.

    // Selector de elementos que contengan lo que le indicamos.
    // $("div").has("input[type='password']").hide();

    // Selector por contenido especifico, busca por lo que contiene.
    // $("ul li:contains('Webs')").hide();

    // Selector por elementos pares.
    // $("ul li:odd").hide()

    // Selector por elementos impares.
    // $("ul li:even").hide()

    // Selector a todos los elementos de un formulario.
    // $(":input").hide();

    // Selectores entre un rango especifico.
    // $("li:gt(0)").hide(); // gt es desde
    // $("li:lt(1)").hide(); // lt hasta

    // Selector del primer elemento.
    // $("button").first().hide()

    // Selector del ultimo elemento.
    // $("button").last().hide()

    // Seleccionar elementos de un formulario.
    // $(":password").hide();
    // $(":text").hide();
    // $(":button").hide();
    // $(":file").hide();
    // $(":radio").hide();
    // $(":reset").hide();
    // $(":image").hide();
    // $(":header").hide(); // (hX)
    // $(":hidden").hide();
    // $("img:hidden").hide();
    // $(":visible").hide();
    // $("img:visible").hide();
    // $(":parent").hide(); // Que contienen algún hijo o que tiene algo dentro



    // Selectores .each() y $(this)

    // Each se usa para que recorra por cada elemento.
    // this se usa para mostrar información de cada elemento
    
    $(".lista li").each(function(index){
        console.log("El elemento " + index + " contiene " + $(this).text());
        
        // Si queremos modificar el colores de los pares
        if (index % 2 == 0) {
            $(this).css("color", "red");
        }
    });

    console.log("------------------------------------------")

    

    // Ejercicio practico

    var total = 0;
    var numElementos = 3;

    $("tbody tr").each(function (index){
        console.log("ÍNDICE -----> " + index);

        let nombre1 = $("tbody tr:nth-child(" + (index + 1) + ") td").eq(0).text();

        let examen1 = $("tbody tr:nth-child(" + (index + 1) + ") td").eq(1).text();
        console.log("Nota examen 1 de " + nombre1 + ": " + examen1);

        let examen2 = $("tbody tr:nth-child(" + (index + 1) + ") td").eq(2).text();
        console.log("Nota examen 2 de " + nombre1 + ": " + examen2);

        let examen3 = $("tbody tr:nth-child(" + (index + 1) + ") td").eq(3).text();
        console.log("Nota examen 3 de " + nombre1 + ": " + examen3);

        let total = (parseFloat(examen1) + parseFloat(examen2) + parseFloat(examen3)) / numElementos;
        total = total.toFixed(2); // Para que solo muestre 2 decimales.

        // Agregamos en la ultima posición la media de las notas.
        $("tbody tr:nth-child(" + (index + 1) + ") td").eq(4).text(total); 

        if (total >= 5) {
            $(this).css("color", "green");
        } else {
            $(this).css("color", "red");
        }

    });
});