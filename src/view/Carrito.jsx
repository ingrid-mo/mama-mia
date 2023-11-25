import { useContext, useState } from "react";
import { ContexApi } from "../assets/context/ContextApi";
import Button from "react-bootstrap/Button";

const Carrito = () => {
  const { carrito, setCarrito } = useContext(ContexApi);
  const [cantidades, setCantidades] = useState(
    carrito.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const handleIncrement = (id) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [id]: (prevCantidades[id] || 0) + 1,
    }));

    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id
          ? { ...item, price: item.price + item.price } // Actualizar el precio del item
          : item
      )
    );
  };

  const handleDecrement = (id) => {
    if (cantidades[id] > 1) {
      setCantidades((prevCantidades) => ({
        ...prevCantidades,
        [id]: prevCantidades[id] - 1,
      }));

      setCarrito((prevCarrito) =>
        prevCarrito.map((item) =>
          item.id === id
            ? { ...item, price: item.price - item.price } // Actualizar el precio del item
            : item
        )
      );
    }
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.price * cantidades[item.id],
    0
  );

  return (
    <>
      <h3>Detalles del pedido</h3>
      <div>
        <div className="tabla">
          {carrito.map((item, index) => (
            <div key={index} className="tabla__secction">
              <img src={item.img} alt="" />
              <p>$ {item.price}</p>
              <Button variant="primary" onClick={() => handleDecrement(item.id)}>
                -
              </Button>
     
              <p>{cantidades[item.id]}</p>
              <Button variant="danger" onClick={() => handleIncrement(item.id)}>
                +
              </Button>
            
            </div>
          ))}
        </div>
        <div className="detalle__total">
          <p>total</p>
          <p>{total}</p>
        </div>
      </div>
    </>
  );
};

export default Carrito;
