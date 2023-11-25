import { Route, Routes } from "react-router-dom";
import "./app.css";
import DetallePizza from "./assets/components/DetallePizza";
import Navegation from "./assets/components/Navegation";
import NotFound from "./view/NotFound";
import Pizza from "./view/Pizza";
import Home from "./view/Home";
import Carrito from "./view/Carrito";
import ContextProvider from "./assets/context/ContextApi";

const App = () => {
  return (
    <> 
     <ContextProvider>
      
      <Navegation />

    
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
  
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/Pizza/:id"
          element={
            <>
              <Pizza/>
            </>
          }
        />
        
        <Route
          path="/Carrito"
          element={
            <>
              <Carrito />
            </>
          }
        />
         <Route
          path="/NotFound"
          element={
            <>
              <NotFound/>
            </>
          }
        />
        <Route
          path="/vermas/:name"
          element={
            <>
              <DetallePizza/>
            </>
          }
        />
        
      </Routes>

      </ContextProvider>

    </>

  );
};

export default App;
