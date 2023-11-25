import { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { ContexApi } from '../context/ContextApi';
import ModalCarrito from './Modal';
import Badge from 'react-bootstrap/Badge';
import { IoIosPizza } from "react-icons/io";

const Navegacion = () => {
  const { carrito } = useContext(ContexApi);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Puedes hacer algo adicional aquí si necesitas realizar alguna acción cuando cambia el carrito.
  }, [carrito]);

  const handleCartButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const determineBadgeColor = () => {
    return carrito.length > 0 ? 'danger' : 'secondary';
  };

  return (
    <Navbar className="navbar__section" bg="dark" data-bs-theme="dark">
      <Container className="navbar__container">
        <Navbar.Brand href="#home" className="logo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/weather-7f851.appspot.com/o/Group%2060.png?alt=media&token=caf90c15-856f-4d94-a71b-587c6df6f04a"
            alt="mamamia-logo"
          />
        </Navbar.Brand>

        <Nav className="me-auto">
          <div className="nav__text">
            <NavLink to="/" className="text-light mt-2 pe-2 text-decoration-none">
              Home
            </NavLink>
            <NavLink className="text-warning mt-2 pe-2 text-decoration-none fs-3" onClick={handleCartButtonClick}>
              <FaShoppingCart />
              <div className='badge'>  
               <Badge bg={determineBadgeColor()}  ><IoIosPizza />
                </Badge></div>
           
            </NavLink>
          </div>
        </Nav>
      </Container>
      <ModalCarrito show={showModal} onHide={handleCloseModal} />
    </Navbar>
  );
};

export default Navegacion;
