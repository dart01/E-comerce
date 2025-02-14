
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled(Link)`
  margin: 0.5rem 0;
  color: #000;
  text-decoration: none;
  
  &:hover {
    color: #007bff;
  }
`;

const UserMenu = () => {
  const isLoggedIn = false; // Cambiar esto por la lógica real de autenticación

  return (
    <MenuContainer>
      {isLoggedIn ? (
        <>
          <MenuItem to="/profile">Ver Perfil</MenuItem>
          <MenuItem to="/logout">Cerrar Sesión</MenuItem>
        </>
      ) : (
        <>
          <MenuItem to="/login">Iniciar Sesión</MenuItem>
          <MenuItem to="/register">Registrarse</MenuItem>
        </>
      )}
    </MenuContainer>
  );
};

export default UserMenu;
