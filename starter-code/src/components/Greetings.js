import React from 'react';

const Greetings = (props) => {
    let text = '';
    switch (props.lang) {
        case 'de':  
            text = 'Hallo';
            break;
        case 'fr':
            text = 'Bonjour';
            break;
        case 'es':
            text = 'Hola';
            break;  
        case 'en':
            text = 'Hello';
            break;
        default:
            text = 'Language not defined'; 
    }
    return (
        <div className="black-border d-flex">
            <p>
                {text} {props.children}
            </p>
        </div>
    )
}

export default Greetings;
