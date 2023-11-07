import React from "react";

function Greetings({langPeople, children})
{
    const handleLang = (lang) => {
        return lang === "es" ? "Hola" : "Ciao";
    }

    return(
        <>
            <h2>{handleLang(langPeople)} {children}</h2>
        </>
    )
}

export default Greetings;