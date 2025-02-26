import { useState } from "react";
import { useEffect } from "react";
import "./PokemonCard.css";

function PokemonCard(props) {

    const{pokemon, pokemonSeleccion} = props;

  return (
    // Tenemos que comprobar si existe el pokemon antes de hacer cualquier cosa o nos dará error.
    pokemon.id ? ( // Si existe mostramos los datos
    <li className="pokemon-card" onClick={() => pokemonSeleccion(pokemon)}> {/* Si damos click en la tarjeta nos muestra ese pokemon y va apra PokemonList */}
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
    </li>
    ) : (<p className="loading">Cargando...</p>) // Si no existe mostramos cargando..
  )
}

export default PokemonCard