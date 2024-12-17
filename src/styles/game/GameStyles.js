import styled, { keyframes } from "styled-components";

export const GameFormContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 30px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    text-align: center;
    box-sizing: border-box;
`;

export const GameInputGroup = styled.div`
    text-align: left;
    margin-bottom: 20px;
`;

// Imagen del juego
export const GameImage = styled.img`
  width: 180px;
  object-fit: cover;
`;

// Input
export  const GameInput = styled.input`
width: 100%;
padding: 12px;
margin: 8px 0;
border-radius: 8px;
font-size: 16px;
color: #333;
transition: border 0.3s, box-shadow 0.3s;
box-sizing: border-box;

&:focus{
    border-color: #3498db;
    box-shadow: 0 0 8px rgba(52,152, 219, 0.3);
}
`;

// Label
export const GameLabel = styled.label`
  font-weight: bold;
  color: #333;
  font-size: 14px;
`;

// Text area
export  const GameTextArea = styled.textarea`
width: 100%;
padding: 12px;
margin: 8px 0;
border-radius: 8px;
font-size: 16px;
color: #333;
transition: border 0.3s, box-shadow 0.3s;
box-sizing: border-box;

&:focus{
    border-color: #3498db;
    box-shadow: 0 0 8px rgba(52,152, 219, 0.3);
}
`;

export const WarningLabel = styled.label`
    color: red;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const FadeInGame = styled.div`
  animation: ${fadeIn} 0.4s ease-in-out;
`;

const GameButton = styled.button`
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

export const SaveGameButton = styled(GameButton)`
  background-color: #2ecc71;
  &:hover {
    background-color: #27ae60;
  }
`;

export const CancelButton = styled(GameButton)`
  background-color: #bdc3c7;
  &:hover {
    background-color: #95a5a6;
  }
`;