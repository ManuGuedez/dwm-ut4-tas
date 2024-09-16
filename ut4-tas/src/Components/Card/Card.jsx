import React from "react";
import "./Card.css";

const Card = ({children}) => {
    return (
        <div className="card">{children}</div>
    )
};

export default Card;

// card de TA1
/*
export function Card({title, description, assigned, date, deadline}) {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Persona asignada: {assigned}</p>
            <p>Fecha de inicio: {date}</p>
            <p>Fecha de fin: {deadline}</p>
        </div>
    )
}
*/
