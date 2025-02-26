function Login(props) {

    const user = { // Variable
        username: "",
        email: ""
    }

    const setUsername = (e) => {
      user.username = e.target.value
    }

    const setEmail = (e) => {
      user.email = e.target.value
    }

    const handleSubmit = (e) => {
      e.preventDefault(); // Para evitar que se recarge la pagina por defecto al enviar un formulario
      console.log(user);
      props.handleLogin(user);
    }

  return (
    <section>
        <h2>Login section</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="username">Usuario: </label>
            <input type="text" id="username" onChange={setUsername} /><br />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" onChange={setEmail} /><br />
          </fieldset>
          <button>Login</button>
        </form>
    </section>
  )
}

export default Login