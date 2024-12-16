import styled, { keyframes } from "styled-components";

// Este archivo contiene los estilos que se utilizan en las pantallas de 
// Inicio de sesión (src/components/auth/LoginPage.js) 
// y de Registro de Usuario (src/components/auth/RegisterPage.js) 
// Se utiliza CSS incrustado para reutilizar el código entre las 2 pantallas anteriormente mencionadas

export const Container = styled.div`
    display: flex;
    width: 800px;
    height: 550px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #ffffff;
    margin: 30px auto;
    box-shadow: 0 4px 12px rgba(0.1,0.2,0.3,0.5);
    text-align: center;
    box-sizing: border-box;
`;

export const SubContainer = styled.div`
    padding: 200px 1px;
    width: 340px;
    background-color: #5c6fff;
`;

export const Container2 = styled.div`
    display: flex;
    width: 800px;
    height: 550px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #ffffff;
    margin: 30px auto;
    box-shadow: 0 4px 12px rgba(0.1,0.2,0.3,0.5);
    text-align: center;
    box-sizing: border-box;
`;

export const SubContainer2 = styled.div`
    padding: 200px 1px;
    width: 600px;
    background-color: #5c6fff;
`;

export const AuthInputGroup = styled.div`
  width: 100%;
  padding: 100px 15px;
  display: block;
  justify-content: space-between;
`;

export const AuthInputGroupReg = styled.div`
  width: 100%;
  padding: 70px 15px;
  display: block;
  justify-content: space-between;
`;

export const WhiteButton = styled.button`
    font-size: 16px;
    font-weight: bold;
    background: #FFFFFF;
    border-radius: 25px;
    border: 2px solid #FFFFFF;
    margin: 0 0.3em;
    padding: 0.8em 2em;
    cursor: pointer;
    color: #5c6fff; 
    transition: background 0.3s ease, border-color 0.3s ease;

    &:hover {
        background: rgb(203, 203, 203);
        border-color: rgb(203, 203, 203);
        color: #4956d4;
    }

    &:active {
        background: rgb(123, 123, 123);
        border-color: rgb(123, 123, 123);
        color:#3a45b2;
        transform: scale(0.99);
    }
`;

export const BlueButton = styled.button`
    font-size: 16px;
    font-weight: bold;
    background: #5c6fff;
    border-radius: 25px;
    border: 2px solid #5c6fff;
    margin: 0 0.3em;
    padding: 0.8em 2em;
    cursor: pointer;
    color: white; 
    transition: background 0.3s ease, border-color 0.3s ease;

    &:hover {
        background: #4956d4;
        border-color: #4956d4;
        color:rgb(203, 203, 203);
    }

    &:active {
        background: #3a45b2;
        border-color: #3a45b2;
        color:rgb(123, 123, 123);
        transform: scale(0.99);
    }
`;


export const AuthInput = styled.input`
    width: 80%;
    padding: 12px;
    margin: 8px 0;
    border-radius: 20px;
    border-style: none;
    border-color: #E9EFEF;
    font-size: 16px;
    background: #E9EFEF;
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