import React from 'react'

export default function Greetings(props) {
    console.log(props)
let greeting = '';
let usrLang = props.lang
    switch(usrLang){
        case 'de': 
            greeting = 'Hallo'
            break;
        case 'en':
            greeting = 'Hello'
            break;
        case 'es':
            greeting = 'Hola'
            break;
        case 'fr':
            greeting = 'Bonjour'
            break;
    }
    return (
        <div className="greetings-box">
            <h2>{greeting} {props.children}</h2>
        </div>
    )
}
