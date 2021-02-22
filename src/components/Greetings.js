import React from 'react'

export default function Greetings(props) {
    let message;
    
    if(props.lang === "de") {
         message = "Guten tag";
    } else if (props.lang === "fr") {
         message = "Bonjour";
    } else if (props.lang === "en") {
         message = "Hello"
    } else if (props.lang === "es") {
         message = "Hola"
    }

    return (
        <div style={{textAlign:"left", border:"solid black 2px", margin:"10px", padding:"10px", fontSize: "20px"}}>
            <p>{message} {props.children}</p>
        </div>
    )
}
