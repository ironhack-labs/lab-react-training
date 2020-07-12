import React from 'react'
import "../Greetings/Greetings.css"

function Greetings(props) {
    let hello = "Hello"
    if (props.lang === "de") {
        hello = "Hallo"
    } else if (props.lang === "sp") {
        hello = "Hola"
    }

    return (
        <div className="greeting">
            <p>{hello} {props.children}</p>
        </div>
    )
}

export default Greetings
