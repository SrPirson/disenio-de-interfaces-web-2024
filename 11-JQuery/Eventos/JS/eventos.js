$(function() {
    
    /* 

    Estructura de la captura de eventos - Asociación Directa
    $("selector").on("event1 event2...", function(event)){
          Tenemos acceso a $(this) (elemento donde ocurrió el evento).
    }

    Estructura de la captura de eventos - Asociación Delegada
    $("selector").on("event1 event2...", "selector2", function(event)){
          Tenemos acceso a $(this) (elemento donde ocurrió el evento).
    }

    Lista de eventos con "nombre":
    
    .change()       - Cuando cambia el contenido de un elemento.
    .click()        - Cuando se realiza click sobre un elemento.
    .dblclick()     - Cuando se realiza doble click sobre un elemento.
    .focus()        - Cuando entro en un elemento.
    .focusout()     - Cuando salgo de un elemento.
    .hover()        - Cuando paso el raton sobre el elemento.
    .keypress()     - Cuando se presiona una tecla mientras un campo de texto tiene el foco. No incluye teclas especiales. Case sensitive.
    .keydown()      - Cuando se presiona una tecla mientras un campo de texto tiene el foco. Incluye teclas especiales. Case insensitive.
    .keyup()        - Cuando el usuario suelta una tecla.
    .mousedown()    - Cuando se presiona un botón del ratón sobre un elemento.
    .mouseenter()   - Cuando el ratón entra solo en el elemento.
    .mouseleave()   - Cuando el ratón sale solo en el elemento.
    .mousemove()    - Cuando el ratón se mueve sobre un elemento.
    .mouseout()     - Cuando el ratón sale de un elemento y sus hijos.
    .mouseover()    - Cuando el ratón entra en un elemento y sus hijos.
    .resize()       - Cuando redimensiono un elemento.
    .scroll()       - Cuando se realiza scroll.
    .select()       - Cuando selecciono en un select.
    .submit()       - Cuando envío un formulario.


    Lista de objeto Event:
    
    e.currentTarget     - El objeto actual donde se ha producido.
    e.delegatedTarget   - Si se ha producido en la asociación delegada.
    e.pageX             - Posición X donde se ha porducido el evento.
    e.pageY             - Posición Y donde se ha porducido el evento.
    e.preventDefault()  - Evitar el comportamiento por defecto.
    e.stopPropagation() - Detiene la propagación del evento en el árbol DOM.
    e.Target            - Elemento donde realmente ocurrió el evento.
    e.timeStamp         - Devuelve el tiempo en milisegundos desde que se cargó la página hasta el momento en que ocurrió el evento.
    e.type              - Contiene el tipo de evento.
    e.which             - Devuelve el código de la tecla presionada para eventos de teclado.
    e.metaKey           - Devuelve true si la tecla estaba presionada o false si no lo estaba.

    */


    var keydownVeces = 0;
    var keypressVeces = 0
    var entrandoEL = 0;
    var saliendoEL = 0;
    var entrandoOO = 0;
    var saliendoOO = 0;

    $('#elemento').keydown(function (event) {
        $('#keydownveces span').html(++keydownVeces);
        $('#teclakeydown span').html(event.which);
    });

    $('#elemento').keypress(function (event) {
        $('#keypressveces span').html(++keypressVeces);
        $('#teclakeypress span').html(event.which);
    });

    $(".zona").mouseenter(function (event) {
        $("p#entrada1 span").html(++entrandoEL);
    });

    $(".zona").mouseleave(function (event) {
        $("p#salida1 span ").html(++saliendoEL);
    });

    $(".zona").mouseover(function (event) {
        $("p#entrada2 span").html(++entrandoOO);
    });

    $(".zona").mouseout(function (event) {
        $("p#salida2 span ").html(++saliendoOO);
    });


});