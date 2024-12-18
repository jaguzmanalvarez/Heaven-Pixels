import React, { useState } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import styled from 'styled-components';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import ProfilePage from './components/profile/ProfilePage';
import GameModalPage from './components/game/GameModalPage';
import NewGamePage from './components/game/NewGamePage';
import GameList from './components/game/GameList';
import EditGamePage from './components/game/EditGamePage';
import ConfirmModal from './components/ConfirmModal';
import Review from './components/review/Review';
import ReviewList from './components/review/ReviewList'

const CardWrapper = styled.div`
  margin-top: 50px; /* Espacio entre el Navbar y la tarjeta */
  `;

const SearchBox = styled.input`
  margin-top: 20px; /* Espacio superior */
  margin-right: 20px; /* Espacio derecho */
  width: 200px; /* Tamaño más pequeño */
  padding: 6px 10px; /* Espacio interno reducido */
  font-size: 14px; /* Fuente más pequeña */
  color: #333; /* Color de texto oscuro */
  background-color: transparent; /* Fondo transparente */
  border: 1px solid #aaa; /* Borde delgado gris */
  border-radius: 15px; /* Bordes redondeados */
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #aaa; /* Color de texto del placeholder */
    font-style: italic;
  }

  &:focus {
    border-color: #5a6ee1; /* Color al enfocar */
    box-shadow: 0px 2px 4px rgba(90, 110, 225, 0.3); /* Sombra sutil */
  }
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
      formImg: "https://cdn.sega.co.uk/mhc-sega/public/content/media/images/raster/metaphor_horizontal_cover.jpg",
      reviews: []
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
      formImg: "https://eloutput.com/wp-content/uploads/2024/10/balatro-juego-cartas_0000_Balatro_keyart.jpg",
      reviews: []
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
      formImg: "https://www.bandainamcostudios.com/en/wp-content/uploads/sites/2/2024/03/resized_TEKKEN_8_Third_KA_FINISH_4K_%E9%96%8B%E7%99%BA%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB.png",
      reviews: []    
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
      formImg: "https://impulsogeek.com/wp-content/uploads/2024/09/Astro-Bot-Announce-Screenshot-00-1024x549.jpg",
      reviews: []   
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
      formImg: "https://cdn.atomix.vg/wp-content/uploads/2024/12/boll.jpg",
      reviews: []
    },
    {
      id: 5,
      title: "Helldivers 2",
      date: "08/02/2024",
      dev: "Arrowhead Game Studios",
      publisher: "Sony Interactive Entertainment",
      platforms: ["PlayStation 5", "Windows"],
      desc:"Ponte las botas de Helldiver, un soldado de élite cuya misión es difundir la paz, la libertad y la Democracia Tutelada usando las herramientas más enormes y explosivas de toda la galaxia. Los Helldivers no empiezan una misión sin los refuerzos adecuados, pero de ti depende cómo y cuándo pedirlos. No solo cuentas con una variedad de armas principales superpoderosas y arsenales personalizables, sino que también puedes usar estratagemas durante las partidas. ",
      descCard:"Acompaña a los Helldivers a luchar por la libertad en una galaxia hostil.",
      cardImg: "https://image.api.playstation.com/vulcan/ap/rnd/202309/0718/2c253de3117182b4a09d02ad16ebc51a25d4ea9208a5d057.jpg",
      formImg: "https://sm.ign.com/ign_latam/news/h/helldivers/helldivers-2-developer-insists-sony-acquisition-rumor-is-fak_arqg.jpg",
      reviews: []
    },
    {
      id: 6,
      title: "Hi-Fi Rush",
      date: "25/01/2023",
      dev: "Tango Gameworks",
      publisher: "Bethesda Softworks",
      platforms: ["Xbox series", "Windows"],
      desc:"Chai contra el mundo! Juega como el aspirante a estrella de rock Chai, considerado mutante después de que un músico se fusiona accidentalmente a su corazón. Aprovecha la capacidad de Chai de sentir el ritmo a su alrededor y lucha contra los jefes corporativos decididos a 'retirarlo'.",
      descCard:"Lucha contra robots enemigos con ritmos feroces en este emocionante juego de acción.",
      cardImg: "https://images.mweb.bethesda.net/_images/images.ctfassets.net/tehqz6o3okv8/2eZHOuPHrSCuP5Y4VpmcZA/247c20de2544c3cfe9e78d98c1aa2524/HFR-box-standard.webp?f=jpg&h=1000&w=779&s=jnbkJw0fra-wn-ZNG3nW3eMAnjAxyeVS7e-aQz8HrLE",
      formImg: "https://multiplayer.net-cdn.it/thumbs/images/2024/05/08/hi-fi-rush-2_jpg_1376x774_crop_q85.jpg",
      reviews: []
    },
    {
      id: 7,
      title: "Marvel's Spider-Man 2",
      date: "20/10/2023",
      dev: "Insomniac Games",
      publisher: "Sony Interactive Entertainment",
      platforms: ["PlayStation 5", "Windows"],
      desc:"Balancéate, salta y utiliza las nuevas alas de telaraña para recorrer toda la ciudad de Nueva York de Marvel. También podrás cambiar rápidamente entre Peter Parker y Miles Morales para vivir diferentes historias y canalizar poderes nuevos y épicos, mientras el emblemático villano Venom amenaza con destruir sus vidas, la ciudad y a todos sus seres queridos.",
      descCard:"Los Spider-Men Peter Parker y Miles Morales regresan para una nueva y emocionante aventura.",
      cardImg: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
      formImg: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/97e9f5fa6e50c185d249956c6f198a2652a9217e69a59ecd.jpg",
      reviews: []
    },
    {
      id: 8,
      title: "Super Mario Bros. Wonder",
      date: "20/10/2024",
      dev: "Nintendo EPD Production Group No. 10",
      publisher: "Nintendo",
      platforms: ["Nintendo Switch"],
      desc:"¡El estilo de juego clásico de los juegos de Mario será toda una locura con la adición de la Flor Maravilla en el juego Super Mario Bros. Wonder! Estos revolucionarios objetos activarán espectaculares momentos que tendrás que ver para creer. ¡Mira cómo las tuberías cobran vida, siembra el caos como una inmensa bola con picos y mucho más!",
      descCard:"El estilo de juego clásico de desplazamiento lateral de los juegos de Mario será toda una locura con la adición de la Flor Maravilla.",
      cardImg: "https://i.ebayimg.com/images/g/CxYAAOSwNwVlMlwF/s-l400.jpg",
      formImg: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/dde58e70727aad7c96e348ce79b3ca2b.jpg",
      reviews: []
    },
  ]);

  // Arreglo que contiene los usuarios registrados
  const [users, setUsers] = useState([
    {
      id: 0,
      userName: "PanqueCupcake",
      isAdmin: true,
      password: "1111",
      pic: "https://pbs.twimg.com/media/GBGWryfXkAAZkyk?format=jpg&name=4096x4096",
    },
    {
      id: 1,
      userName: "Pedro",
      isAdmin: true,
      password: "2222",
      pic: "https://yt3.googleusercontent.com/z6xwLe695U_4NygXaQm7EaXXAStOBTBI2RYKS5gb3aS73d8JoGvs_PpdHy47vMqEw4RVTZfSSQ=s160-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 2,
      userName:"MacSter",
      isAdmin: false,
      password: "3333",
      pic: "https://images7.memedroid.com/images/UPLOADED580/668c8b67eaaf6.jpeg"
    },
    {
      id: 3,
      userName: "CrisCross",
      email: "crmercadosa@ittepic.edu.mx",
      isAdmin: true,
      password: "4444",
      pic: ""
    }
  ]);

  // Función para agregar un nuevo usuario
  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleUpdateUser = (updatedUser) => {
    // Actualizamos el estado de los usuarios con el usuario modificado
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setLoggedUser(updatedUser);
  };

  const handleDeleteAcoount = (userId) => {
    setUsers(users.filter((user)=>user.id !== userId))
  }

  // useState que contiene un booleano para saber si alguien tiene sesion iniciada o no
  // ******podría modificarse para optimizar
  const [isAuth, setIsAuth] = useState(false);

  // useState que contiene la información del usuario que ha iniciado sesión
  const [loggedUser, setLoggedUser] = useState({id:-1, userName:"", isAdmin:false, password:"", pic: ""});

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
      formImg:"",
      reviews: []
    }
  );


  // Manejador para crear un nuevo juego
  const handleCreateGame = (newGame) => {
    setGames([...games, {...newGame, id: games[games.length-1].id +1}]);
    return true;
  }

  // Manejador para editar un juego existente  
  const handleEditGame = (editedGame) =>{
    setGames(games.map((game)=>(game.id === editedGame.id ? editedGame : game)));
    setSelectedGame(editedGame);
    return true;
  }

  const handleDeleteGame = (isAccepted) => {
    if(isAccepted){
      setModalVisible(false);
      setGames(games.filter((game)=>(game.id!==selectedGame.id)));
    }else{
      setModalVisible(true);
    }
  }

  const [searchQuery, setSearchQuery] = useState('');


  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Manejadores de la ventana modal para mostrar la información del juego
  const [modalVisible, setModalVisible] = useState(false);

  // Manejador para cerrar la ventana modal que muestra la información del juego
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

  // Manejador para abrir la ventana modal que muestra la información del juego
  const handleOpenModal = (game) => {
    setSelectedGame(game);
    setModalVisible(!modalVisible);
  }

  // Manejador para abrir la ventana de edición de juego
  const [showEditPage, setShowEditPage] = useState(false);
  const handleShowEditPage = () => {
    setModalVisible(!modalVisible);
    if(showEditPage){
      setShowEditPage(false);
      setView('main');
    }else{
      setShowEditPage(true);
      setView('editgame');
    }
  }

  // Manejador para abrir la modal de eliminación de juego
  const [showDeleteGameModal, setShowDeleteGameModal] = useState(false);
  const handleShowDeleteGameModal = () => {
    setModalVisible(false);
    setShowDeleteGameModal(true);
  }
  
  const handleHideDeleteGameModal = () => {
    setShowDeleteGameModal(false);
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

  // Manejador para abrir la modal de reseña
  const [reviewModalVisible, setReviewModalVisible] = useState(false);

  // Manejador para cerrar el modal de reseña
  const handleCloseReviewModal = () => {
    setReviewModalVisible(false);
    setSelectedGame(null);
  };

  // Manejador para abrir el modal de reseña
  const handleOpenReview = (game) => {
    if (!isAuth) { switchView("login"); return;}
    setSelectedGame(game);
    setReviewModalVisible(true);
  };

  // Manejador para manejar el envío de reseñas
  const handleSubmitReview = (reviewData) => {
    if (!isAuth) { 
      switchView("login"); 
      return;
    }
  
    const reviewWithUser = {
      ...reviewData, 
      author: loggedUser.userName, 
      userImage: loggedUser.pic,
      gameName: selectedGame.title,
      gameImage: selectedGame.cardImg
    };
  
    const updatedGames = games.map((game) =>
      game.id === selectedGame.id 
        ? { ...game, reviews: [...game.reviews, reviewWithUser] } 
        : game
    );
    setGames(updatedGames);
    handleCloseReviewModal();
  };
  
  
  // Manejador para eliminar una reseña
  const handleDeleteReview = (reviewToDelete) => {
    setGames((prevGames) =>
      prevGames.map((game) => ({
        ...game,
        reviews: game.reviews.filter(
          (review) => review !== reviewToDelete
        ),
      }))
    );
  };


  // Switch que maneja qué componente se mostrará en pantalla
  // recibe como parámetro el valor "view" que contiene una cadena de caracteres con palabras clave
  // login para LoginPage, register para RegisterPage
  // El evento default muestra la página principal de la aplicación
  switch(view){

    case 'login': return(<LoginPage onSwitchView={switchView} handleLogin={handleLogin}/>);

    case 'register': return(<RegisterPage onSwitchView={switchView} addUser={handleAddUser} />);

    case 'profile': return(
      <div className="App">
        <NavBar key={isAuth?loggedUser.id:101} user={isAuth?loggedUser:null} isAuth={isAuth} onSwitchView={switchView} onLogOut={handleLogOut}/>
        <ProfilePage loggedUser={loggedUser} onUpdateUser={handleUpdateUser} onSwitchView={switchView} onLogOut={handleLogOut} onDeleteAccount={handleDeleteAcoount}/>
      </div>
    );

    case 'newgame': return(
      <div className="App">
        <NavBar key={isAuth?loggedUser.id:101} user={isAuth?loggedUser:null} isAuth={isAuth} onSwitchView={switchView} onLogOut={handleLogOut}/>
        <NewGamePage onSwitchView={switchView} handleCreate={handleCreateGame}/>
      </div>
    );

    case 'editgame': return(
      <div className="App">
        <NavBar key={isAuth?loggedUser.id:101} user={isAuth?loggedUser:null} isAuth={isAuth} onSwitchView={switchView} onLogOut={handleLogOut}/>
        <EditGamePage game={selectedGame} onSwitchView={switchView} handleEdit={handleEditGame} onCloseEditPage={handleShowEditPage}/>
      </div>
    );

    case 'mygames':
    if (!isAuth) {
      switchView("login");
      return null;
    }

    // Filtrar juegos con reseñas
    return (
      <div className="App">
        <NavBar key={isAuth ? loggedUser.id : 101} user={isAuth ? loggedUser : null} isAuth={isAuth} onSwitchView={switchView} onLogOut={handleLogOut} />
        <CardWrapper>
        <ReviewList
          games={games} 
          currentUser={loggedUser}
          // handleEditReview={handleSaveEditedReview} //Aqui editar reseña
          handleDeleteReview={handleDeleteReview}
        />
        </CardWrapper>
      </div>
    );

    default: return(
      <div className="App">
        {showDeleteGameModal && (<ConfirmModal title={"Eliminar juego"} text={"Estás a punto de eliminar "+selectedGame.title+" desarrollado por "+selectedGame.dev+". ¿Estás seguro de realizar esta acción?"} onSetValue={handleDeleteGame} onCloseModal={handleHideDeleteGameModal} isDelete={true}/> )}
        {modalVisible && ( <GameModalPage game={selectedGame} onCloseModal={handleCloseModal} isAdmin={loggedUser.isAdmin} onEditGame={handleShowEditPage} onDeleteGame={handleShowDeleteGameModal}/>) }
        {reviewModalVisible && (<Review game={selectedGame} onCloseModal={handleCloseReviewModal} onSubmitReview={handleSubmitReview}/>)}

        <NavBar key={isAuth?loggedUser.id:101} user={isAuth?loggedUser:null} isAuth={isAuth} onSwitchView={switchView} onLogOut={handleLogOut}/>
        
        
        <CardWrapper>
          <SearchBox type="text" placeholder="Buscar juego..." value={searchQuery} onChange={handleSearchChange}/>
          <GameList games={filteredGames} handleOpenModal={handleOpenModal} onOpenReview={handleOpenReview}/>
        </CardWrapper>
      </div>
    );

  }
}

export default App;