
// Componente llamado desde el archivo src/App.js

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
    width: 75%;
    height: 100%;
    overflow-y: auto;
`;

const GameImg = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #555555;
  margin: 25px 10%;
`;

const CenterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
  justify-content: center;
`;

const PlatformBox = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 1px 15px;
  font-size: 1rem;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const PlatformsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 10px 50px;
  width: 100%;
  max-width: 55%;
`;

const DevPubContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: center;
  background-color:rgb(234, 234, 234);
  margin: 10px 23%;
  width: 600px;
  border-radius: 5px;
  text-align: center;
`;

const Label = styled.p`
  font-weight: bold;
`;

const GameModalPage = ({game, onCloseModal, isAdmin, onEditGame, onDeleteGame}) => {

    return (
        <ModalContainer onClick={onCloseModal}>
            <Modal onClick={(e)=>{ e.nativeEvent.stopImmediatePropagation(); e.stopPropagation();}}>
                <div>
                    <GameImg src={game.formImg} alt={game.title}/>
                    <h1>{game.title}</h1>
                    <p>Fecha de salida: {game.date}</p>
                    <CenterGroup>
                        <PlatformsContainer>
                            {game.platforms.map((platform, index) => (
                            <PlatformBox key={index}>{platform}</PlatformBox>
                        ))}
                    </PlatformsContainer>
                    </CenterGroup>
                    
                    <DevPubContainer>
                        <Label>Desarrollador:</Label>
                        <Label>Publisher:</Label>
                        <p>{game.dev}</p>
                        <p>{game.publisher}</p>
                    </DevPubContainer>
                    <Description>
                        {game.desc}
                    </Description>
                </div>
                {isAdmin &&(
                        <div>
                            <button onClick={onEditGame}>Editar</button>
                            <button onClick={onDeleteGame}>Eliminar</button>
                        </div>
                    )}
                <hr />
                <div>
                    Aquí debería ir la sección de reseñas
                </div>
                <div>
                    <button onClick={onCloseModal}>Cerrar</button>
                </div>
            </Modal>
        </ModalContainer>
    );
}

export default GameModalPage;