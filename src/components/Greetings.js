import React from 'react'

export default function Greetings(props) {

    let hi = "Hello";

    if (props.lang === "cat") {
        hi = "Hola"
    } else if (props.lang === "it") {
        hi = "Ciao"
    } else if (props.lang === "de") {
        hi = "Hallo"
    } else if (props.lang === "fr") {
        hi = "Allo"
    }

    return (
        <div className="greeting">
            <p>{hi}, {props.children}!</p>
        </div> 
    )
}
