import React, { useEffect, useRef, useState } from "react";
import { Container, AuthInput, AuthInputGroup, WarningLabel, FadeIn } from "../../styles/auth/AuthStyles";

const LoginPage = ({onSwitchView, handleLogin}) => {

    // Booleano que verifica si ha ocurrido un error
    const [failed, setFailed] = useState(false);
    const [failMessage, setFailMessage] = useState("");

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
                    console.log("USUARIO O CONTRASEÑA INCORRECTOS");
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
        <div>
            <div>
                <button onClick={()=>onSwitchView('main')}>Volver</button>
            </div>
            <Container>
                <h2>Iniciar Sesión</h2>
                {failed && (<FadeIn><WarningLabel>{failMessage}</WarningLabel></FadeIn>)}
                <form onSubmit={handleSumbmit}>
                    <AuthInputGroup>
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
                    <button>Iniciar sesión</button>
                </form>
                <hr />
                <button onClick={()=>onSwitchView('register')}>¿No tienes cuenta? Registrate gratis</button>
            </Container>
        </div>
    );
}

export default LoginPage;