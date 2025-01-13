$(function () {


    $("#representar").on("click", function (event) {
        //Si quisiera que hiciera un retroceso a cero
        //$(".graphics div div:not('.names')").animate({
        //height: "0px"
        //}, 1000);

        $("tbody tr").each(function (index) {
            let cityIndex = index;
            $(this).children(":gt(0)").each(function (indice) {
                let year_index = indice;
                let value = parseInt($(this).text());
                $(".graphics > div").eq(cityIndex).children().eq(year_index).animate({
                    "height": value
                });
            });
        });

    });


    //Para poder cambiar los valores. Tiene que ser delegado
    $("tbody").on("dblclick", "td", function (event) {
        $(this).replaceWith("<td><input type='number' value='" + parseInt($(this).text()) + "'></td>");
    });

    //Captura de los eventos delegados
    $("tbody").on("change", "input", function (event) {
        $(this).parent().html($(this).val());
        $("#representar").trigger("click");
    });

});
