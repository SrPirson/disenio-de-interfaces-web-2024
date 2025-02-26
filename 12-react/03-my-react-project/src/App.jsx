import './App.css'
import ButtonComponent from './components/ButtonComponent'
import HeaderComponent from './components/HeaderComponent'
import Login from './components/Login'
import MovieList from './components/MovieList'
import AnimalList from './components/AnimalList'

import React,{useEffect, useRef, useState} from 'react';
import MemeList from './components/MemeList'

function App() {

  


  /* let number = 0; */
  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("");
  let myPlaceholder = "Escribe aquí";

  const [greetings, setGreetings] = useState("Bienvenidos a mi web");
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact us"
  }

  const condition = true;

  const[user, setUser] = useState({});

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  }

  // Variable reactiva para mostrar o no las peliculas, por defecto true(si)
  const [showMovies, setShowMovies] = useState(true);


  /* HOOKS */

  // Funcion para cada vez que se renderiza el componente raiz
  // Si queremos que no se repita dos veces tenemos que comentar la etiqueta <StrictMode> en el main.jsx
  /* useEffect(() => {
    console.log("Ejecución cada vez que se renderiza el componente raiz");
  }) */

  useEffect(() => {
    console.log("Ejecución cada cambio de la variable reactiva user");
  }, [user])



  const addOne = () => {
    /* number++; */
    setNumber(number + 1);
    console.log(number);
  }

  const sayHello = () => {
    console.log("Hello");
  }

  const handleChange = (e) => {
     console.log(e.target.value);
  }

  return (
    <>
      <HeaderComponent greetings={greetings} links={links} />
      <main className='main-content'>

        {/* Condicionales "&& logicos"*/}
        {user.username && <h2 onClick={sayHello}>Hola {user.username}</h2>}

        <Login handleLogin={login} />

        {/* Operadores & logicos */}
        {condition && <h2>La condición se cumple</h2>}
        {!condition && <h2>La condición no se cumple</h2>}

        {/* Operadores ternarios */}
        {condition ? (
          <h2>La condición se cumple</h2>
        ) : (
          <h2>La condición no se cumple</h2>
        )}

        <h2 onClick={addOne}>Number: {number}</h2>
        <input value={myValue} placeholder={myPlaceholder} type="text" onChange={handleChange} />
        <br /><br />
        <ButtonComponent /> <br /><br />

        {/* Boton que cambia de estado al dar click sobre el y cambia su estado al contrario que tenga en ese momento */}
        <button onClick={() => setShowMovies(!showMovies)}>Mostrar Peliculas</button>
        {/* Mostrar condicionalmente el MovieList (Si es true se muestra) */}
        {showMovies && <MovieList />}
        

        <AnimalList />


        <MemeList />


      </main>
    </>
  )
}

export default App
