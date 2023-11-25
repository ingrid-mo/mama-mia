import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ContexApi } from '../context/ContextApi';
import ModalCarrito from './Modal';
import { useState } from 'react';
const Navegacion = () => {
  
  const { precioTotal } = useContext(ContexApi);
  const [showModal, setShowModal] = useState(false);

  

  const handleCartButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const setActiveClass = ({ isActive }) =>
    isActive
      ? 'text-light mt-2 pe-2 text-decoration-none'
      : 'text-warning mt-2 pe-2 text-decoration-none';


  console.log('PRECIOOOOOOOOOOOOOOOOOOOOOOO' +  precioTotal );

  return (
    <Navbar className='navbar__section' bg='dark' data-bs-theme='dark'>
      <Container className='navbar__container'>
        <Navbar.Brand href='#home' className='logo'>
          <img src='https://firebasestorage.googleapis.com/v0/b/weather-7f851.appspot.com/o/Group%2060.png?alt=media&token=caf90c15-856f-4d94-a71b-587c6df6f04a' alt='mamamia-logo' />
        </Navbar.Brand>

        <Nav className='me-auto'>
        <div className='nav__text'>
          <NavLink to='/' className={setActiveClass}>
            Home
          </NavLink>
          <NavLink  className={setActiveClass} onClick={handleCartButtonClick}>
            <FaShoppingCart />
          </NavLink>
        </div>
      </Nav>
      
      </Container>
      <ModalCarrito show={showModal} onHide={handleCloseModal} /* Otros props según tu implementación */ />
    </Navbar>
  );
};

export default Navegacion;
