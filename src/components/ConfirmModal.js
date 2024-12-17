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
    height: 25%;
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

const ConfirmModal = ({title, text, onSetValue, onCloseModal}) => {

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
                    <AcceptButton onClick={()=>{handleOption(true);}}>Aceptar</AcceptButton>
                    <CancelButton onClick={()=>{handleOption(false);}}>Cancelar</CancelButton>
                </div>
                    
            </Modal>
        </ModalContainer>
    );
}

export default ConfirmModal