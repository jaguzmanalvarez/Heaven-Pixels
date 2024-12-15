import styled, { keyframes } from "styled-components";

// Este archivo contiene los estilos que se utilizan en las pantallas de 
// Inicio de sesión (src/components/auth/LoginPage.js) 
// y de Registro de Usuario (src/components/auth/RegisterPage.js) 
// Se utiliza CSS incrustado para reutilizar el código entre las 2 pantallas anteriormente mencionadas

export const Container = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 30px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    text-align: center;
    box-sizing: border-box;
`;

export const AuthInputGroup = styled.div`
    text-align: left;
    margin-bottom: 20px;
`;

export const AuthInput = styled.input`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border-radius: 8px;
    font-size: 16px;
    color: #333;
    transition: border 0.3s, box-shadow 0.3s;
    box-sizing: border-box;

    &:focus{
        border-color: #3498db;
        box-shadow: 0 0 8px rgba(52,152, 219, 0.3);
    }
`;

export const WarningLabel = styled.label`
    color: red;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const FadeIn = styled.div`
  animation: ${fadeIn} 0.4s ease-in-out;
`;
