import React from 'react';

const Greetings = props => {
    let greet = '';
    switch (props.lang) {
        case 'en':
            return greet = `Hello, ${props.children}`;
            break;

        case 'es':
            return greet = `Hola, ${props.children}`;
            break;
        
        case 'de':
            return greet = `Hallo, ${props.children}`;
            break;

        case 'fr':
            return greet = `Bonjour, ${props.children}`;
            break;
        
        default: 
            return greet = `Hello, ${props.children}`;
    }
    return (
        <div>
            {greet}
        </div>
    )
}

export default Greetings;