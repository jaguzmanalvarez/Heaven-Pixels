import React from "react";
import styled from 'styled-components';

// Agrupacion de elementos de usuario
const NavGroupUser = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  transition: background-color 0.5s;
  cursor: pointer;
  
  &:hover{
    background-color:#627EFC;
  }
`;

// Agrupación de elementos
const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  transition: background-color 0.5s;
`;

// Botones
const AuthButton = styled.button`
    font-size: 12px;
    font-weight: bold;
    background: #5c6fff;
    border-radius: 5px;
    border: 2px solid #5c6fff;
    margin: 0 0.3em;
    padding: 0.5em 1.2em;
    cursor: pointer;
    color: white; 
    transition: background 0.3s ease, border-color 0.3s ease;

    &:hover {
        background: #FFFFFF;
        border-color: #FFFFFF;
        color: #5c6fff;
    }

    &:active {
        background: #C0C0C0;
        border-color: #C0C0C0;
        color:rgb(27, 52, 242);
        transform: scale(0.99);
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

const NavBarAuthButton = ({ user, isAuth, onSwitchView, setOnDropDownMenu }) => {
    
    if(isAuth){
        return(
            <NavGroupUser onClick={()=>setOnDropDownMenu((prev) => !prev)}>
                <UserName>{user.userName}</UserName>
                <Avatar src={user.pic} alt={user.userName} />
            </NavGroupUser>
        );
    }else{
        return(
            <NavGroup>
                <AuthButton onClick={()=>onSwitchView('login')}>Iniciar sesión</AuthButton>
                <AuthButton onClick={()=>onSwitchView('register')}>Registrarse</AuthButton>
            </NavGroup>
        );
    }
}

export default NavBarAuthButton;