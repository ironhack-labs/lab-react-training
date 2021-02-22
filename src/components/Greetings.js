import React from 'react'

export default function Greetings(props) {
    let word = "";

    switch (props.lang) {
        case "de":
            word = "Hallo";
            break;
        case "en":
            word = "Hello";
            break;
        case "es":
            word = "Hola";
            break;
        case "fr":
            word = "Bonjour";
            break;
        default:
            word = "Hey"
    }
    return (
        <div>
        <p>
            {word} {props.children}
        </p>
        </div>
    )
}