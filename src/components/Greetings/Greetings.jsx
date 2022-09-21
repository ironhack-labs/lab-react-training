
import React from "react"
import './Greetings.css'

const Greetings =  (props) => {
    
    let getLanguage = {};

    switch(props.language){
        case "en":
            getLanguage = "Hello"
            break;
        case "de":
            getLanguage = "Hallo"
            break;
        case "fr":
            getLanguage = "Bonjour"
            break;
        case "es":
            getLanguage = "Hola"
            break;
        case "ro":
            getLanguage = "Buna"
            break;
        default:
            getLanguage = "invalid language"
            break;
    }
    
    return (
            <p className="greetingSquare"> {getLanguage} {props.children} </p>
        )
}

export default Greetings