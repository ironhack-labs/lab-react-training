import React from "react";

export default function Greetings(props) {
    return (
        <div className="Greetings">
            {greeting(props.lang)} {props.children}
        </div>
    );
}

function greeting(lang) {
    switch (lang) {
        case "de":
            return "Hallo";
        case "en":
            return "Hello";
        case "es":
            return "Hola";
        case "fr":
            return "Bonjour";
        default:
            return "??";
    }
}