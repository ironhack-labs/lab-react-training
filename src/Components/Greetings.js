import React,{useState} from "react"

export const Greetings = (props)=>{
    let mensaje;
    switch (props.lang) {
        case "de":
            mensaje="hallo"
            break;
        case "en":
            mensaje="Hello"
            break;
        case "es":
            mensaje="Hola"
            break;
            case "fr":
                mensaje="Bonjour"
            break;
        default:
            break;
    }
    return (
        <div className="Iteration2">
            <div>
                <h1>{mensaje} {props.children}</h1>
            </div>
        </div>
    )

}