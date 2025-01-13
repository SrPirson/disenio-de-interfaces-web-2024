$(function () {


    $(".grade").on("click", function (event) {
        let notas = 0;
        let total = 0;

        $(this).prevUntil(".name").each(function (index) {
            notas++;
            total += parseFloat($(this).text());
            console.log(index + "---->" + notas + "----" + total);
        });

        $(this).text(parseFloat(total) / parseFloat(notas));
    });

    $(".name").mouseenter(function (event) {
        let nota = parseFloat($(this).siblings(".grade").text());

        if (!isNaN(nota)) {
            console.log(nota);
            if (nota >= 5) {
                //Si lo hago con .parent() tengo problemas luego ya que uso los td
                $(this).nextAll().css("background-color", "green");
                $(this).css("background-color", "green");
            } else {
                $(this).nextAll().css("background-color", "red");
                $(this).css("background-color", "red");
            }
        }

    });

    $(".name").mouseleave(function () {
        $(this).nextAll().css("background-color", "white");
        $(this).css("background-color", "white");
    });

    $("#find").click(function (event) {
        $("table").find(".name").css({
            "background-color": "blue"
        });
    });

    $("#filter").click(function (event) {
        $("td").filter(":last-child").css({
            "background-color": "pink"
        });
    });

    $("#slice").click(function (event) {
        let start = parseInt($("#start").val());
        let end = parseInt($("#end").val());
        console.log(start + "----" + end);
        $("tbody tr").each(function (index) {
            $(this).children().slice(start, end).css("background-color", "brown");
        });
    });

    $("#reset").click(function (event) {
        $("td").css("background-color", "white");
    });

});