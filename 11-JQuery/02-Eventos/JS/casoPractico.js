$(function () {

    //Funcionamiento de la calculadora
    $("#calculadora button").on("click", function (event) {

        let op = $(this).val();
        let op1 = parseFloat($("#op1").val());
        let op2 = parseFloat($("#op2").val());
        let resultado;

        switch (op) {
            case "+":
                resultado = op1 + op2;
                break;
            case "-":
                resultado = op1 - op2;
                break;
            case "*":
                resultado = op1 * op2;
                break;
            case "/":
                resultado = op1 / op2;
                break;
        };

        $("#calculadora h4 span").text(resultado);
    });

    /* Funcionamiento del cuadrado */
    $("body").keydown(function (event) {
        let keycode = event.which;
        
        switch (keycode) {
            case 37:
                $("#hijo").css("left", "-=10");
                break;
            case 38:
                $("#hijo").css("top", "-=10");
                break;
            case 39:
                $("#hijo").css("left", "+=10");
                break;
            case 40:
                $("#hijo").css("top", "+=10");
                break;
        }
    });

    /* Funcionamiento de la tabla */
    $("tr").mouseenter(function (event) {

        let value = $("#table input#nombre").val();

        if ($(this).is(":contains(" + value + ")")) {
            $(this).addClass("contains");
        } else {
            $(this).addClass("no-contains");
        }
        
    });


    $("tr").mouseleave(function (event) {
        $(this).prop("class", "");
    });


    /* Funcionamiento del menú contextual */
    $("section#contextMenu").hide();

    $("section#table").contextmenu(function (event) {
        event.preventDefault();
        if (event.which == 3) {
            console.log("SIIII");
            $("section#contextMenu").css({
                "left": event.pageX,
                "top": event.pageY
            });
            $("section#contextMenu").toggle();
        }
    });

    $("section#contextMenu").mouseleave(function (event) {
        $(this).toggle();
    })


});