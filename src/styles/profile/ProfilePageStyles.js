import styled from "styled-components";

// Contenedor principal con un fondo sutil y centrado
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f9f9f9;
  min-height: 100vh;
`;

// Título principal estilizado
export const Header = styled.h1`
  font-size: 2rem;
  color: #2d2d2d;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

// Sección de perfil en un card
export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

// Imagen de perfil moderna con un borde decorativo
export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 20px;
  border: 2px solid #000000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// Contenedor de información del usuario
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// Nombre de usuario destacado
export const UserName = styled.h2`
  font-size: 1.8rem;
  color:rgb(0, 0, 0);
  font-weight: 600;
`;

// Sección para mostrar información adicional
export const InfoSection = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  margin-bottom: 30px;

  h3 {
    font-size: 1.5rem;
    color: #333333;
    margin-bottom: 15px;
    font-weight: 600;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 5px;
  }
`;

// Lista estilizada para información
export const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 1rem;
    color: #555555;
    margin-bottom: 10px;

    strong {
      color: #333333;
      font-weight: 500;
    }
  }
`;

// Botón de editar moderno
export const EditButton = styled.button`
  background: linear-gradient(135deg, #5c6fff, #788bff);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #4956d4, #5c6fff);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const LogOutButton = styled.button`
background: linear-gradient(135deg,rgb(253, 97, 97),rgb(251, 56, 56)); /* Rojo con tonos más intensos */
color: white;
border: none;
padding: 10px 20px;
border-radius: 25px;
font-size: 1rem;
font-weight: 600;
cursor: pointer;
transition: all 0.3s ease;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

&:hover {
  background: linear-gradient(135deg,rgb(248, 30, 30),rgb(251, 97, 97)); /* Rojo oscuro para el hover */
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  transform: translateY(-3px);
}

&:active {
  transform: translateY(0);
}
`;

export const DeleteUserButton = styled.button`
background: linear-gradient(135deg,rgb(148, 7, 7),rgb(175, 6, 6)); /* Rojo oscuro para eliminar cuenta */
color: white;
border: none;
padding: 10px 20px;
border-radius: 25px;
font-size: 1rem;
font-weight: 600;
cursor: pointer;
transition: all 0.3s ease;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

&:hover {
  background: linear-gradient(135deg,rgb(171, 8, 8),rgb(187, 7, 7)); /* Rojo aún más oscuro para el hover */
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  transform: translateY(-3px);
}

&:active {
  transform: translateY(0);
}
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    &:first-child {
      background-color: #e60000;
      color: white;
    }

    &:last-child {
      background-color: #ddd;
      color: #333;
    }
  }
`;

