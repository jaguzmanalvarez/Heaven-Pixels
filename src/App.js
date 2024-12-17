import React, { useState } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import CardGame from './components/game/CardGame';
import styled from 'styled-components';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import ProfilePage from './components/ProfilePage';
import GameModalPage from './components/game/GameModalPage';
import NewGamePage from './components/game/NewGamePage';

const CardWrapper = styled.div`
  margin-top: 20px; /* Espacio entre el Navbar y la tarjeta */
`;

const App = () => {
  // Arreglo que contiene los juegos registrados
  const [games, setGames] = useState([
    {
      id: 0,
      title: "Metaphor: Re Fantazio",
      date: "11/10/2024",
      dev: "Studio Zero",
      publisher: "Atlus",
      platforms: ["Xbox series", "PlayStation 5", "PlayStation 4", "Windows"],
      desc:"De las mentes creativas de la serie Persona: Metaphor: ReFantazio es el primer RPG de fantasía a gran escala de ATLUS, creado por el director Katsura Hashino, el diseñador de personajes Shigenori Soejima y el compositor Shoji Meguro. Escribe tu destino y supera el miedo adentrándote en un mundo de fantasía que no se parece a nada que hayas visto antes. Cargado de inquietantes misterios, el reino se encuentra al borde del precipicio. Ahora debes embarcarte en un viaje, superando obstáculos y forjando lazos con tus amigos.",
      descCard:"Únete al arriesgado Torneo Real que promete horas de fascinantes descubrimientos y exploraciones.",
      cardImg: "https://m.media-amazon.com/images/M/MV5BYzdkOTBkMjctMWNhMy00MmEyLTg0OTktNDYwNTRlYzhkNzRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      formImg: "https://cdn.sega.co.uk/mhc-sega/public/content/media/images/raster/metaphor_horizontal_cover.jpg"
    },
    {
      id: 1,
      title: "Balatro",
      date: "20/02/2024",
      dev: "LocalThunk",
      publisher: "PlayStack",
      platforms: ["Android", "Mac", "iOS", "Nintendo Switch", "Playstation 4", "Playstation 5", "Windows", "Xbox ONE", "Xbox series"],
      desc:"El roguelike de póquer. Balatro es un creador de mazos hipnotizante donde juegas manos de póquer ilegal, descubres comodines que cambian tu juego y activas combinaciones hilarantes y llenas de adrenalina. Combina manos válidas de póquer con comodines únicos para crear sinergias y construcciones variadas. Gana fichas suficientes para vencer ciegas engañosas y descubre manos y mazos de bonificación ocultos al avanzar. Necesitarás todas las ventajas que puedas conseguir para llegar a la ciega grande, vencer el ante final y asegurar la victoria.",
      descCard:"Balatro es un creador de mazos roguelike inspirado en el póquer donde creas poderosas sinergias y ganas a lo grande.",
      cardImg: "https://cdn.mobygames.com/covers/19339043-balatro-xbox-one-front-cover.png",
      formImg: "https://eloutput.com/wp-content/uploads/2024/10/balatro-juego-cartas_0000_Balatro_keyart.jpg"
    },
    {
      id: 2,
      title: "Tekken 8",
      date: "26/01/2024",
      dev: "Bandai Namco Entertainment Inc.",
      publisher: "Bandai Namco Entertainment Inc.",
      platforms: ["PlayStation 5", "Xbox series", "Windows"],
      desc:"Vive el siguiente capítulo de la historia del videojuego más longevo con 32 luchadores únicos rediseñados y domina el nuevo sistema Heat para aplastar a tus oponentes. Disfruta de gráficos de alta fidelidad, desarrollados para la nueva generación de hardware, para mostrar cada impacto y agresivos supermovimientos.",
      descCard:"La nueva entrega de la legendaria franquicia TEKKEN, llega con peleas de última generación!",
      cardImg: "https://m.media-amazon.com/images/I/615NuwMfPIL._AC_UF894,1000_QL80_.jpg",
      formImg: "https://www.bandainamcostudios.com/en/wp-content/uploads/sites/2/2024/03/resized_TEKKEN_8_Third_KA_FINISH_4K_%E9%96%8B%E7%99%BA%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB.png"
    },
    {
      id: 3,
      title: "Astro bot",
      date: "06/09/2024",
      dev: "Team Asobi",
      publisher: "Sony Interactive Entertainment",
      platforms: ["PlayStation 5"],
      desc:"La Nave nodriza PS5® se ha dañado, dejándolo a ASTRO y su tripulación robótica dispersos por todas las galaxias. Es hora de pilotear tu fiel DualSpeeder por más de 50 planetas llenos de diversión, peligro y sorpresas. En el trayecto, aprovecha al máximo los nuevos poderes de ASTRO y reúnete con muchos héroes icónicos del universo de PlayStation.",
      descCard:"Potencia tu juego de plataformas. Con tus nuevos poderes, lucha contra un nuevo elenco de villanos extravagantes y enormes jefes. ",
      cardImg: "https://image.api.playstation.com/vulcan/ap/rnd/202406/0500/8f15268257b878597757fcc5f2c9545840867bc71fc863b1.png",
      formImg: "https://impulsogeek.com/wp-content/uploads/2024/09/Astro-Bot-Announce-Screenshot-00-1024x549.jpg"
    },
    {
      id: 4,
      title: "Dragon Ball: Sparking! Zero",
      date: "11/10/2024",
      dev: "Spike Chunsoft",
      publisher: "Bandai Namco Entertainment",
      platforms: ["Xbox series", "PlayStation 5", "Windows"],
      desc:"DRAGON BALL: Sparking! ZERO lleva a un nuevo nivel el legendario estilo de juego de la serie Budokai Tenkaichi. Aprende a dominar a diversos personajes jugables, cada uno con sus habilidades, transformaciones y técnicas propias. Libera tu espíritu de lucha y pelea en escenarios que se derrumban y reaccionan a tu poder a medida que el combate se recrudece.",
      descCard:"¡Domina el poder destructivo de los luchadores más fuertes que han aparecido en DRAGON BALL!",
      cardImg: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2216/cbb03393f0ab1149f2b89a8194ce19e596a24fa5bec6526a.png",
      formImg: "https://cdn.atomix.vg/wp-content/uploads/2024/12/boll.jpg"
    },
  ]);

  // Arreglo que contiene los usuarios registrados
  const [users, setUsers] = useState([
    {
      id: 101,
      userName: "PanqueCupcake",
      isAdmin: true,
      password: "1111",
      pic: "https://pbs.twimg.com/media/GBGWryfXkAAZkyk?format=jpg&name=4096x4096",
    },
    {
      id: 202,
      userName: "Pedro",
      isAdmin: true,
      password: "2222",
      pic: "https://yt3.googleusercontent.com/z6xwLe695U_4NygXaQm7EaXXAStOBTBI2RYKS5gb3aS73d8JoGvs_PpdHy47vMqEw4RVTZfSSQ=s160-c-k-c0x00ffffff-no-rj"
    },
    {
      id:303,
      userName:"McSter",
      isAdmin: false,
      password: "3333",
      pic: ""
    },
    {
      id: 404,
      userName: "CrisCross",
      isAdmin: false,
      password: "4444",
      pic: ""
    }
  ]);

  // useState que contiene un booleano para saber si alguien tiene sesion iniciada o no
  // podría removerse para optimizar
  const [isAuth, setIsAuth] = useState(false);

  // useState que contiene la información del usuario que ha iniciado sesión
  const [loggedUser, setLoggedUser] = useState({id:-1, userName:"", password:"", pic: ""});

  // useState que contiene la información del juego seleccionado
  const [selectedGame, setSelectedGame] = useState(
    {
      id: -1,
      title: "",
      date: "",
      dev: "",
      publisher: "",
      platforms: [],
      desc:"",
      descCard:"",
      cardImg: "",
      formImg:""
    }
  );


  // Manejador para crear un nuevo juego
  const handleCreateGame = (newGame) => {
    setGames([...games, {...newGame, id: games.length +1}]);
    return true;
  }

  // Manejadores de la ventana modal
  const [modalVisible, setModalVisible] = useState(false);

  // Manejador para cerrar la ventana modal
  const handleCloseModal = () => {
    setModalVisible(!modalVisible);
    setSelectedGame(
      {
        id: -1,
        title: "",
        date: "",
        dev: "",
        publisher: "",
        platforms: [],
        desc:"",
        descCard:"",
        cardImg: "",
        formImg:""
      }
    );
  }

  // Manejador para abrir la ventana modal
  const handleOpenModal = (game) => {
    setSelectedGame(game);
    setModalVisible(!modalVisible);
  }

  // Manejador de vista de la aplicación
  const [view, setView] = useState('main');
  const switchView = (selectedView) => {setView(selectedView);}



  // Manejador del evento de inicio de sesión realizado en ./components/auth/LoginPage.js
  // Recibe un JSON con "userName" y "password" ingresados en un formulario
  const handleLogin = (typedUser) => {
    for(const element of users){
      if(element.userName === typedUser.userName){
        if(element.password === typedUser.password){
          setIsAuth(true);
          setLoggedUser(element);
          return true;
        }else{
          return false;
        }
      }
    }
    return false;
  }

  // Manejador del evento de cierre de sesión que se encuentra en ./components/NavBar.js
  const handleLogOut = () => {
    setLoggedUser({id:-1, userName:"", password:"", pic: ""});
    setIsAuth(false);
  }

  // Switch que maneja qué componente se mostrará en pantalla
  // recibe como parámetro el valor "view" que contiene una cadena de caracteres con palabras clave
  // login para LoginPage, register para RegisterPage
  // El evento default muestra la página principal de la aplicación
  switch(view){

    case 'login': return(<LoginPage onSwitchView={switchView} handleLogin={handleLogin}/>);

    case 'register': return(<RegisterPage onSwitchView={switchView} />);

    case 'profile': return(
      <div className="App">
        <NavBar key={isAuth?loggedUser.id:101} user={isAuth?loggedUser:null} isAuth={isAuth} onSwitchView={switchView} onLogOut={handleLogOut}/>
        <ProfilePage />
      </div>
    );

    case 'newgame': return(
      <div className="App">
        <NavBar key={isAuth?loggedUser.id:101} user={isAuth?loggedUser:null} isAuth={isAuth} onSwitchView={switchView} onLogOut={handleLogOut}/>
        <NewGamePage onSwitchView={switchView} handleCreate={handleCreateGame}/>
      </div>
    );

    default: return(
      <div className="App">
        {modalVisible && ( <GameModalPage game={selectedGame} onCloseModal={handleCloseModal}/>) }
        <NavBar key={isAuth?loggedUser.id:101} user={isAuth?loggedUser:null} isAuth={isAuth} onSwitchView={switchView} onLogOut={handleLogOut}/>
        <CardWrapper>
          <div className="game-list">
          {games.map((game) => (  
            <CardGame key={game.id} game={game} onOpenModal={handleOpenModal}/>
          ))}
          </div>
        </CardWrapper>
      </div>
    );
  }
}

export default App;