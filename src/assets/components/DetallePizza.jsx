import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContexApi } from "../context/ContextApi";
import { GiFullPizza } from "react-icons/gi";
import Button from "react-bootstrap/Button";


const DetallePizza = () => {
  const { setSeleccionado , agregarAlCarrito , seleccionado} = useContext(ContexApi);

  const { name } = useParams();
  console.log(`Hola, estoy en detalle ` + name);

  const agregarCarro = (event) => {
    event.preventDefault();
    console.log("Pizza seleccionada:", name);
    setSeleccionado(seleccionado);
    // Llama al método para agregar al carrito
    agregarAlCarrito(seleccionado);
  };

  const nombreCapitalizado =
    seleccionado.name.charAt(0).toUpperCase() + seleccionado.name.slice(1);

  return (
    <div className="detalle">
      <div className="detalle__img">
        <img src={seleccionado.img} alt="" />
      </div>

      <div className="detalle__text">
        <h1> {nombreCapitalizado}</h1>
        <hr />
        <p>{seleccionado.desc}</p>
        <ul>
          {seleccionado.ingredients &&
            seleccionado.ingredients.length > 0 &&
            seleccionado.ingredients.map((ing, index) => (
              <li key={index}>
                <GiFullPizza size={20} style={{ marginRight: 5 }} />
                {ing}
              </li>
            ))}
        </ul>
        <div className="detalle__price">
          <strong> $ {seleccionado.price}</strong>
          
        <Button variant="danger" onClick={agregarCarro}>
          agregarCarro
        </Button>
        </div>
      </div>
    </div>
  );
};

export default DetallePizza;
