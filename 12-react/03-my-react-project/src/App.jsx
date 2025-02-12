import './App.css'
import ButtonComponent from './components/ButtonComponent'
import HeaderComponent from './components/HeaderComponent'
import Login from './components/Login'

import React,{useRef, useState} from 'react';

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
        <ButtonComponent />
      </main>
    </>
  )
}

export default App
