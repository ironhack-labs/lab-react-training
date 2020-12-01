import React from 'react'

const Greetings = (props) => {
    if (props.lang === "de") {

        return (
            <h1>Hallo {props.name}</h1>
    )
    }
   if (props.lang === "fr") {
    return (
            <h1>Bonjour {props.name}</h1>
    )
   }
}

export default Greetings

