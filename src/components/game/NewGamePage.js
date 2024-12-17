import React, { useEffect, useRef, useState } from "react";
import { FadeInGame, GameFormContainer, GameInput, GameInputGroup, GameTextArea, WarningLabel } from "../../styles/game/GameStyles";

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
            formImg:""
          }
    );

    // Manejador de errores en el rellenado del form
    const [failed, setFailed] = useState(false);
    const [failMessage, setFailMessage] = useState("");

    const titleRef = useRef(null);
    const dateRef = useRef(null);
    const devRef = useRef(null);
    const publisherRef = useRef(null);
    const platformsRef = useRef(null);
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
        setNewGame({
            ...newGame,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newGame.title){
            handleError('Llenar el campo de título');
            titleRef.current.focus();
            return;
        }
        if(!newGame.date){
            handleError('Llenar el campo de fecha de salida');
            dateRef.current.focus();
            return;
        }
        if(!newGame.dev){
            handleError('Llenar el campo de desarrolladora');
            devRef.current.focus();
            return;
        }
        if(!newGame.publisher){
            handleError('Llenar el campo de publisher');
            publisherRef.current.focus();
            return;
        }
        if(!newGame.desc){
            handleError('Llenar el campo de descripción');
            descRef.current.focus();
            return;
        }
        if(!newGame.descCard){
            handleError('Llenar el campo de descripción para la tarjeta');
            descCardRef.current.focus();
            return;
        }
        if(!newGame.formImg){
            handleError('Llenar el campo de imagen');
            formImgRef.current.focus();
            return;
        }
        if(!newGame.cardImg){
            handleError('Llenar el campo de imagen para la tarjeta');
            cardImgRef.current.focus();
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
                formImg:""
              });
            onSwitchView('main');
        }else{
            setFailed(true);
            setFailMessage("Error al agregar el juego, contacte con el equipo técnico");
        }
    }

    return(
        <GameFormContainer>
            <button onClick={()=>{onSwitchView('main')}}>Cerrar ventana</button>
            <h2>Agregar nuevo videojuego</h2>
            {failed && (<FadeInGame><WarningLabel>{failMessage}</WarningLabel></FadeInGame>)}
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <GameInputGroup>
                    <GameInput 
                        value={newGame.title}
                        type="text" 
                        name="title" 
                        placeholder="Ingrese el nombre del juego"
                        onChange={handleChange} 
                        ref={titleRef}
                    ></GameInput>
                    <GameInput 
                        value={newGame.date}
                        type="text" 
                        name="date" 
                        placeholder="Ingrese la fecha de salida del juego"
                        onChange={handleChange} 
                        ref={dateRef}
                    ></GameInput>
                    <GameInput 
                        value={newGame.dev}
                        type="text" 
                        name="dev" 
                        placeholder="Ingrese la desarrolladora"
                        onChange={handleChange} 
                        ref={devRef}
                    ></GameInput>
                    <GameInput 
                        value={newGame.publisher}
                        type="text" 
                        name="publisher" 
                        placeholder="Ingrese el publisher"
                        onChange={handleChange} 
                        ref={publisherRef}
                    ></GameInput>
                    <GameTextArea 
                        value={newGame.desc}
                        type="text" 
                        name="desc" 
                        placeholder="Ingrese la descripcion"
                        onChange={handleChange} 
                        ref={descRef}
                    ></GameTextArea>
                    <GameInput 
                        value={newGame.formImg}
                        type="text" 
                        name="formImg" 
                        placeholder="Ingrese el URL de la imagen"
                        onChange={handleChange} 
                        ref={formImgRef}
                    ></GameInput>
                    <GameTextArea
                        value={newGame.descCard}
                        type="text" 
                        name="descCard" 
                        placeholder="Ingrese la descripcion para la tarjeta"
                        onChange={handleChange} 
                        ref={descCardRef}
                    ></GameTextArea>
                    <GameInput 
                        value={newGame.cardImg}
                        type="text" 
                        name="cardImg" 
                        placeholder="Ingrese la URL de la imagen para la tarjeta"
                        onChange={handleChange} 
                        ref={cardImgRef}
                    ></GameInput>
                </GameInputGroup>
                <button>Guardar</button>
            </form>
            <button>Cancelar</button>
        </GameFormContainer>
    );
}

export default NewGamePage;