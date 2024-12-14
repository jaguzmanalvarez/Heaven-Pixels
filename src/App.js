import React from 'react';
import NavBar from './components/NavBar';
import CardGame from './components/CardGame';
import styled from 'styled-components';

const CardWrapper = styled.div`
  margin-top: 50px; /* Espacio entre el Navbar y la tarjeta */
`;

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardWrapper>
        <CardGame />
      </CardWrapper>
    </div>
  );
}

export default App;
