
// Componente llamado desde el archivo src/App.js

import React from "react";
import styled from "styled-components";
import { DeleteGameButton, EditGameButton, GameImage } from "../../styles/game/GameStyles";

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
`;

const GameModalPage = ({game, onCloseModal, isAdmin, onEditGame, onDeleteGame}) => {

    return (
        <ModalContainer onClick={onCloseModal}>
            <Modal onClick={(e)=>{ e.nativeEvent.stopImmediatePropagation(); e.stopPropagation();}}>
                <div>
                    <button onClick={onCloseModal}>Cerrar</button>
                </div>
                <h1>{game.title}</h1>
                <div>
                    <GameImage src={game.cardImg} alt={game.title}/>
                    <p>
                        Fecha de salida: {game.date}<br />
                        Desarrollador: {game.dev}<br />
                        Publisher: {game.publisher}<br />
                        Plataformas: {game.platforms}<br />
                    </p>
                    <p>
                        Descripción: {game.desc}
                    </p>
                    {isAdmin &&(
                        <div>
                            <EditGameButton onClick={onEditGame}>Editar</EditGameButton>
                            <DeleteGameButton onClick={onDeleteGame}>Eliminar</DeleteGameButton>
                        </div>
                    )}
                </div>
                <hr />
                <div>
                    Aquí debería ir la sección de reseñas
                </div>
            </Modal>
        </ModalContainer>
    );
}

export default GameModalPage;