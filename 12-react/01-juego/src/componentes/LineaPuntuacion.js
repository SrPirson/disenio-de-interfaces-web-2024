import React from 'react'

// props: etiqueta, id, numero -> lo que recibe por parametros
export default function LineaPuntuacion(props) {
  return (
    <p>{props.etiqueta} <span id={props.id}>{props.numero}</span></p>
  )
}