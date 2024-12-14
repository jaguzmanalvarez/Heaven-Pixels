import React from 'react';
import styled from 'styled-components';

// Contenedor principal de la tarjeta
const CardContainer = styled.div`
  display: flex;
  width: 500px;
  height: 280px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: #ffffff;
`;

// Imagen del juego
const GameImage = styled.img`
  width: 40%;
  object-fit: cover;
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
const CardGame = () => {
  return (
    <CardContainer>
      <GameImage
        src="https://image.api.playstation.com/vulcan/ap/rnd/202405/2406/672cc5f97e84c564649093d4f6a3726f328e0de1814ab2e0.png" // Reemplaza con tu imagen
        alt="Metaphor: Re Fantazio"
      />
      <DetailsContainer>
        <div>
          <Title>Metaphor: Re Fantazio</Title>
          <Year>2024</Year>
          <Description>Inserte descripción</Description>
          <Divider />
        </div>
        <div>
          <Stars>★★★★★</Stars>
          <ReviewLink href="#">Aquí reseña</ReviewLink>
        </div>
      </DetailsContainer>
    </CardContainer>
  );
};

export default CardGame;
