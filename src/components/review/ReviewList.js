import React from "react";
import styled from "styled-components";

// Estilos
const ReviewCard = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px;
  text-align: center;
`;

const GameImage = styled.img`
  width: 90%;
  height: 65%;
  border-radius: 8px;
`;

const ReviewText = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0;
`;

const StarContainer = styled.div`
  margin: 10px 0;
  color: #f4c150;
  font-size: 40px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 14px;

  &:hover {
    background-color: #3700b3;
  }
`;

const NoReviewsMessage = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
  margin-top: 20px;
`;

const GameTitle = styled.h2`
  font-size: 24px;
  margin: 20px 0;
  text-align: center;
`;

const GamelistDiv = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ReviewList = ({ games, currentUser, handleEditReview, handleDeleteReview }) => {
    // Verifica que games esté definido
    if (!games || !Array.isArray(games)) {
      return <NoReviewsMessage>No se encontraron juegos.</NoReviewsMessage>;
    }
  
    // Filtrar todas las reseñas del usuario
    const userReviews = games.flatMap((game) => 
      game.reviews ? game.reviews.filter((review) => review.author === currentUser.userName) : []
    );
  
    if (userReviews.length === 0) {
      return <NoReviewsMessage>No has dejado reseñas aún.</NoReviewsMessage>;
    }
  
    const renderStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <span key={i} className={i <= rating ? "filled" : ""}>
            ★
          </span>
        );
      }
      return stars;
    };
  
    return (
      <GamelistDiv>
        {userReviews.map((review, index) => (
          <ReviewCard key={index}>
            <GameImage src={review.gameImage} alt={review.gameName} />
            <GameTitle>{review.gameName}</GameTitle>
            <StarContainer>{renderStars(review.rating)}</StarContainer>
            <ReviewText>{review.comment}</ReviewText>
  
            <ButtonContainer>
              <Button onClick={() => handleEditReview(review)}>Editar</Button>
              <Button onClick={() => handleDeleteReview(review)}>Eliminar</Button>
            </ButtonContainer>
          </ReviewCard>
        ))}
      </GamelistDiv>
    );
  };
  

export default ReviewList;
