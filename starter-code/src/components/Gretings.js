import React from "react"

const Greetings = (props) => {

    let lenguaje

    switch (props.lang) {
        case "de":
            lenguaje= "Hallo";
            break;
        case "fr":
            lenguaje = "Bonjour";
            break;
        case "en":
            lenguaje = "Hello";
            break;
        case "es":
            lenguaje = "Hola";
            break;
        default:
            lenguaje="Hey";
            break;
    }

    return (
        <div className="greeting">
            <p>{lenguaje} {props.children}</p>
        </div>
    )
}

export default Greetings