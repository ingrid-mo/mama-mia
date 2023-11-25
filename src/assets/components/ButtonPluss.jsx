import Button from 'react-bootstrap/Button';
import { FaShoppingCart  } from "react-icons/fa"
// import { useContext } from "react";
// import { ContexApi } from "../context/ContextApi";

const ButtonPluss = () => {

    // const {  agregarCarro } = useContext(ContexApi);
    
    // const agregarCarro = (price) => {
    //     event.preventDefault();
       
    //     setcarrito(carrito => [...carrito, pizza]);
    
        
    //      console.log("poder total seleccionada:", carrito); 
    //     setPrecioTotal((prevPrecioTotal) => prevPrecioTotal + price);
    //   }
    
   
  return (
    <>
        <Button variant="danger" > 
          <FaShoppingCart />
           Agregar al carro
          </Button>
    </>
  )
}

export default ButtonPluss
