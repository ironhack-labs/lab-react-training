import React from 'react'

function Greeting(props) {

    const greetings = {
        de: "Hallo", 
        en: "Hi",
        es: "Hola", 
        fr: "Bonjour"
    }

    return (
        <h5>{greetings[props.lang]} {props.children}</h5>
    )
}

export default Greeting