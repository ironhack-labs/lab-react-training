import React from 'react'
import './Greetings.css'

export default function Greetings(props) {
    let greet = 'hello'
    switch (props.lang) {
        case 'de':
            greet = 'Hallo'
            break;
        case 'fr':
            greet = 'Bonjour'
            break;
        case 'en':
            greet = 'Hello'
            break;
        case 'es':
            greet = 'Bonjour'
            break;                                   
    }
    return (
        <div className="container">
            <p><strong>{greet} {props.children}</strong></p>
        </div>
    )
}