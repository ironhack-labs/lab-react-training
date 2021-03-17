import React from "react";
import "../styles/Greetings.css"


const langs = {
    de: "Hola",
    en: "Hello",
    fr: "Bonjour",
    es: "Ola"
};

function Greetings({lang, children}) {
    if (lang === "de") {
        return <div class = "boxes">Hallo {children}</div>
    } else if (lang === "fr") {
        return <div class = "boxes">Bonjour {children}</div>
    } else if (lang === "en") {
        return <div class = "boxes">Hello {children}</div>
    } else if (lang === "es") {
        return <div class = "boxes">Ola {children}</div>
    }
};

export default Greetings;