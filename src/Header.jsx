// Header.jsx

import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
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

const Logo = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  color: #fff; /* Cambiado a blanco para mejor contraste */
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
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
      <Logo>Tienda Minimalista</Logo>
      <UserCartContainer>
        <UserIcon>👤</UserIcon>
        <CartIcon>🛒</CartIcon>
      </UserCartContainer>
    </HeaderContainer>
  );
};

export default Header;