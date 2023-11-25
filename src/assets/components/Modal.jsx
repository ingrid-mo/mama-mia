import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carrito from '../../view/Carrito';
import { useNavigate } from "react-router-dom";

const ModalCarrito = ({ show, onHide }) => {
    const navigate = useNavigate();
    const irCarro = (event) => {
      event.preventDefault();
     show
    
      navigate("/Carrito");
    };

    return (
        <>
        
          <Offcanvas show={show} onHide={onHide} animation="slide-in-left" backdropClassName='offcanva'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Tu pedido</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='offcanva__table'>
           <Carrito/>
           
            </Offcanvas.Body>
            <Button variant="primary" onClick={irCarro
           }>
            ver carrito 
          </Button >
          </Offcanvas>
          
        </>
      );
    }
  

  export default ModalCarrito;
  