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
        return <div>Hallo {children}</div>
    } else if (lang === "fr") {
        return <div>Bonjour {children}</div>
    } else if (lang === "en") {
        return <div>Hello {children}</div>
    } else if (lang === "es") {
        return <div>Ola {children}</div>
}

export default Greetings;