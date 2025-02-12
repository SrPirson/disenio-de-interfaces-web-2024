import React from 'react';
import {useState} from 'react';

export default function Formulario({comparar}) {

    const comprobar = () => {
        comparar(num);
    }

    const [num, setNum] = useState("");

    const modificar = (e) => {
        setNum(e.target.value);
    }

  return (
    <div>
        <div className="guess-section">
            <input onChange={modificar} value={num} type="number" id="guess" placeholder="Número" min="1" max="20" /> <br/>
            <button onClick={comprobar}>Check!</button>
        </div>
    </div>
  )
}