import React from 'react'
import './Greetings.css'

export default function Greetings(props) {

    let hello = "";

    if (props.lang === 'de') {
        hello = 'Hallo'
    } else if (props.lang === 'en'){
        hello = 'Hello'
    } else if (props.lang === 'es'){
        hello = 'Hola'
    } else if (props.lang === 'fr'){
        hello = 'Hallo'
    }

    return (
        <h2 className="salute">{hello} {props.children}</h2>
    )
}
