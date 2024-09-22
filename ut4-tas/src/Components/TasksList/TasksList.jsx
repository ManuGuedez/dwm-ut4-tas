import React, { useState, useRef } from "react";
import Task from "../Task/Task";
/*
Crear una aplicación en ReactJS, donde se le permite al usuario mediante un input ingresar una lista de tareas. Cada vez que se agrega una nueva 
tarea, el input debe quedar limpio, y la aplicación debe volver a renderizarse para mostrar la información actualizada.
*/

// TA 6 y 7
function TasksList() {
  const inputValue = useRef("");
  const [tasks, setTasks] = useState(["Tarea 1", "Tarea 2"]);

  const handleButton = () => {
    const newTask = inputValue.current.value;
    if (newTask.trim()) {
      // si no es un input vacío
      setTasks([...tasks, newTask]);
      // con esto limpio el input
      inputValue.current.value = "";
    }
  };

  const onDeleteTask = (deletedTask) => {
    const filteredTasks = tasks.filter((task) => task !== deletedTask);
    setTasks(filteredTasks);
  };

  const onEditTask = (content, newContent) => {
    const i = tasks.indexOf(content);
    const auxTasks = [... tasks]
    auxTasks[i] = newContent;
    setTasks(auxTasks); // hago esto para que se vuelva a renderizar
  }

  return (
    <>
      <h3>Tasks List:</h3>
      <input ref={inputValue} placeholder="Ingresa una tarea..."/>
      <button
        onClick={handleButton}
        style={{
          marginLeft: "5px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "3px",
          paddingBottom: "3px",
        }}
      >
        +
      </button>
      <ul>
        {tasks.map((task, index) => {
           return <Task key={index} content={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />;
        })}
      </ul>
    </>
  );
}

export default TasksList;
