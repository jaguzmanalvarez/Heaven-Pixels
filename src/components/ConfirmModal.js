import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    width: 100%
`;

const Modal = styled.div`
    background-color: white;
    width: 25%;
    display: inline-block;
    padding: 20px;
    border-radius: 10px;
`;

const Button = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 8px 18px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
  }
`;

const CancelButton = styled(Button)`
  background-color: #bdc3c7;
  &:hover {
    background-color: #95a5a6;
  }
`;
const AcceptButton = styled(Button)`
    background-color: #2ecc71;
    &:hover {
        background-color: #27ae60;
    }
`;

const DeleteButton = styled.button`
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

const ConfirmModal = ({title, text, onSetValue, onCloseModal, isDelete=false}) => {

    const handleOption = (value) =>{
        onSetValue(value);
        onCloseModal();
    }

    return(
        <ModalContainer>
            <Modal>
                <h1>{title}</h1>
                <p>{text}</p>
                <div>
                    {isDelete ?  
                        (<DeleteButton onClick={()=>{handleOption(true);}}>Eliminar</DeleteButton>)
                    : 
                        (<AcceptButton onClick={()=>{handleOption(true);}}>Aceptar</AcceptButton>)}
                    <CancelButton onClick={()=>{handleOption(false);}}>Cancelar</CancelButton>
                </div>
                    
            </Modal>
        </ModalContainer>
    );
}

export default ConfirmModal