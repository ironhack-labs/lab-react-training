import React from "react";
import "./Greetings.css";

const Greetings = ( {lang, children} ) => {
    let greeting;

    switch (lang) {
        case "de":
            greeting = "Hallo";
            break;
        case "en":
            greeting = "Hello";
            break;
        case "es":
            greeting = "Hola"
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        case undefined:
            console.log('Missing "lang" attribute');
            break;
        default:
            console.log('"lang" attribute not founded');
    }

    return <p className="Greetings">{greeting} {children}</p>;
};

export default Greetings;