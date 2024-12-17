import React, { useEffect, useRef, useState } from "react";
import { Container, AuthInput, AuthInputGroup, SubContainer, WhiteButton, BlueButton, BackButton, FailMessage } from "../../styles/auth/AuthStyles";

const LoginPage = ({onSwitchView, handleLogin}) => {

    // Booleano que verifica si ha ocurrido un error
    const [failed, setFailed] = useState(false);
    const [failMessage, setFailMessage] = useState('');

    // Otorga el focus al Input de UserName, al cargar la página y al ocurrir un error de inicio de sesión
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
      }, [failed])

    // useState que controla los valores ingresados en el formulario
    const [typedUser, setTypedUser] = useState({
        userName: "",
        password: ""
    });

    // Manejador de cambios en los inputs presentados en la pantalla
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTypedUser({
            ...typedUser,
            [name]: value
        });
    };

    // Manejador del submit del formulario en pantalla
    const handleSumbmit = (e) => {

        e.preventDefault();

        if( typedUser.userName) {
            if(typedUser.password){
                // handleLogin devuelve true si el usuario ingresa datos correctos, devuelve 
                // false si no se encuentra el username o si la contraseña es incorrecta
                if(handleLogin(typedUser)){
                    setTypedUser( { userName:"", password:"" } );
                    onSwitchView('main');
                }else{
                    setFailed(true);
                    //**
                    // 
                    // 
                    // FALTA MOSTRAR GRÁFICAMENTE EL FALLO DE INICIO DE SESION, CON ANIMACIÓN O CAMBIO DE COLOR
                    // YA QUE ACTUALMENTE SOLO MUESTRA EL TEXTO ARRIBA
                    // 
                    // 
                    //  *//
                    setTypedUser({ userName: typedUser.userName, password: "" });
                    setFailMessage("Error al inciar sesión: Usuario o contraseña erroneos");
                }
            }else{
                setFailed(true);
                setFailMessage("Error al inciar sesión: Campo de contraseña vacío");
            }
        }else{
            setFailed(true);
            setFailMessage("Error al inciar sesión: Campo de usuario vacío");
        }
    };

    return(
        <div className="loginBg">
            <div>
            <BackButton onClick={() => onSwitchView("main")}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M15.5 19l-7-7 7-7" />
                </svg>
                Regresar
            </BackButton>
            </div>
            <Container>
                {failed && (<FailMessage>{failMessage}</FailMessage>)}
                <form onSubmit={handleSumbmit}>
                    <AuthInputGroup>
                    <h2>Iniciar Sesión</h2>
                        <AuthInput 
                            value={typedUser.userName}
                            type="text" 
                            name="userName" 
                            placeholder="Ingrese el nombre de usuario"
                            onChange={handleChange} 
                            ref={inputRef}
                        ></AuthInput>
                        <AuthInput
                            value={typedUser.password}
                            type="password" 
                            name="password" 
                            placeholder="Ingrese la contraseña"
                            onChange={handleChange} 
                        ></AuthInput>
                    </AuthInputGroup>
                    <BlueButton onClick={()=>setFailed(false)}>Iniciar sesión</BlueButton>
                </form>
                <SubContainer>
                <h2>¿No tienes cuenta?</h2>
                <WhiteButton onClick={()=>onSwitchView('register')} >Registrarse</WhiteButton>
                </SubContainer>
            </Container>
        </div>
    );
}

export default LoginPage;