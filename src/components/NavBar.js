import React, { useState } from 'react';
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
  cursor: pointer;

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

const ListUserMenu = styled.ul`
  flex-direction: column;
  gap: 4;
`;

const DropDownUserMenu = styled.div`
  flex-direction: column;
  border-radius: 4px;
  padding: 15px;
  position:absolute;
  right: 5px;
  top: 55px;
  border: 2px solid black;
  background-color: white;

  &:before{
    content:'';
    position: absolute;
    top: -13.9px;
    right: 18px;
    width: 25px;
    height: 25px;
    transform: rotate(45deg);
    background-color: white;
    border-left: 2px solid black;
    border-top: 2px solid black;
  }
`;

const DropDownMenuItem = styled.li`
  cursor: pointer;
  padding: 5px;
  transition: background-color 0.25s, border-radius 0.25s;

  &:hover{
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const DropDownMenuItemLogout = styled.li`
  color:red;
  cursor: pointer;
  padding: 5px;
  transition: background-color 0.25s, border-radius 0.25s;

  &:hover{
    border-radius: 15px;
    background-color: rgba(255,0,0,0.5);
  }
`;

const Navbar = ( {user, isAuth, onSwitchView, onLogOut} ) => {

  const [onDropdownMenu, setOnDropdownMenu] = useState(false);

  const handleClick = (page) => {
    setOnDropdownMenu(false);
    onSwitchView(page);
  }

  return (
    <NavContainer>
      <NavGroup>
        <NavLink>Heaven Pixels</NavLink>
      </NavGroup>

      <CenterGroup>
        <NavLink onClick={()=>{onSwitchView('main')}}>INICIO</NavLink>
        <NavLink onClick={()=>{onSwitchView('mygames')}}>MIS JUEGOS</NavLink>
      </CenterGroup>

      <NavBarAuthButton isAuth={isAuth} user={user} onSwitchView={onSwitchView} setOnDropDownMenu={setOnDropdownMenu} />

      {onDropdownMenu &&(
        <DropDownUserMenu>
          <ListUserMenu>
            <DropDownMenuItem onClick={()=>{handleClick('profile')}}>Perfil</DropDownMenuItem>
            {user.isAdmin===true && (<DropDownMenuItem onClick={()=>{handleClick('newgame')}} >Nuevo Juego</DropDownMenuItem>)}
            <DropDownMenuItem onClick={()=>{handleClick('options')}}>Opciones</DropDownMenuItem>
            <DropDownMenuItemLogout onClick={onLogOut}>Cerrar sesión</DropDownMenuItemLogout>
          </ListUserMenu>
        </DropDownUserMenu>
      )}

    </NavContainer>
  );
};

export default Navbar;
