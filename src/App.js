import React, { useState } from 'react';
import NavBar from './components/NavBar';
import CardGame from './components/CardGame';
import styled from 'styled-components';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';

const CardWrapper = styled.div`
  margin-top: 50px; /* Espacio entre el Navbar y la tarjeta */
`;

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [view, setView] = useState('main');

  const switchView = ({selectedView}) => {setView(selectedView);}

  switch(view){
    case 'login': return(<LoginPage />);
    case 'register': return(<RegisterPage />);
    default: return(
      <div className="App">
        <NavBar isAuth={isAuth} onSwitchView={switchView} />
        <CardWrapper>
          <CardGame />
        </CardWrapper>
      </div>
    );
  }
}

export default App;
