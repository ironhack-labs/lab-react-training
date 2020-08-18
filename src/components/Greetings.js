import React from 'react';

const Greetings = (props) => {
    let greeting = "";
    switch (props.lang){
        case "de":
            greeting = "Hallo";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        case "es":
            greeting = "Hola";
            break;
        default: //By default, I will set it to english greeting
            greeting = "Hello";
            break;
    }
    return (
        <p className="box">
            {greeting} {props.children}
        </p>
    )
}

export default Greetings