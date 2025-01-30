import './App.css';
import React,{useRef, useState} from 'react'; // libreria para hacer referencias a elementos del DOM
import Iterador from './iterador'; // importamos el componente iterador

function App() {
  
  return (
    <div>
      <Iterador/> {/* usamos el iterador.js */}
      <Iterador/>
      <Iterador/>
    </div>
    
  );
}

export default App;