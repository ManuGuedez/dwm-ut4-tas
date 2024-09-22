import React, { useState, useRef } from "react";
import classes from "./Task.module.css";

// por ahora una tarea simplemente recibe un contenido como el titlulo,
// más adelante podría tener más props para renderizar como asignado, fecha, etc.
function Task({ content, onDeleteTask, onEditTask }) {
  const [contenido, setContenido] = useState(<span>{content}</span>);
  const [editarTarea, setEditarTarea] = useState(false);
  const inputValue = useRef("");

  const onClickHandler = () => {
    onDeleteTask(content);
  };

  const editButtonHandler = () => {
    if (!editarTarea) {
      setEditarTarea(true);
    }
  };

  const confirmedEdition = () => {
    setEditarTarea(false);
    const newContent = inputValue.current.value;
    if (newContent.trim()) {
      onEditTask(content, newContent);
    }
    // setContenido(newContent);
  };

  return (
    <>
      <li className={classes.elemento}>
        {content}
        <div /*contenedor de botones */>
          {editarTarea && (
            <>
              <input ref={inputValue} style={{ maxWidth: "90px" }} placeholder="Nuevo valor..."/>
              <button
                className={classes.boton}
                style={{ backgroundColor: "lightpink" }}
                onClick={() => confirmedEdition()}
              >
                ✅
              </button>
            </>
          )}
          {!editarTarea && (
            <button
              className={classes.boton}
              onClick={() => editButtonHandler()}
            >
              🖋️
            </button>
          )}
          <button className={classes.boton} onClick={() => onClickHandler()}>
            🗑️
          </button>
        </div>
      </li>
    </>
  );
}

export default Task;
