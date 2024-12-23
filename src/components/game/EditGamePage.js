import React, { useEffect, useRef, useState } from "react";
import { FailGameMessage, GameFormContainer, GameInput, GameInputGroup, GameLabel, GameTextArea, SaveGameButton } from "../../styles/game/GameStyles";
import ConfirmModal from "../ConfirmModal";
import { BackButton } from "../../styles/auth/AuthStyles";
import styled from "styled-components";

const CardWrapper = styled.div`
  margin-top: 70px; /* Espacio entre el Navbar y la tarjeta */
  `;

const EditGamePage = ({game, handleEdit, onCloseEditPage}) => {

    const [editedGame, setEditedGame] = useState(
        {
            id: game.id,
            title: game.title,
            date: game.date,
            dev: game.dev,
            publisher: game.publisher,
            platforms: game.platforms,
            desc: game.desc,
            descCard: game.descCard,
            cardImg: game.cardImg,
            formImg:game.formImg,
            reviews: game.reviews,
          }
    );


    // Manejador de cancelación
    const [showCloseModal, setShowCloseModal] = useState(false);
    const [closeConfirmed, setCloseConfirmed] = useState(false);

    const handleStateCloseModal = () =>{
        setShowCloseModal(!showCloseModal);
    }

    useEffect(() => {
        if(closeConfirmed){
            onCloseEditPage();
        }
    }, [closeConfirmed])

    // Manejador de errores en el rellenado del form
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

    const handleError = (message) => {
        setFailMessage(message);
        setFailed(true);
    }

    // Manejador de cambios en los inputs presentados en la pantalla
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedGame({
            ...editedGame,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editedGame.title){
            handleError('Llenar el campo de título');
            titleRef.current.focus();
            titleRef.current.scrollIntoView();
            return;
        }
        if(!editedGame.date){
            handleError('Llenar el campo de fecha de salida');
            dateRef.current.focus();
            dateRef.current.scrollIntoView();
            return;
        }
        if(!editedGame.dev){
            handleError('Llenar el campo de desarrolladora');
            devRef.current.focus();
            devRef.current.scrollIntoView();
            return;
        }
        if(!editedGame.publisher){
            handleError('Llenar el campo de publisher');
            publisherRef.current.focus();
            return;
        }
        if(!editedGame.desc){
            handleError('Llenar el campo de descripción');
            descRef.current.focus();
            return;
        }
        if(!editedGame.descCard){
            handleError('Llenar el campo de descripción para la tarjeta');
            descCardRef.current.focus();
            descCardRef.current.scrollIntoView();
            return;
        }
        if(!editedGame.formImg){
            handleError('Llenar el campo de imagen');
            formImgRef.current.focus();
            return;
        }
        if(!editedGame.cardImg){
            handleError('Llenar el campo de imagen para la tarjeta');
            cardImgRef.current.focus();
            return;
        }
        setShowModal(true);
    }

    const [updateConfirmed, setUpdateConfirmed] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {setShowModal(!showModal)}

    useEffect(() => {
        if(updateConfirmed){
            if(handleEdit(editedGame)){
                setEditedGame({
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
                  });
                  setCloseConfirmed(true);
            }else{
                setFailed(true);
                setFailMessage("Error al agregar el juego, contacte con el equipo técnico");
            }
        }
    }, [updateConfirmed])

    const handleAddPlatform = () => {
        if (newPlatform.trim()) {
            setEditedGame((prev) => ({
                ...prev,
                platforms: [...prev.platforms, newPlatform.trim()]
            }));
            setNewPlatform(""); // Limpia el input después de añadir
        }
    };

    const handleRemovePlatform = (index) => {
        setEditedGame((prev) => ({
            ...prev,
            platforms: prev.platforms.filter((_, i) => i !== index)
        }));
    };
    const [newPlatform, setNewPlatform] = useState(""); // Input para la nueva plataforma

    return(
        <CardWrapper>
            {showCloseModal&& (<ConfirmModal title={"¿Cerrar edición?"} text={"Estás a punto de cancelar la edición el juego, ¿estás seguro de hacerlo?"} onCloseModal={handleStateCloseModal} onSetValue={setCloseConfirmed}/>)}
            {showModal&& (<ConfirmModal title={"¿Editar el juego?"} text={"Estás a punto de editar el juego, ¿estás seguro de hacerlo?"} onCloseModal={handleCloseModal} onSetValue={setUpdateConfirmed}/>)}

            <GameFormContainer>
            <BackButton onClick={handleStateCloseModal}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M15.5 19l-7-7 7-7" />
                </svg>
                Regresar
            </BackButton>
                <h2>Editar videojuego existente</h2>
                {failed && (<FailGameMessage>{failMessage}</FailGameMessage>)}
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <GameInputGroup>
                        <GameLabel>Título:</GameLabel>
                        <GameInput 
                            value={editedGame.title}
                            type="text" 
                            name="title" 
                            placeholder="Ingrese el nombre del juego"
                            onChange={handleChange} 
                            ref={titleRef}
                        ></GameInput>
                        <GameLabel>Fecha de lanzamiento:</GameLabel>
                        <GameInput 
                            value={editedGame.date}
                            type="text" 
                            name="date" 
                            placeholder="Ingrese la fecha de salida del juego"
                            onChange={handleChange} 
                            ref={dateRef}
                        ></GameInput>
                        <GameLabel>Desarrolladora:</GameLabel>
                        <GameInput 
                            value={editedGame.dev}
                            type="text" 
                            name="dev" 
                            placeholder="Ingrese la desarrolladora"
                            onChange={handleChange} 
                            ref={devRef}
                        ></GameInput>
                        <GameLabel>Publisher:</GameLabel>
                        <GameInput 
                            value={editedGame.publisher}
                            type="text" 
                            name="publisher" 
                            placeholder="Ingrese el publisher"
                            onChange={handleChange} 
                            ref={publisherRef}
                        ></GameInput>
                        <GameLabel>Descripción:</GameLabel>
                        <GameTextArea 
                            value={editedGame.desc}
                            type="text" 
                            name="desc" 
                            placeholder="Ingrese la descripcion"
                            onChange={handleChange} 
                            ref={descRef}
                        ></GameTextArea>
                        <GameLabel>URL de la imágen</GameLabel>
                        <GameInput 
                            value={editedGame.formImg}
                            type="text" 
                            name="formImg" 
                            placeholder="Ingrese el URL de la imagen"
                            onChange={handleChange} 
                            ref={formImgRef}
                        ></GameInput>
                        <GameLabel>Descripción en tarjeta:</GameLabel>
                        <GameTextArea
                            value={editedGame.descCard}
                            type="text" 
                            name="descCard" 
                            placeholder="Ingrese la descripcion para la tarjeta"
                            onChange={handleChange} 
                            ref={descCardRef}
                        ></GameTextArea>
                        <GameLabel>URL de la imagen en tarjeta:</GameLabel>
                        <GameInput 
                            value={editedGame.cardImg}
                            type="text" 
                            name="cardImg" 
                            placeholder="Ingrese la URL de la imagen para la tarjeta"
                            onChange={handleChange} 
                            ref={cardImgRef}
                        ></GameInput>
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
                        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
                        {editedGame.platforms.map((platform, index) => (
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
                    <SaveGameButton>Guardar cambios</SaveGameButton>
                </form>
            </GameFormContainer>
        </CardWrapper>
    );
}

export default EditGamePage;