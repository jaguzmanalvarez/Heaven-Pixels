import React from "react";
import styled from "styled-components";
import CardGame from "./CardGame";

const GamelistDiv = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const GameList = ({games, handleOpenModal, onOpenReview}) => {
    return (
        <GamelistDiv>
            {games.map((game) => (  
                <CardGame key={game.id} game={game} onOpenModal={handleOpenModal} onOpenReview={onOpenReview}/>
            ))}
        </GamelistDiv>
    );
}
export default GameList;