import CardPizza from "../assets/components/card";
import { useContext } from "react";
import { ContexApi } from "../assets/context/ContextApi";


const Home = () => {
const {pizza, setPizza} = useContext(ContexApi)
console.log("hola soy piza" + pizza)


  return (
    <>
      <div className="home__section">
        <div className="bighero">
          <div className="bighero__background">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/weather-7f851.appspot.com/o/Wireframe%20-%201%20(6).png?alt=media&token=23c55614-481f-4d45-a772-83679dd9b696"
              alt=""
            />
          </div >
          <div className="bighero__cuadrado">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/weather-7f851.appspot.com/o/Group%2062%20(1).png?alt=media&token=b6630b56-4148-4d51-a105-cdb2f74d4275"
            alt="pizza de motzarella con pesto y albahaca"
          />
          <div className="bighero__text">
            <h1>Pizeria Mama Mia!</h1>
            <p>Las mejores pizas de la region las encuentras aquí!</p>
            <hr />
          </div>
          </div>
        </div>


        <div className="card__section">

        {pizza && pizza.length > 0 && (
  pizza.map((piz) => (
    <CardPizza
      key={piz.id}
      name={piz.name}  
      price={piz.price}  
      ingredientes = {piz.ingredients}
      img = {piz.img}
      description = {piz.desc}
      setPizza ={setPizza}
      pizza= {piz}
      />
  ))
)}


  
            
          </div>
      </div>
    </>
  );
};

export default Home;
