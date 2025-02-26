import { useEffect } from "react";
import PokemonCard from "./PokemonCard"
import { useState } from "react";
import "./PokemonList.css";
import GetForm from "./GetForm";

function PokemonList(props) {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons(1, 10);
    }, [])

    const fetchPokemon = async(index) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = await response.json();
        return data;
    }

    const getPokemons = async(from, to) => {
        const pokemonArray = [];

        for (let i = from; i <= to; i++) {
            const pokemon = await fetchPokemon(i);
            pokemonArray.push(pokemon);
        }

        setPokemons(pokemonArray);
    }


    const pokemonsCard = pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} pokemonSeleccion={props.pokemonSeleccion} /> /* Pasamos los parametros a las card */
    })

  return (
    <div>
        <GetForm getPokemons={getPokemons}/><br />
        
        <ul className="pokemon-list">
            {pokemonsCard}
        </ul>
    </div>
    
  )
}

export default PokemonList