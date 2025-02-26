import { useEffect, useState } from "react"
import "./MemeList.css";

function MemeList() {

    const [memes, setMemes] = useState([]);

    const HTMLMemes = memes.map((meme) => {
        return (
            <li key={meme.id} className="meme-item">
                <h2>{meme.name}</h2>
                <img src={meme.url} alt={meme.name} className="meme-img"/>
            </li>
        )
    })

    useEffect(() => {
        // Para hacer una petición a la API usamos fetch
        fetch("https://api.imgflip.com/get_memes")

        .then((response) => response.json()) // Transformamos los datos de la respuesta de la API a json
        .then((data) => {
            console.log(data.data.memes); // Dentro de la API nos interesa el apartado data y dentro de el el apartado memes
            setMemes(data.data.memes); // Para guardarlos en el array de memes
        }) // Mostramos todos los datos de la API

    }, []);

  return (
    <ul className="meme-list">
        {HTMLMemes}
    </ul>
  )
}

export default MemeList