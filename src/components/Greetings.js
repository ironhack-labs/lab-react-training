import React from "react";
import "../index.css";

const Greetings = (props) => {
    let greeting = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }

    const lang = props.lang;

    return (
        <div className="greetings">
            <p>{greeting[lang]} {props.name}</p>
        </div>

    )
}

export default Greetings;