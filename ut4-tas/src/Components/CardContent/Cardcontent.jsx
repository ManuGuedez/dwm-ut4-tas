import React from "react";

const CardContent = ({ title, description, assigned, date, deadline }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Persona asignada: {assigned}</p>
      <p>Fecha de inicio: {date}</p>
      <p>Fecha de fin: {deadline}</p>
    </>
  );
};

export default CardContent;
