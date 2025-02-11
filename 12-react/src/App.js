import './App.css';
import React,{useRef, useState} from 'react'; // libreria para hacer referencias a elementos del DOM
import Iterador from './iterador'; // importamos el componente iterador

function App() {
  const [numero, setNumero] = useState(); // declaramos el estado numero
  const resultado = useRef(); // declaramos la referencia de un campo de texto

  // Calculadora
  const [primerCampo, setPrimerCampo] = useState("");
  const [segundoCampo, setSegundoCampo] = useState("");

  const seleccionar = (e) => {
    setNumero(e.target.value); // asignamos el valor del select al estado numero
  }

  // Asignamos los números a los campos
  const modificar1 = (e) => {
    setPrimerCampo(e.target.value);
  }

  const modificar2 = (e) => {
    setSegundoCampo(e.target.value);
  }

  // Sumamos los números
  const sumar = () => {
    resultado.current.value = parseInt(primerCampo) + parseInt(segundoCampo);
  }
  
  return (
    <div>
      <Iterador/><br/> {/* usamos el iterador.js */}

      <select value={numero} onChange={seleccionar}>
        <option value="" hidden>Selecciona un número</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <p>La opción seleccionada es: {numero}</p>

      <br/><br/>
      <h2>Calculadora</h2>
      
      <input type="number" value={primerCampo} onChange={modificar1} /><span> + </span>
      <input type="number" value={segundoCampo} onChange={modificar2} /><span> = </span>
      <input ref={resultado} readOnly /><span> </span>
      <button onClick={sumar}>Sumar</button>
    </div>
    
  );
}

export default App;