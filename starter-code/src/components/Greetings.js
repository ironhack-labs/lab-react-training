import React from "react"

const Greetings = (props) => {
    
    let greetings

    switch (props.lang) {
        case "de":
            greetings = "Hallo"
            break;
        case "fr":    
            greetings = "Bonjour"
            break
        case "en":
            greetings = "Hello"
            break
        case "es":
            greetings = "Hola"
            break        
        default:
            greetings = "Hey"
    }
        return(
            <div className="greetings">
                <p>{greetings} {props.children}</p>
            </div>
        )
}

export default Greetings;