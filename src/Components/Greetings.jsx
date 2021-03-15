import React from 'react'
import './../styles/Greetings.css'
function Greetings(props) {
    let message;
    if (props.lang === "de") return <div className="Greetings">Hallo {props.children}</div> 
    else if (props.lang === "es") return <div className="Greetings">Hola {props.children}</div>
    else if (props.lang === "en") return <div className="Greetings">Hello{props.children}</div>
    else if (props.lang === "fr") return <div className="Greetings">Bonjour {props.children}</div>
    }

export default Greetings

