import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { GiFullPizza } from "react-icons/gi";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContexApi } from "../context/ContextApi";

const CardPizza = ({ key, name, price, ingredientes, img, pizza }) => {
  const { setSeleccionado , agregarAlCarrito} = useContext(ContexApi);

  const navigate = useNavigate();

  const irAdetalle = (event) => {
    event.preventDefault();
    console.log("Pizza seleccionada:", name);
    setSeleccionado(pizza);
    navigate(`/vermas/${name}`);
  };
  
  const agregarCarro = (event) => {
    event.preventDefault();
    console.log("Pizza seleccionada:", name);
    setSeleccionado(pizza);
    // Llama al método para agregar al carrito
    agregarAlCarrito(pizza);
  };




  const nombreCapitalizado = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombreCapitalizado}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {ingredientes &&
            ingredientes.length > 0 &&
            ingredientes.map((ing) => (
              <li key={key}>
                <GiFullPizza size={20} style={{ marginRight: 5 }} />
                {ing}
              </li>
            ))}
        </ListGroup.Item>
        <ListGroup.Item> $ {price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" onClick={irAdetalle}>
          Ver más
        </Button>
        <Button variant="danger" onClick={agregarCarro}>
          Agregar Carro
        </Button>
        
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
