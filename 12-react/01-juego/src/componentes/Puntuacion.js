import React from 'react';
import LineaPuntuacion from './LineaPuntuacion';
import Mensaje from './Mensaje';

export default function Puntuacion({ mensaje, puntuacion, score }) {
  return (
    <div>
        <div className="score-section">
            <br/>
            <Mensaje mensaje={mensaje} />
            <br />
            <LineaPuntuacion etiqueta="Puntuacion:" id="score" numero={puntuacion} />
            <LineaPuntuacion etiqueta="Puntaje Alto:" id="highscore" numero={score} />
        </div>
    </div>
  )
}