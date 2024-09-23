import React, { useEffect, useState } from "react";
import classes from "./Counter.module.css"

// este componente es el mismo que el del ta4 pero además cambia el nombre del documento cuando cambia

function ExtendedCounter() {

    const [counter, setCounter] = useState(0);

    const aumentar = () => {
        setCounter(counter + 1);
    }

    const disminuir = () => {
        setCounter(counter - 1);
    }

    useEffect(() => {
        document.title = "TAs UT 4- cont ta9: " + counter;
    }, [counter]);

    return (
        <>
            <p>Contador: {counter}</p>
            <button onClick={disminuir} className={classes.boton}>Disminuir</button>
            <button onClick={aumentar} className={classes.boton}>Aumentar</button>
        </>
    )
}

export default ExtendedCounter;