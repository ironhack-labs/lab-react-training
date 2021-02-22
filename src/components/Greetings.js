import React from 'react'

const Greetings = (props) => {
    let greet;
    switch (props.lang) {
        case 'de': 
        greet = 'Hallo';
        break;
        case 'en':
            greet = 'Hello';
            break;
            case 'fr': 
            greet = 'Bonjour';
            break;
            case 'it':
            greet = 'Ciao';
            break;
            case 'es':
            greet = 'Hola'
            break;
            default:
            greet = 'Hi'
            break;
    }
    return (
        <div>
            <p>{greet} {props.children}</p>
        </div>
    )
}

export default Greetings;