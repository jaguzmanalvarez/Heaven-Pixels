import React, { useState } from "react";
import { Container, AuthInput, AuthInputGroup } from "../../styles/auth/AuthStyles";

const RegisterPage = ({onSwitchView, user}) => {

    const [typedUser, setTypeduser] = useState({
        userName: "",
        email: "",
        password: "",
        confirmedPassword: "",
    });    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTypeduser({
            ...typedUser,
            [name]: value
        });
    };

    const handleSumbmit = (e) => {

        e.preventDefault();

        if( typedUser.userName && typedUser.email && typedUser.confirmedPassword && typedUser.password ) { 

        }

        
    }

    return (
        <div>
            <div>
                <button onClick={()=>onSwitchView('main')}>Volver</button>
            </div>
            <Container>
                <h2>Registrarse</h2>
                <form onSubmit={handleSumbmit}>
                    <AuthInputGroup>
                        <AuthInput 
                            value={typedUser.username}
                            type="text" 
                            name="userName" 
                            placeholder="Ingrese el nombre de usuario"
                            onChange={handleChange} 
                        ></AuthInput>
                        <AuthInput 
                            value={typedUser.username}
                            type="text" 
                            name="email" 
                            placeholder="Ingrese su correo electronico"
                            onChange={handleChange} 
                        ></AuthInput>
                        <AuthInput
                            value={typedUser.password}
                            type="password" 
                            name="password" 
                            placeholder="Ingrese la contraseña"
                            onChange={handleChange} 
                        ></AuthInput>
                        <AuthInput
                            value={typedUser.confirmedPassword}
                            type="password" 
                            name="confirmedPassword" 
                            placeholder="Confirme la contraseña"
                            onChange={handleChange} 
                        ></AuthInput>
                    </AuthInputGroup>
                    <button>Registrarse</button>
                </form>
                <hr />
                <button onClick={()=>onSwitchView('login')}>¿Ya tienes cuenta? Inicia sesión</button>
            </Container>
        </div>
    );
}

export default RegisterPage;