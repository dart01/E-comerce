import styled from 'styled-components';
import { useState } from 'react';
import logo from './imagenes/logo.jpg';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu.jsx'; // Importar el nuevo componente UserMenu

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 2rem;
  background-color: #343a40;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 60px; /* Ajustar la altura */
  box-sizing: border-box; /* Asegurar que el padding no afecte el ancho total */
`;

const Logo = styled.img`
  height: 40px; /* Ajustar la altura del logo */
  object-fit: contain;
`;

const Nav = styled.nav`
  display: flex;
  flex: 1; /* Permitir que el nav ocupe el espacio disponible */
  justify-content: flex-start;
`;

const NavItem = styled(Link)`
  margin: 0 1rem;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  
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
  color: #fff;
  position: relative;
  font-size: 1.5rem;
`;

const CartIcon = styled(Link)`
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  margin-right: 1rem; /* Asegurarse de que el icono del carrito esté presente */
`;

const SearchIcon = styled(FaSearch)`
  margin-right: 1rem;
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
`;

const LoginContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  border-radius: 4px;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <NavItem to="/">Inicio</NavItem>
        <NavItem to="/products">Productos</NavItem>
        <NavItem to="/contacto">Contacto</NavItem>
      </Nav>
      
      <LogoContainer>
        <Link to="/">
          <Logo src={logo} alt="Tienda Minimalista Logo" />
        </Link>
      </LogoContainer>

      <UserCartContainer>
        <SearchIcon />
        <UserIcon onClick={toggleLogin}>
          👤
          {isLoginOpen && (
            <LoginContainer>
              <UserMenu /> {/* Cambiar Login por UserMenu */}
            </LoginContainer>
          )}
        </UserIcon>
        <CartIcon to="/cart">🛒</CartIcon> {/* Mover el icono del carrito aquí */}
      </UserCartContainer>

    </HeaderContainer>
  );
};

export default Header;
