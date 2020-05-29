import React from "react";

// TODO: to be deleted or replaced
// import 'bootstrap/dist/css/bootstrap.css';
// import "./Greetings.css";

// TODO: check the language -> if/else, switch

function languageGreeting(lang) {
    if (lang === "de") {
        return "Hallo";
    } else if (lang === "en") {
        return "Hello";
    } else if (lang === "es") {
        return "Hola";
    } else if (lang === "fr") {
        return "Bonjour";
    } else {
        return "";
    }
}

function Greetings(props) {

    return (
        <div>
            <p>
                {languageGreeting(props.lang)} {props.children}{' '}
            </p>
        </div>
    )
}


export default Greetings;