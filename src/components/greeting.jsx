import React from 'react'

const bonjObj = {
    de: "Hallo",
    en: "Hello",
    es: "hola",
    fr: "Bonjour"
}

const Greeting = (props) => {
    return (
        <div>
            <p>{bonjObj[props.lang]} {props.children}</p>
        </div>
    )
}

export default Greeting
