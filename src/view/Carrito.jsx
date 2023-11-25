import { useContext, useState } from "react";
import { ContexApi } from "../assets/context/ContextApi";

import { HiPlusSm } from "react-icons/hi";
import Button from "react-bootstrap/Button";
import { FaMinus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";


const Carrito = () => {
  const { carrito, setCarrito } = useContext(ContexApi);
  const [cantidades, setCantidades] = useState(
    carrito.reduce((acc, item) => {
      acc[item.id] = 1; // Inicializar todas las cantidades a 1 por defecto
      return acc;
    }, {})
  );

  const handleIncrement = (id) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [id]: (prevCantidades[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    if (cantidades[id] > 1) {
      setCantidades((prevCantidades) => ({
        ...prevCantidades,
        [id]: prevCantidades[id] - 1,
      }));
    } else {
      // Si la cantidad llega a cero, eliminar el artículo del carrito
      const newCarrito = carrito.filter((item) => item.id !== id);
      setCarrito(newCarrito);
    }
  };

  const total = carrito.reduce((acc, item) => acc + item.price * cantidades[item.id], 0);

  return (
    <>
      <h3>Detalles del pedido</h3>
      <div>
        <div className="tabla">
          {carrito.map((item, index) => (
            <div key={index} className="tabla__secction">
              <img src={item.img} alt="" />
              <p>$ {item.price}</p>
              <div className="tabla__button">
                {cantidades[item.id] > 1 ? (
                  // Si la cantidad es mayor que 1, mostrar el botón de eliminar
                  <Button variant="primary" onClick={() => handleDecrement(item.id)}>
                    <FaMinus />
                  </Button>
                ) : (
                  // Si la cantidad es 1 o menos, mostrar el botón de decremento
                  <Button variant="primary" onClick={() => handleDecrement(item.id)}>
                    <FaRegTrashAlt  />
                  </Button>
                )}
                <p>{cantidades[item.id]}</p>
                <Button variant="danger" onClick={() => handleIncrement(item.id)}>
                  <HiPlusSm />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="detalle__total">
          <p>Total</p>
          <p>{total}</p>
        </div>
      </div>
    </>
  );
};

export default Carrito;
