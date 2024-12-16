import React, { useState } from "react";
import { Container2, AuthInput, AuthInputGroupReg, SubContainer2, WhiteButton, BlueButton } from "../../styles/auth/AuthStyles";


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
            <Container2>
                <SubContainer2>
                    <h2>¿Ya tienes cuenta? </h2>
                    <WhiteButton onClick={()=>onSwitchView('login')}>Inicia sesión</WhiteButton>
                </SubContainer2>
                
                <form onSubmit={handleSumbmit}>
                    <AuthInputGroupReg>
                    <h2>Registrarse</h2>
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
                    </AuthInputGroupReg>
                    <BlueButton>Registrarse</BlueButton>
                </form>
            </Container2>
        </div>
    );
}

export default RegisterPage;