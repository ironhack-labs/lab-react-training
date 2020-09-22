import React from 'react'

export default function Greetings(props) {
    let greetings = {
        'de': 'Hallo',
        'en': 'Hello',
        'es': 'Hola',
        'fr': 'Bonjour'
        }
    return (
        <div>
            <p>{greetings[props.lang]} {props.children}</p>
        </div>
    )
}
