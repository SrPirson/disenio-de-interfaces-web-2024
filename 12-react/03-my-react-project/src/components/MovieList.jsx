import { useEffect } from "react";

function MovieList() {

    const peliculas = ["Señor de los anillos", "Piratas del caribe", "Pitufos"];

    // La primera variable es el valor de los elementos del array y la segunda variable es el indice de ese elemento con una arrow function
    const HTMLPeliculas = peliculas.map((pelicula, index) => {
        return <p key={pelicula}>{index + 1} - {pelicula}</p> // La key es obligatoria y es un valor unico para cada elemento
    })

    /* HOOK */
    useEffect(() => {
        console.log("Peliculas montadas");
    }, []) /* Si ponemos array vacio solo se mostrará una vez en el momento en el que se monte */

    useEffect(() => {
        return () => {
            console.log("Peliculas desmontado");
        }
    }, [])


  return (
    <section>
        <h2>Peliculas</h2>
        {HTMLPeliculas}
    </section>
    
  )
}

export default MovieList