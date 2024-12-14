import React from "react";
import { NavGroup } from "./NavBar";
import styled from 'styled-components';

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

const NavBarAuthButton = ({ isAuth, onSwitchView }) => {
    
    if(isAuth){
        return(
            <NavGroup>
                <UserName>Usuario</UserName>
                <Avatar src="https://yt3.googleusercontent.com/z6xwLe695U_4NygXaQm7EaXXAStOBTBI2RYKS5gb3aS73d8JoGvs_PpdHy47vMqEw4RVTZfSSQ=s160-c-k-c0x00ffffff-no-rj" alt="Avatar" />
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