import './juego.css'; // importamos el archivo de estilos
import React,{useRef, useState} from 'react'; // libreria para hacer referencias a elementos del DOM
import Reiniciar from './componentes/Reiniciar'; // importamos el componente Reiniciar
import NumSecret from './componentes/NumSecret'; // importamos el componente NumSecret
import Formulario from './componentes/Formulario'; // importamos el componente Formulario
import Puntuacion from './componentes/Puntuacion';


function Juego() {

    const generarNumSecret = () => { // función para generar un número aleatorio
        return Math.floor(Math.random() * 20) + 1; // número aleatorio entre 1 y 20
    }

    const reiniciar = () => { // función para reiniciar el juego
        setNumSecreto(generarNumSecret()); // generamos un nuevo número secreto
        setMensaje('Empiece a adivinar...'); // mensaje por defecto
        setPuntuacion(20); // puntuación por defecto
        document.body.style.backgroundColor = '#5e5e5e'; // color de fondo por defecto
    }

    const comparar = (numero) => {
        if (!numero) { // si no se ha ingresado un número
            setMensaje('ERROR: No hay número.'); // mensaje de error
        } else if (Number(numero) === numSecreto) { // si el número ingresado es igual al número secreto
            setMensaje('¡Has acertado!'); // mensaje de acierto
            document.body.style.backgroundColor = '#60b347'; // color de fondo verde
            if (puntuacion > score) { // si la puntuación actual es mayor al puntaje alto
                setScore(puntuacion); // actualizamos el puntaje alto
            }
        } else if (Number(numero) < numSecreto) {
            setMensaje('¡Demasiado bajo!'); // mensaje de número bajo
            if (puntuacion > 0) {
                setPuntuacion(puntuacion - 1); // disminuimos la puntuación
            }
        } else {
            setMensaje('¡Demasiado alto!'); // mensaje de número alto
            if (puntuacion > 0) {
                setPuntuacion(puntuacion - 1); // disminuimos la puntuación
            }
        }
        if (puntuacion === 0) {
            setMensaje('¡Has perdido!'); // mensaje de looser
            document.body.style.backgroundColor = '#ff0000'; // color de fondo rojo
        }
    }

    const [numSecreto, setNumSecreto] = useState(generarNumSecret()); // estado para el número secreto
    const [mensaje, setMensaje] = useState('Empiece a adivinar...'); // estado para el mensaje
    const [puntuacion, setPuntuacion] = useState(20); // estado para la puntuación
    const [score, setScore] = useState(0); // estado para el puntaje alto

    return (
        <div className="contenedor">
            <div className="container">
                <Reiniciar reiniciar={reiniciar} /> {/* llamamos al componente Reiniciar */}
                {numSecreto}
                <h1>¡Adivina mi número!</h1> {/*{numSecreto}*/}
                <NumSecret />
                <Formulario comparar={comparar} />
                <Puntuacion mensaje={mensaje} puntuacion={puntuacion} score={score} />
            </div>
        </div>
    );
}

export default Juego;