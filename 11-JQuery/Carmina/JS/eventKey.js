$(function () {
   
    $('#elemento').keypress(function (event) {
        $('#teclakeypress span').html(event.which);
        let nextKey = String.fromCharCode(event.which);
        $('#nextkey span').html(nextKey);
    });

});