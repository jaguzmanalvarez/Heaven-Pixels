import React from 'react';
import styled from 'styled-components';

// Contenedor principal
const NavContainer = styled.nav`
  background-color: #5c6fff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// Agrupacion de elementos
const NavGroup = styled.div`
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
// Nombre de Usuario
const UserName = styled.span`
  font-size: 14px;
  color: #ffffff;
  margin-right: 10px;
`;

// Avatar - Imagen
const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

// Para centrar INICIO y MIS JUEGOS
const CenterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
  justify-content: center;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavGroup>
        <NavLink href="/">Heaven Pixels</NavLink>
      </NavGroup>

      <CenterGroup>
        <NavLink href="/">INICIO</NavLink>
        <NavLink href="/my-games">MIS JUEGOS</NavLink>
      </CenterGroup>

      <NavGroup>
        <UserName>Usuario</UserName>
        <Avatar src="https://pbs.twimg.com/media/GBGWryfXkAAZkyk?format=jpg&name=4096x4096" alt="Avatar" />
      </NavGroup>
    </NavContainer>
  );
};

export default Navbar;
