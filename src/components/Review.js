import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px 30px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;

  span {
    font-size: 2rem;
    color: ${(props) => props.activeColor || "#ccc"};
    cursor: pointer;
    margin: 0 5px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 1rem;
  resize: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:first-child {
    background-color: #fddede;
    color: #e44d4d;
  }

  &:last-child {
    background-color: #6a35f5;
    color: white;
  }
`;

const Review = ({ game, onCloseModal, onSubmitReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = () => {
    if (rating === 0 || comment.trim() === "") {
      alert("Por favor, ingrese una calificación y un comentario.");
      return;
    }

    const reviewData = {
      gameTitle: game.title,
      rating,
      comment,
    };

    onSubmitReview(reviewData);
    onCloseModal();
  };

  return (
    <ModalContainer onClick={onCloseModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>{game.title}</Title>
        <p>Calificación *</p>
        <StarsContainer>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              onClick={() => handleStarClick(index)}
              style={{ color: index < rating ? "#ffc107" : "#ccc" }}
            >
              ★
            </span>
          ))}
        </StarsContainer>
        <div>
          <label htmlFor="comment">Comentario</label>
          <TextArea
            id="comment"
            placeholder="Escribe tu comentario aquí..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <ButtonsContainer>
          <Button onClick={onCloseModal}>Cancelar</Button>
          <Button onClick={handleSubmit}>Agregar reseña</Button>
        </ButtonsContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default Review;
