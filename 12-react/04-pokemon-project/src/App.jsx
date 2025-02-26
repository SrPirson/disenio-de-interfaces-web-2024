import { useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails';

function App() {

  const [pokemonSeleccionado, setPokemonSeleccionado] = useState();

  return (
    <>

    {/* Si hemos seleccionado un pokemon mostramos lo siguiente */}
    {pokemonSeleccionado && (
      <div>
        <h2>Pokemon Seleccionado</h2>
        <PokemonDetails pokemon={pokemonSeleccionado} />
      </div>
    )}

    <h2>Lista de pokemons</h2>
    <PokemonList pokemonSeleccion={setPokemonSeleccionado} />
    </>
  )
}

export default App
