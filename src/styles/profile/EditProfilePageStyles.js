// EditProfilePage.styles.js
import styled from "styled-components";

// Modal container que cubre toda la pantalla
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Fondo semi-transparente
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Para asegurarse de que la ventana modal esté encima
`;

// Contenedor del contenido de la ventana modal
export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
  
  h2 {
    margin-bottom: 20px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Campo de entrada para los datos del usuario
export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #5c6fff;
    outline: none;
  }
`;

// Botón para guardar los cambios
export const SaveButton = styled.button`
  background-color: #5c6fff;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
  
  &:hover {
    background-color: #4956d4;
  }
`;

// Botón para cerrar la ventana modal
export const CloseButton = styled.button`
  background-color: #ccc;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  font-size: 16px;

  &:hover {
    background-color: #aaa;
  }
`;
