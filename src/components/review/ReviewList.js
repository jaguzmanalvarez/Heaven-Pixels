import React, { useState } from "react";
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
  transition: box-shadow 0.25s;

  &:hover{
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
  }
`;

const GameImage = styled.img`
  width: 80%;
  height: 56%;
  border-radius: 8px;
`;

const ReviewText = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 7px;
  word-wrap: break-word;
  overflow-wrap: break-word; 
  max-width: 500px;
  max-height: 60px; 
  overflow-y: auto; 
  text-overflow: ellipsis; 
`;

const StarContainer = styled.div`
  span {
      margin: 10px 0;
      font-size: 40px;
      color: #999;
      &.filled {
        color: #f4c150; /* Color de estrella llena */
      }
  }
`;

export const RedButton = styled.button`
  background: linear-gradient(135deg,rgb(253, 97, 97),rgb(251, 56, 56));
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 550;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg,rgb(248, 30, 30),rgb(251, 97, 97));
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BlueButton = styled.button`
  background: linear-gradient(135deg, #5c6fff, #788bff);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 550;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #4956d4, #5c6fff);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
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


const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  
  button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    &:first-child {
      background-color: #e60000;
      color: white;
    }

    &:last-child {
      background-color: #ddd;
      color: white;
    }
  }
`;

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
  width: 95%;
  height: 100px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 1rem;
  resize: none;
`;

const ReviewList = ({ games, currentUser, handleEditReview, handleDeleteReview }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Para mostrar el modal de edición
  const [editingReview, setEditingReview] = useState(null); // Reseña en edición
  const [newRating, setNewRating] = useState(0); // Para nueva calificación
  const [newComment, setNewComment] = useState(""); // Para nuevo comentario

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

  const handleDeleteClick = (review) => {
    setReviewToDelete(review); // Guardar la reseña a eliminar
    setIsDeleteModalOpen(true); // Abrir el modal de confirmación
  };

  const handleConfirmDelete = () => {
    handleDeleteReview(reviewToDelete); // Eliminar la reseña
    setIsDeleteModalOpen(false); // Cerrar el modal
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false); // Cerrar el modal sin eliminar
  };

  const handleEditClick = (review) => {
    setEditingReview(review); 
    setNewRating(review.rating); 
    setNewComment(review.comment); 
    setIsEditModalOpen(true); 
  };

  const handleSaveEdit = () => {
    console.log(editingReview);
    if (editingReview) {
      handleEditReview(
        editingReview,
      {
        ...editingReview,
        rating: newRating,
        comment: newComment,
      });
      setIsEditModalOpen(false);
    }
  };

  return (
    <>
      <GamelistDiv>
        {userReviews.map((review, index) => (
          <ReviewCard key={index}>
            <GameImage src={review.gameImage} alt={review.gameName} />
              <GameTitle>{review.gameName}</GameTitle>
            <StarContainer>{renderStars(review.rating)}</StarContainer>
              <ReviewText>{review.comment}</ReviewText>
              <ModalActions>
                <BlueButton onClick={() => handleEditClick(review)}>Editar</BlueButton>
                <RedButton onClick={() => handleDeleteClick(review)}>Eliminar</RedButton>
            </ModalActions>
          </ReviewCard>
        ))}
      </GamelistDiv>

      {isDeleteModalOpen && (
        <Modal>
          <ModalContent>
            <h2>¿Estás seguro que deseas eliminar esta reseña?</h2>
            <ModalActions>
              <BlueButton onClick={handleConfirmDelete} >Aceptar</BlueButton>
              <RedButton onClick={handleCancelDelete} >Cancelar</RedButton>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}


{isEditModalOpen && (
        <ModalContainer>
          <ModalContent>
            <Title>Editar Reseña</Title>
            <p>Calificación</p>
            <StarsContainer>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  onClick={() => setNewRating(index + 1)}
                  style={{ color: index < newRating ? "#ffc107" : "#ccc" }}
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
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </div>
            <ModalActions>
              <RedButton onClick={() => setIsEditModalOpen(false)}>Cancelar</RedButton>
              <BlueButton onClick={handleSaveEdit}> Guardar Cambios</BlueButton>
            </ModalActions>
          </ModalContent>
        </ModalContainer>
      )}

    </>
  );
};

export default ReviewList;