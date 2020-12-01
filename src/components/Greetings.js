import React from 'react'

export default function Greetings(props) {
    let greet = 'hello';
    switch(props.lang) {
        case 'de':
            greet= 'Hallo'
            break;
        case 'fr': 
            greet= 'Bonjour'
            break;
        case 'es': 
            greet= 'Hola'
            break;
        case 'en': 
            greet= 'Hello'
            break;
            default: 
            greet = 'Hi'
    }

    return (
        <div>
            <p>{greet}{props.children}</p>
        </div>
    )
}
