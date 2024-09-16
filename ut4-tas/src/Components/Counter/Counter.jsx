import React, {useState} from "react";
import classes from "./Counter.module.css"
// TA 4

function Counter() {
    const [counter, setCounter] = useState(0);

    const aumentar = () => {
        setCounter(counter + 1);
    }

    const disminuir = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <p>Contador: {counter}</p>
            <button onClick={disminuir} className={classes.boton}>Disminuir</button>
            <button onClick={aumentar} className={classes.boton}>Aumentar</button>
        </>
    )

}

export default Counter;