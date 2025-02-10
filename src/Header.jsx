import styled from 'styled-components';
import { useState } from 'react';
import Login from './login.jsx';
import logo from './imagenes/logo.jpg';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  padding: 1rem 2rem;
  background-color: rgb(104, 103, 103);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
  object-fit: contain;
`;

const Nav = styled.nav`
  display: flex;
  flex: 0 1 auto;
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
`;

const CartIcon = styled(Link)`
  cursor: pointer;
  color: #fff;
  text-decoration: none;
`;

const SearchIcon = styled(FaSearch)`
  margin-right: 1rem;
  cursor: pointer;
  color: #fff;
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
        <NavItem to="/productos">Productos</NavItem>
        <NavItem to="/contacto">Contacto</NavItem>
      </Nav>
      
      <Link to="/">
        <Logo src={logo} alt="Tienda Minimalista Logo" />
      </Link>

      <UserCartContainer>
        <SearchIcon />
        <UserIcon onClick={toggleLogin}>👤</UserIcon>
        <CartIcon to="/cart">🛒</CartIcon>
      </UserCartContainer>

      {isLoginOpen && <Login />}
    </HeaderContainer>
  );
};

export default Header;
