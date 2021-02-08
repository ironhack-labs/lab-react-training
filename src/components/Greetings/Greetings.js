import React from "react";

function Greetings ({lang,children}){
    let greetings
    switch (lang){
        case "es": 
            greetings = "Hola";
        break;
        case "de":
            greetings = "Hallo";
        break;
        case "en":
            greetings = "Hello";
        break;
        case "fr":
            greetings = "Bonjour";
        break;
    }
    return(
        <p>{greetings + " " +children}</p>
    );
}

export default Greetings;