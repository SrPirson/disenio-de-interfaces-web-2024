import React from 'react';

// props: etiqueta, id, numero -> lo que recibe por parametros
export default function LineaPuntuacion({etiqueta, id, numero}) { // Si usamos props, deberíamos usar props.etiqueta, props.id, props.numero de esta forma sería seccionada
  return (
    //<p>{props.etiqueta} <span id={props.id}>{props.numero}</span></p>
    <p>{etiqueta} <span id={id}>{numero}</span></p>
  )
}