import React,{useRef, useState} from 'react'; // libreria para hacer referencias a elementos del DOM


function Ejercicio() {
    return (
        <div className="App">
            <div className="formulario">
                <form>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" id="nombre" required /> <br />

                    <label>Edad:</label>
                    <input type="number" name="edad" id="edad" required /> <br />

                    <button>Saludar</button>

                </form>
            </div>
        </div>
    );
}

export default Ejercicio;