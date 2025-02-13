import BotonComponent from "./BotonComponent"
import "./FamosoComponent.css"
import HeaderComponent from './HeaderComponent'
import {useState} from 'react';

function FamosoComponent() {

    const famosos = [{
        nombre: "Pablo",
        apellido: "Alboran",
        color: "red",
        precio: 100
      },
      {
        nombre: "Aitana",
        apellido: "",
        color: "purple",
        precio: 120
      },
      {
        nombre: "Abraham",
        apellido: "Mateo",
        color: "blue",
        precio: 140
      },
      {
        nombre: "Ana",
        apellido: "Mena",
        color: "violet",
        precio: 150
      },
      {
        nombre: "Manuel",
        apellido: "Carrasco",
        color: "green",
        precio: 125
      },
      {
        nombre: "Rasalia",
        apellido: "",
        color: "orange",
        precio: 180
      }]

      const [nombre, setNombre] = useState("nadie");
      const [precio, setPrecio] = useState(0);

      const seleccionar = (nombre, apellido, precio) => {
        setNombre(nombre + " " + apellido);
        setPrecio(precio);
      }

  return (

    <div>
      <HeaderComponent nombre={nombre} precio={precio}/>
    
      <div className="contenedor">
      {famosos.map((famoso, index) => (
          <div style={{backgroundColor: famoso.color}} key={index} className="famoso" >
              <p className="name">{famoso.nombre} {famoso.apellido}</p>
              <BotonComponent seleccionar={() => seleccionar(famoso.nombre, famoso.apellido, famoso.precio)} />
          </div>
      ))}
      </div>
    </div>
  )
}

export default FamosoComponent