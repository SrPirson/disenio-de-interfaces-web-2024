import logo from './logo.svg';
import './App.css';

function App() {
  function mifuncion(){
    alert("Hola Mundo");
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <button id="boton" onClick={mifuncion}>
          Boton
        </button>

      </header>
    </div>
  );
}

export default App;
