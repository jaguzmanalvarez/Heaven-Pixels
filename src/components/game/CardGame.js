import React from 'react';
import styled from 'styled-components';
import { GameImage } from '../../styles/game/GameStyles';

// Contenedor principal de la tarjeta
const CardContainer = styled.div`
  display: flex;
  width: 400px;
  height: 280px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: #ffffff;
  margin: 30px 40px;
  transition: box-shadow 0.25s;
  cursor: pointer;

  &:hover{
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
  }
`;

// Contenedor de detalles (derecha)
const DetailsContainer = styled.div`
  width: 50%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Título del juego
const Title = styled.h2`
  font-size: 1.3rem;
  margin: 0;
  color: #333333;
`;

// Año de lanzamiento
const Year = styled.span`
  font-size: 0.9rem;
  color: #777777;
`;

// Descripción
const Description = styled.p`
  font-size: 0.9rem;
  color: #555555;
  margin: 10px 0;
`;

// Línea divisoria
const Divider = styled.hr`
  border: none;
  border-top: 1px solid #cccccc;
  margin: 5px 0;
`;

// Estrellas de calificación
const Stars = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  color: #6a35f5; /* Morado */
`;

// Reseña
const ReviewLink = styled.a`
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  color: #6a35f5;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

// Componente principal
const CardGame = ({ game, onOpenModal, onOpenReview }) => {
  return (
    <CardContainer onClick={() => onOpenModal(game)}>
      <GameImage src={game.cardImg} alt={game.title} />
      <DetailsContainer>
        <div>
          <Title>{game.title}</Title>
          <Year>{game.date}</Year>
          <Description>{game.descCard}</Description>
          <Divider />
        </div>
        <div>
          <Stars>★★★★★</Stars>
          <ReviewLink onClick={(e) => {e.stopPropagation(); onOpenReview(game); }}>Añadir una reseña...</ReviewLink>
        </div>
      </DetailsContainer>
    </CardContainer>
  );
};


export default CardGame;
