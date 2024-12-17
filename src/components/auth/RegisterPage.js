import React, { useState } from "react";
import { Container2, AuthInput, AuthInputGroupReg, SubContainer2, WhiteButton, BlueButton, BackButton, SuccessMessage, FailMessage } from "../../styles/auth/AuthStyles";

const RegisterPage = ({ onSwitchView, addUser }) => {
  const [typedUser, setTypeduser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmedPassword: "",
    pic: ""
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [failed, setFailed] = useState(false);
  const [failMessage, setFailMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTypeduser({
      ...typedUser,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si todos los campos están completos y las contraseñas coinciden
    if (
      typedUser.userName &&
      typedUser.email &&
      typedUser.password &&
      typedUser.confirmedPassword &&
      typedUser.password === typedUser.confirmedPassword
    ) {
      // Crear un nuevo usuario con un id único (puedes usar Date.now() o alguna librería como UUID)
      const newUser = {
        id: Date.now(), // Usando el timestamp como id único
        userName: typedUser.userName,
        password: typedUser.password,
        isAdmin: false, // Por defecto no es administrador
        pic: typedUser.pic || "https://i.pinimg.com/550x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg", // Puedes dejarlo vacío o asignar una imagen por defecto
      };

      // Llamar a la función addUser pasando el nuevo usuario
      addUser(newUser);

      setSuccessMessage(true);

      // Limpiar el formulario después de registrar
      setTypeduser({
        userName: "",
        email: "",
        password: "",
        confirmedPassword: "",
        pic: ""
      });
    } else {
      setFailed(true);
      setFailMessage("Por favor, complete todos los campos correctamente.");
    }
  };

  return (
    <div>
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
      <Container2>
      {successMessage && <SuccessMessage>Tu cuenta se ha creado exitosamente, ahora puedes iniciar sesión.</SuccessMessage>}
      {failed && <FailMessage>{failMessage}</FailMessage>}
        <SubContainer2>
          <h2>¿Ya tienes cuenta?</h2>
          <WhiteButton onClick={() => onSwitchView('login')}>Inicia sesión</WhiteButton>
        </SubContainer2>
        
        <form onSubmit={handleSubmit}>
          <AuthInputGroupReg>
            <h2>Registrarse</h2>
            <AuthInput
              value={typedUser.userName}
              type="text"
              name="userName"
              placeholder="Ingrese el nombre de usuario"
              onChange={handleChange}
            />
            <AuthInput
              value={typedUser.email}
              type="email"
              name="email"
              placeholder="Ingrese su correo electrónico"
              onChange={handleChange}
            />
            <AuthInput
              value={typedUser.password}
              type="password"
              name="password"
              placeholder="Ingrese la contraseña"
              onChange={handleChange}
            />
            <AuthInput
              value={typedUser.confirmedPassword}
              type="password"
              name="confirmedPassword"
              placeholder="Confirme la contraseña"
              onChange={handleChange}
            />
            <AuthInput
              value={typedUser.pic}
              type="text"
              name="pic"
              placeholder="ingrese url de una imagen (opcional)"
              onChange={handleChange}
            />
          </AuthInputGroupReg>
          <BlueButton type="submit" onClick={()=>setFailed(false)} >Registrarse</BlueButton>
        </form>
      </Container2>
    </div>
  );
};

export default RegisterPage;
