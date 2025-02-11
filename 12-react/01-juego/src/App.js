import './App.css';
import React,{useRef, useState} from 'react';
import Juego from './juego'; // importamos el componente juego

function App() {
  return (
    <div className="App">
      <title>¡Adivina mi número!</title>
      <Juego />
    </div>
  );
}

export default App;