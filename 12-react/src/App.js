import './App.css';
import React,{useRef} from 'react'; // libreria para hacer referencias a elementos del DOM

function App() {
  const contador = useRef(); // declaramos la referencia del div contador

  const iterar = (e) => {
    e.target.innerHTML = parseInt(e.target.innerHTML) + 1;
  };

  const reiniciar = () => {
    contador.current.innerHTML = 1; // accedemos al div contador con la referencia y le asignamos el valor 1
  };

  const cambiar = () => {
    alert("hola");
  };
  
  return (
    <>
      <div ref={contador} onClick={iterar}>1</div>
      <button onClick={reiniciar}>Reiniciar</button>
      <input type="number" onChange={cambiar}/>
    </>
  );
}

export default App;