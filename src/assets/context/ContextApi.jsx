import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContexApi = createContext();

const ContextProvider = ({ children }) => {
  const [pizza, setIPizza] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [seleccionado, setSeleccionado] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
  };



  useEffect(() => {
    const getImage = async () => {
      const apiUrl = "./public/pizzas.json";

      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        setIPizza(data);
      }
       catch (err) {
        
        console.log("Error al obtener datos del json:", err);
      }
    };

    getImage();
  }, []); 
console.log(pizza)



  return (
    <ContexApi.Provider value={{ pizza, setIPizza,  seleccionado ,setSeleccionado, carrito , setCarrito , setPrecioTotal, precioTotal, agregarAlCarrito }}>
      {children}
    </ContexApi.Provider>
  );
};

export default ContextProvider;