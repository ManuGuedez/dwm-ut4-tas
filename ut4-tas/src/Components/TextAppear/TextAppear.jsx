import React, {useState} from "react";

function TextAppear() {
    const [isVisible, setIsVisible] = useState(false)
    const [content, setContent] = useState("Mostrar")

    const handleButton = () => {
        setIsVisible(!isVisible)
        if (content == "Mostrar") {
            setContent("Ocultar")
        } else {
            setContent("Mostrar")
        }
    }

    return (
        <>
            <button onClick={handleButton}>{content}</button>
            {isVisible && <p>aparezco!!!!</p>}
        </>
    )
}

export default TextAppear;