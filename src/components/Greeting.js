import React from 'react';
import '../components/Greeting.css'


const Greeting = (props) => {
    let greeting;
    switch (props.lang) {
        case 'de':
            greeting = "Hallo, ";
            break;
        case 'fr':
            greeting = "Bonjour, ";
            break;
        case 'es':
            greeting = "Hola, ";
            break;
        default:
            greeting = "Hello, ";
            break;
    }

    return <h2 id="greeting">{greeting} {props.children}</h2>
}

export default Greeting;