import React from 'react'

function Greetings(props) {
    let greeting = '';
    switch(props.lang) {
        case 'de':
            greeting = 'Hallo';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        case 'es':
            greeting = 'Hola';
            break;
        case 'en':
        default:
            greeting = 'Hello';
            break;
    }

    return (
        <div className="greetings">
            <p>{greeting} {props.children}</p>
        </div>
    )
}

export default Greetings;