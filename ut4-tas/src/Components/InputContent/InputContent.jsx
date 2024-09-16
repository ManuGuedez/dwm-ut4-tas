import React, { useState } from "react";
import classes from"./InputContent.module.css"

// TA 3

// con los states
function InputComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => { // cuando se escribe algo en la box
    setInputValue(event.target.value);
  };

  return (
    <>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Escribe algo..." 
      />
      <p className={classes.texto}>Valor del input: {inputValue}</p>
    </>
  );
}

export default InputComponent;
