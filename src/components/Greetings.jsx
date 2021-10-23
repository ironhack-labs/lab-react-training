import React from 'react'

function Greetings(props) {
    console.log(props);
    // how can we do it without 
    // if we do an object with all the greetings
    let greetings;
    switch (props.lang) {
        case "fr":
            greetings = "Bonjour ";    
        break;
        case "en":
            greetings = "Hey! ";
        break;
        case "es":
            greetings = "Hola! ";
        break;
        case "de":
            greetings = "Haloo! ";
        break;
        default:
            greetings = "👋🏼 ";
        break;
    }
    greetings += props.children;
    return (
        <div>
            {greetings}
        </div>
    )
}

export default Greetings
