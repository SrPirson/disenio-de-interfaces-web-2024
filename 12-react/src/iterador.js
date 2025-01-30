import './iterador.css';
import React,{useRef, useState} from 'react'; // libreria para hacer referencias a elementos del DOM

function Iterador() {
  const contador = useRef(); // declaramos la referencia del div contador
  const [valorReinicio, setValorReinicio] = useState(); // declaramos el estado valorReinicio

  const iterar = (e) => {
    e.target.innerHTML = parseInt(e.target.innerHTML) + 1;
  };

  const reiniciar = () => {
    contador.current.innerHTML = 1; // accedemos al div contador con la referencia y le asignamos el valor 1
  };

  const cambiar = (e) => {
    contador.current.innerHTML = e.target.value; // asignamos el valor de input al div
  };
  
  return (
    <div class="contenedor">
      <div class="contador" ref={contador} onClick={iterar}>1</div><br/>
      <button onClick={reiniciar}>Reiniciar</button><br/><br/>
      <input value={valorReinicio} type="number" onChange={cambiar}/>
    </div>
  );
}

export default Iterador;