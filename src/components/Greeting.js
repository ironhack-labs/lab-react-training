import React from 'react'

function Greeting(props) {
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
        <div>
           <p>{greeting} {props.children}</p>
        </div>
    )
}

export default Greeting
