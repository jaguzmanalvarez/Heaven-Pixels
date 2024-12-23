
// Componente llamado desde el archivo src/App.js

import React from "react";
import styled from "styled-components";
import { DeleteGameButton, EditGameButton } from "../../styles/game/GameStyles";

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

const FloatingCloseButton = styled.button`
  position: absolute;
  top: 30px;
  left: 60px;
  margin: 50px 0px;
  padding: 5px 10px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 70px;
  height: 70px;
  font-size: 1.3rem;
  font-weight: bold;
  z-index: 100; /* Para asegurarse de que esté encima de otros elementos */
  
  &:hover {
    background-color:rgb(212, 212, 212);
  }
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
                            <EditGameButton style={{marginRight:"10px"}} onClick={onEditGame}>Editar</EditGameButton>
                            <DeleteGameButton onClick={onDeleteGame}>Eliminar</DeleteGameButton>
                        </div>
                    )}
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
                <div>
                    <FloatingCloseButton onClick={onCloseModal}>X</FloatingCloseButton>
                </div>
            </Modal>
        </ModalContainer>
    );
}

export default GameModalPage;