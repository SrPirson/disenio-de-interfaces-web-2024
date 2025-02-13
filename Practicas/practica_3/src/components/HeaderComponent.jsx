import "./HeaderComponent.css";

export default function HeaderComponent(props) {
  return (
    <div>
        <h1 className="header-title">Cenar con {props.nombre} vale {props.precio}€</h1>
    </div>
  )
}