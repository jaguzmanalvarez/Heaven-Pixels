import React, { useState } from "react";
import { ModalContainer, ModalContent, CloseButton, InputField, SaveButton } from "../../styles/profile/EditProfilePageStyles";

const EditProfilePage = ({ user, onClose, onSave }) => {
  const [userName, setUserName] = useState(user.userName);
  const [password, setPassword] = useState(user.password);
  const [pic, setPic] = useState(user.pic);

  // Esta función se llama cuando el usuario guarda los cambios
  const handleSave = () => {
    const updatedUser = { ...user, userName, password, pic };
    onSave(updatedUser); // Pasamos el usuario actualizado al componente padre
    onClose(); // Cerramos el modal después de guardar
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Editar Perfil</h2>
        {/* Campo de edición de nombre de usuario */}
        <InputField
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        {/* Campo de edición de contraseña */}
        <InputField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {/* Campo de edición de URL de la imagen de perfil */}
        <InputField
          type="text"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
          placeholder="Profile Picture URL"
        />
        <SaveButton onClick={handleSave}>Guardar</SaveButton>
        <CloseButton onClick={onClose}>Cancelar</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default EditProfilePage;
