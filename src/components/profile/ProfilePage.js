import React, { useState } from "react";
import {Container,Header,ProfileSection,ProfileImage,UserInfo,UserName,InfoSection,InfoList,EditButton, LogOutButton,DeleteUserButton, Modal, ModalContent, ModalActions, NavMargin} from "../../styles/profile/ProfilePageStyles";
import EditProfilePage from "./EditProfilePage";

const ProfilePage = ({ loggedUser, onUpdateUser, onSwitchView, onLogOut, onDeleteAccount }) => {
  const [user, setUser] = useState(loggedUser); // Para manejar los datos del usuario
  const [isModalOpen, setIsModalOpen] = useState(false); // Para controlar la ventana modal de editar el usuario
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Para controlar la ventana modal de eliminación

  const handleSave = (updatedUser) => {
    onUpdateUser(updatedUser); // Aquí se llama a la función que actualiza el estado de los usuarios
    setUser(updatedUser); // Actualizar el estado al usuario actualizado
  };

  const handleEditClick = () => {
    setIsModalOpen(true); // Abrir la modal de edición
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cerrar la modal de edición
  };

  // Abrir el modal de confirmación de eliminación
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  // Cerrar el modal de confirmación de eliminación
  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  // Confirmar eliminación de la cuenta
  const handleConfirmDelete = () => {
    onDeleteAccount(user.id); // Llamar a la función que elimina la cuenta del usuario
    onLogOut();
    onSwitchView('main'); // Regresar a la pantalla principal después de eliminar
  };

  return (
    <NavMargin>
    <Container>
      <Header>Mi Perfil</Header>

      <ProfileSection>
        <ProfileImage
          src={user.pic || "https://i.pinimg.com/550x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg"}
          alt="Perfil"
        />
        <UserInfo>
          <UserName>{user.userName || "Nombre de usuario no disponible"}</UserName>
        </UserInfo>
      </ProfileSection>

      <InfoSection>
        <h3>Información del Usuario</h3>
        <InfoList>
          <li>
            <strong>Correo electrónico:</strong> {user.email || "No disponible"}
          </li>
          <li>
            <strong>Tipo de Usuario:</strong> {loggedUser.isAdmin ? "Administrador" : "Regular"}
          </li>
        </InfoList>
      </InfoSection>

      <div style={{ display: "flex", gap: "50px" }}>
        <EditButton onClick={handleEditClick}>Editar Perfil</EditButton>
        <LogOutButton onClick={()=> {onLogOut(); onSwitchView('main')}}>Cerrar Sesión</LogOutButton>
        <DeleteUserButton onClick={handleDeleteClick} >Eliminar Cuenta</DeleteUserButton>
      </div>
      

      {/* Modal para editar perfil */}
      {isModalOpen && (
        <EditProfilePage
          user={user}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}

      {/* Modal de confirmación de eliminación */}
      {isDeleteModalOpen && (
        <Modal>
          <ModalContent>
            <h2>¿Estás seguro que deseas eliminar esta cuenta?</h2>
            <ModalActions>
              <button onClick={handleConfirmDelete} style={{ backgroundColor: "#ddd", color: "#333" }}>Aceptar</button>
              <button onClick={handleCancelDelete} style={{ backgroundColor: "#e60000", color: "white" }}>Cancelar</button>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}

    </Container>
    </NavMargin>
  );
};

export default ProfilePage;
