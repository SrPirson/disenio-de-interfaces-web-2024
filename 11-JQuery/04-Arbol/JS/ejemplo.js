$(function () {
  /*

    Funciones de recorrido del árbol:

    .childen()      - Recoge todos los hijos de un elemento seleccionado.
    .next()         - El siguiente de sus hermanos.
    .nextAll()      - Todos los siguientes de sus hermanos.
    .nextUntil()    - Todos los siguientes de sus hermanos hasta que se cumpla un criterio.
    .prev()         - El hermano previo.
    .prevAll()      - Todos los hermanos previos.
    .prevUntil()    - Todos los hermanos previos hasta que se cumpla un criterio.
    .parent()       - El padre directo.
    .parents()      - El padre y todos sus antecesores.
    .parentsUntil() - Todos los padres hasta completar una condición.
    .siblings()     - Todos los hermanos.
    .closest()      - De los que están seleccionados el que más cerca está¿? 

*/

  // Ejemplo con Children
  $("ul.lista").children().css("color", "red");

  // Ejemplo con Children con filtro
  $("ul.lista").children("li:nth-child(1)").css("color", "green");

  // Ejemplo con Next, Prev...
  $("table tbody tr").first().next().css("color", "red");
  $("table tbody tr").last().prev().css("color", "green");
  $("table tbody tr").siblings().css("color", "purple");



  /* 

    Funciones de recorrido del árbol:

    .filter()   - De todos los seleccionados se queda con los que cumple con la condición.
    .find()     - Selecciona los hijos de los elementos seleccionalos que cumplen con una condición.
    .slice()    - Parte los todos los elementos devueltos por el primer selector por uno o varios indices.

*/  

    // Ejemplo de filter()
    $("table tbody tr").filter(".color--azul");

    // Ejemplo de find()
    $("table tbody tr").find(".color--verde");

    // Ejemplo de slice()
    $("table tbody tr").slice(1,3).text("");



  /* 

    Funciones de insertar elementos:

    .after()        - Insertar algo despues de un elemento seleccionado.
    .before()       - Insertar algo antes de un elemento seleccionado.
    .insertAfter()  - Insertar algo despues de un elemento seleccionado de manera analoga.
    .insertBefore() - Insertar algo antes de un elemento seleccionado de manera analoga.
    .clone()        - Clonar un elemento.

*/ 

    // Ejemplo de after()
    $("li").last().after("<li>despues</li>");

    // Ejemplo de before()
    $("li").first().before("<li>antes</li>");

    // Ejemplo de insertAfter()
    $("<li>despues2</li>").insertAfter($("li").last()); 

    // Ejemplo de insertBefore()
    $("<li>antes2</li>").insertBefore($("li").first()); 

    // Ejemplo de clone()  - true si quieres que copie los eventos | false para que no copie los eventos
    $("li").first().clone(true).appendTo("ul");



  /* 

    Funciones para borrado de elementos:

    .remove()   - Borra del DOM definitivamente el elemento seleccionado.
    .detach()   - Funciona igual que el remove pero devuelve lo que ha borrado.

*/ 

    // Ejemplo de remove()
    $("li").last().remove();
    $("li").last().remove(".p1");

    // Ejemplo de detach()
    /* var borrado = $("li").last().detach();
    $("li").append(borrado); */



  /* 

    Funciones para reemplazar elementos:

    .replaceAll()   - Reemplaza el elemento objetivo con el conjunto de los seleccionado.
    .replaceWith()  - Igual que el anterior pero el origen y el objetivo estñan al revés.

*/ 

    // Ejemplo de replaceAll()
    $("<li>Otros</li>").replaceAll("li");

    // Ejemplo de replaceAll()
    $("li").replaceWith("<li>Otros</li>");


});
