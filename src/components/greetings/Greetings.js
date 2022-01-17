import React from "react";
import "./Greetings.css"

function Greetings (props) {
    // <Greetings lang="fr">François</Greetings>
    let greeting = ""
    if (props.lang in greetingsLib)
        greeting = greetingsLib[props.lang]
    return (
        <div className="greeting">
            <p>{greeting} {props.children}</p>
        </div>
    )
}

export default Greetings

const greetingsLib = {
    de: "Hallo ",
    fr: "Bonjour",
    en: "Hello",
    au: "G´Day"
}