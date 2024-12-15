import React from "react";
import styled from 'styled-components';

// Agrupacion de elementos
export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.5s;

  &:hover{
    background-color:#627EFC;
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
            <NavGroup onClick={()=>setOnDropDownMenu((prev) => !prev)}>
                <UserName>{user.userName}</UserName>
                <Avatar src={user.pic} alt={user.userName} />
            </NavGroup>
        );
    }else{
        return(
            <NavGroup>
                <button onClick={()=>onSwitchView('login')}>Iniciar sesión</button>
                <button onClick={()=>onSwitchView('register')}>Registrarse</button>
            </NavGroup>
        );
    }
}

export default NavBarAuthButton;