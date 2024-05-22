import React from 'react';
import './Greeting.css';

function Greetings(props) {
    let greeting = '';
    switch (props.lang) {
        case 'de':
            greeting = `Hallo ${props.children}`;
            break;
        case 'en':
            greeting = `Hello ${props.children}`;
            break;
        case 'es':
            greeting = `Hola ${props.children}`;
            break;
        case 'fr':
            greeting = `Bonjour ${props.children}`;
            break;
        default:
            greeting = `Hello ${props.children}`;
            break;
    }

    return <div className="greetings">{greeting}</div>;
}

export default Greetings;
