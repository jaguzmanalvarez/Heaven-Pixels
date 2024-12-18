
// Componente llamado desde el archivo src/App.js

import React from "react";
import styled from "styled-components";
import { GameImage } from "../../styles/game/GameStyles";

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

// Contenedor de reseña
const ReviewContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 15px; 
    margin: 15px 0;
    font-family: Arial, sans-serif;
    margin-left: 20px;
`;

const ProfilePlaceholder = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ccc;
    border-radius: 50%;
    flex-shrink: 0;
    background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
    background-size: cover;
    background-position: center;
`;


const ReviewContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const UserName = styled.p`
    font-weight: bold;
    margin: 0;
    color: #000;
    margin-bottom: 5px;
`;


const Comment = styled.p`
    margin: 5px 0;
    color: #333;
`;

const Stars = styled.div`
    display: flex;

    span {
        font-size: 18px;
        color: #999;
        margin-right: 3px;

        &.filled {
            color: #000; /* Color de estrella llena */
        }
    }
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
                            <button onClick={onEditGame}>Editar</button>
                            <button onClick={onDeleteGame}>Eliminar</button>
                        </div>
                    )}
                </div>
                <hr />
                <div>
                <h2>Reseñas:</h2>
                    {game.reviews.length === 0 ? (
                        <p>No hay reseñas aún.</p>
                    ) : (
                        game.reviews.map((review, index) => {
                            const renderStars = () => {
                                const stars = [];
                                for (let i = 1; i <= 5; i++) {
                                    stars.push(
                                        <span key={i} className={i <= review.rating ? "filled" : ""}>
                                            ★
                                        </span>
                                    );
                                }
                                return stars;
                            };

                        return (
                        <ReviewContainer key={index}>
                            <ProfilePlaceholder image={review.userImage} />
                             <ReviewContent>
                                 <UserName>{review.author}</UserName>
                                 <Stars>{renderStars()}</Stars>
                                 <Comment>{review.comment}</Comment>
                             </ReviewContent>
                         </ReviewContainer>
                        );
                        })
                    )}
                </div>
            </Modal>
        </ModalContainer>
    );
}

export default GameModalPage;