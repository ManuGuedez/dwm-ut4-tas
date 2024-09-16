import React from "react";
import classes from "./CardContent.module.css";

const CardContent = ({ title, description, assigned, date, deadline }) => {
  return (
    <>
      <h1 className={classes.titulo}>{title}</h1>
      <p className={classes.texto}>{description}</p>
      <p className={classes.texto}>Persona asignada: {assigned}</p>
      <p className={classes.texto}>Fecha de inicio: {date}</p>
      <p className={classes.texto}>Fecha de fin: {deadline}</p>
    </>
  );
};

export default CardContent;
