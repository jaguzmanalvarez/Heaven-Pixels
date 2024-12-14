import React from 'react';
import styled from 'styled-components';
import NavBarAuthButton from './NavBarAuthButton.js';

// Contenedor principal
const NavContainer = styled.nav`
  background-color: #5c6fff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// Agrupacion de elementos
export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

//Enlace de navegacion
const NavLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Para centrar INICIO y MIS JUEGOS
const CenterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
  justify-content: center;
`;

const Navbar = ( {user, isAuth, onSwitchView} ) => {
  return (
    <NavContainer>
      <NavGroup>
        <NavLink href="/">Heaven Pixels</NavLink>
      </NavGroup>

      <CenterGroup>
        <NavLink href="/">INICIO</NavLink>
        <NavLink href="/my-games">MIS JUEGOS</NavLink>
      </CenterGroup>

      <NavBarAuthButton isAuth={isAuth} onSwitchView={onSwitchView} />
      
      <NavGroup>
        <UserName>{user.userName}</UserName>
        <Avatar src={user.pic} alt={user.userName} />
      </NavGroup>
    </NavContainer>
  );
};

export default Navbar;
