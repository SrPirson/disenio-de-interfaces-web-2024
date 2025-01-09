$(document).ready(function(){

    // Forma 1
    /* $("#1").click(function(evento){
        $("#texto").val(1)
    });

    $("#2").click(function(evento){
        $("#texto").val(2)
    });

    $("#3").click(function(evento){
        $("#texto").val(3)
    }); */


    // Forma 2
    $("button").on("click", activar);

    function activar() {
        var text = $(this).text();
        $("#texto").val(text);
    };

});
