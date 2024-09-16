import React, { useState } from "react";

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
      <p>Valor del input: {inputValue}</p>
    </>
  );
}

export default InputComponent;
