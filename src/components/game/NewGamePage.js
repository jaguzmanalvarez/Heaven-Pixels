import React, { useEffect, useRef, useState } from "react";
import { FailGameMessage, GameFormContainer, GameInput, GameInputGroup, GameLabel, GameTextArea, SaveGameButton } from "../../styles/game/GameStyles";
import { BackButton } from "../../styles/auth/AuthStyles";
import styled from 'styled-components';

const CardWrapper = styled.div`
  margin-top: 70px; /* Espacio entre el Navbar y la tarjeta */
  `;

const NewGamePage = ({onSwitchView, handleCreate}) => {

    const [newGame, setNewGame] = useState(
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
            reviews:[]
          }
    );

    // Manejador de errores en el rellenado del form
    const [newPlatform, setNewPlatform] = useState(""); // Input para la nueva plataforma
    const [failed, setFailed] = useState(false);
    const [failMessage, setFailMessage] = useState("");

    const titleRef = useRef(null);
    const dateRef = useRef(null);
    const devRef = useRef(null);
    const publisherRef = useRef(null);
    const descRef = useRef(null);
    const descCardRef = useRef(null);
    const cardImgRef = useRef(null);
    const formImgRef = useRef(null);


    useEffect(() => {
        titleRef.current.focus()
    }, [])

    const handleError = (message, focusRef) => {
        setFailMessage(message);
        setFailed(true);
        focusRef.current.focus();
    }

    // Manejador de cambios en los inputs presentados en la pantalla
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewGame({
            ...newGame,
            [name]: value
        });
    };

    const handleAddPlatform = () => {
        if (newPlatform.trim()) {
            setNewGame((prev) => ({
                ...prev,
                platforms: [...prev.platforms, newPlatform.trim()]
            }));
            setNewPlatform(""); // Limpia el input después de añadir
        }
    };

    const handleRemovePlatform = (index) => {
        setNewGame((prev) => ({
            ...prev,
            platforms: prev.platforms.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newGame.title){
            handleError('Llenar el campo de título', titleRef);
            return;
        }
        if(!newGame.date){
            handleError('Llenar el campo de fecha de lanzamiento', dateRef);
            return;
        }
        if(!newGame.dev){
            handleError('Llenar el campo de desarrolladora',devRef);
            return;
        }
        if(!newGame.publisher){
            handleError('Llenar el campo de publisher',publisherRef);
            return;
        }
        if(!newGame.desc){
            handleError('Llenar el campo de descripción',descRef);
            return;
        }
        if(!newGame.formImg){
            handleError('Llenar el campo de imagen',formImgRef);
            return;
        }
        if(!newGame.descCard){
            handleError('Llenar el campo de descripción para la tarjeta',descCardRef);
            return;
        }
        if(!newGame.cardImg){
            handleError('Llenar el campo de imagen para la tarjeta',cardImgRef);
            return;
        }

        if(handleCreate(newGame)){
            setNewGame({
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
              });
            onSwitchView('main');
        }else{
            setFailed(true);
            setFailMessage("Error al agregar el juego, contacte con el equipo técnico");
        }
    }

    return(
        <CardWrapper>
        <GameFormContainer>
            <BackButton onClick={() => onSwitchView("main")}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M15.5 19l-7-7 7-7" />
                </svg>
                Regresar
            </BackButton>
            <h2>Agregar nuevo videojuego</h2>
            {failed && (<FailGameMessage>{failMessage}</FailGameMessage>)}
            <form onSubmit={(e)=>handleSubmit(e)}>
                <GameInputGroup>
                    <GameLabel>Título:</GameLabel>
                    <GameInput 
                        value={newGame.title}
                        type="text" 
                        name="title" 
                        placeholder="Ingrese el nombre del juego"
                        onChange={handleChange} 
                        ref={titleRef}
                    ></GameInput>
                    <GameLabel>Fecha de lanzamiento:</GameLabel>
                    <GameInput 
                        value={newGame.date}
                        type="text" 
                        name="date" 
                        placeholder="Ingrese la fecha de salida del juego"
                        onChange={handleChange} 
                        ref={dateRef}
                    ></GameInput>
                    <GameLabel>Desarrolladora:</GameLabel>
                    <GameInput 
                        value={newGame.dev}
                        type="text" 
                        name="dev" 
                        placeholder="Ingrese la desarrolladora"
                        onChange={handleChange} 
                        ref={devRef}
                    ></GameInput>
                    <GameLabel>Publisher:</GameLabel>
                    <GameInput 
                        value={newGame.publisher}
                        type="text" 
                        name="publisher" 
                        placeholder="Ingrese el publisher"
                        onChange={handleChange} 
                        ref={publisherRef}
                    ></GameInput>
                    <GameLabel>Descripción:</GameLabel>
                    <GameTextArea 
                        value={newGame.desc}
                        type="text" 
                        name="desc" 
                        placeholder="Ingrese la descripcion"
                        onChange={handleChange} 
                        ref={descRef}
                    ></GameTextArea>
                    <GameLabel>URL de la imágen</GameLabel>
                    <GameInput 
                        value={newGame.formImg}
                        type="text" 
                        name="formImg" 
                        placeholder="Ingrese el URL de la imagen"
                        onChange={handleChange} 
                        ref={formImgRef}
                    ></GameInput>
                    <GameLabel>Descripción en tarjeta:</GameLabel>
                    <GameTextArea
                        value={newGame.descCard}
                        type="text" 
                        name="descCard" 
                        placeholder="Ingrese la descripcion para la tarjeta"
                        onChange={handleChange} 
                        ref={descCardRef}
                    ></GameTextArea>
                    <GameLabel>URL de la imagen en tarjeta:</GameLabel>
                    <GameInput 
                        value={newGame.cardImg}
                        type="text" 
                        name="cardImg" 
                        placeholder="Ingrese la URL de la imagen para la tarjeta"
                        onChange={handleChange} 
                        ref={cardImgRef}
                    ></GameInput>
                    <GameLabel>Plataformas:</GameLabel>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <GameInput
                            value={newPlatform}
                            type="text"
                            placeholder="Añadir plataforma"
                            onChange={(e) => setNewPlatform(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={handleAddPlatform}
                            style={{
                                marginLeft: "10px",
                                padding: "5px 10px",
                                backgroundColor: "#007BFF",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Añadir
                        </button>
                    </div>
                    {/* Cambié el estilo aquí para que las plataformas se alineen en fila */}
                    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
                        {newGame.platforms.map((platform, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginRight: "10px", // Espacio entre los elementos
                                    backgroundColor: "#f0f0f0",
                                    padding: "5px 10px",
                                    borderRadius: "20px",
                                    marginBottom: "5px"
                                }}
                            >
                                {platform}
                                <button
                                    type="button"
                                    onClick={() => handleRemovePlatform(index)}
                                    style={{
                                        marginLeft: "10px",
                                        padding: "2px 5px",
                                        backgroundColor: "red",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "3px",
                                        cursor: "pointer"
                                    }}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                </GameInputGroup>
                <SaveGameButton onClick={()=>{setFailed(false);}}>Guardar</SaveGameButton>
            </form>
        </GameFormContainer>
        </CardWrapper>
    );
}

export default NewGamePage;