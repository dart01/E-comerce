import styled from 'styled-components';
import logo from './imagenes/logo.jpg'; // Importing the logo image
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between; /* Align items properly */
  align-items: center;
  width: 95%; /* Cambiado a 100% para ocupar todo el ancho */
  padding: 1rem 2rem;
  background-color: rgb(104, 103, 103);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  top: 0; /* Asegura que esté en la parte superior */
  left: 0; /* Asegura que esté alineado a la izquierda */
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
`;

const Logo = styled.img`
  height: 50px; /* Adjust height as needed */
  object-fit: contain; /* Maintain aspect ratio */
`;

const Nav = styled.nav`
  display: flex;
  flex: 0 1 auto; /* Adjusted to prevent it from taking all available space */
  justify-content: flex-start; /* Align navigation items to the left */
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

const SearchIcon = styled(FaSearch)`
  margin-right: 1rem;
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
        <SearchIcon />
        <UserIcon>👤</UserIcon>
        <CartIcon>🛒</CartIcon>
      </UserCartContainer>
    </HeaderContainer>
  );
};

export default Header;
