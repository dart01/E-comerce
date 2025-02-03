import styled from 'styled-components';
import logo from './imagenes/logo.jpg'; // Importing the logo image

const HeaderContainer = styled.header`
  display: flex;
 
  align-items: center;
  width: 95%; /* Cambiado a 100% para ocupar todo el ancho */
  padding: 1rem 2rem;
  background-color: rgb(104, 103, 103);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed; /* Fijo en la parte superior */
  top: 0; /* Asegura que esté en la parte superior */
  left: 0; /* Asegura que esté alineado a la izquierda */
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
`;

const Logo = styled.img`
  height: 50px; /* Adjust height as needed */
  object-fit: contain; /* Maintain aspect ratio */
  
  margin: 0 auto; /* Center the logo */
  flex: 1; /* Allow the logo to take available space */
`;

const Nav = styled.nav`
  display: flex;
  
  flex: 1;
`;

const NavItem = styled.div`
  margin: 0 1rem;
  font-size: 1rem;
  color: #fff; /* Cambiado a blanco para mejor contraste */
  cursor: pointer;
  
  &:hover {
    color: #007bff;
  }
`;

const UserCartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  color: #fff; /* Cambiado a blanco para mejor contraste */
`;

const CartIcon = styled.div`
  cursor: pointer;
  color: #fff; /* Cambiado a blanco para mejor contraste */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavItem>Inicio</NavItem>
        <NavItem>Productos</NavItem>
        <NavItem>Contacto</NavItem>
      </Nav>
      <Logo src={logo} alt="Tienda Minimalista Logo" /> {/* Updated to use logo image */}
      <UserCartContainer>
        <UserIcon>👤</UserIcon>
        <CartIcon>🛒</CartIcon>
      </UserCartContainer>
    </HeaderContainer>
  );
};

export default Header;
