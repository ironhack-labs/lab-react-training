import React from 'react'

export default function Greetings(props) {
    let hello = "";

    if (props.lang === 'fr') {
        hello = "Bonjour"
    } else if (props.lang === 'en') {
        hello = "Hello"
    } else if (props.lang === 'es') {
        hello = "Hola"
    } else if (props.lang === 'de') {
        hello = "Hallo"
    }

    return (
        <h1>{hello} {props.children}</h1>
    )
}
