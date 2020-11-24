import React from 'react';

const Greetings = (props) => {
    function message(lang) {
        switch(lang) {
            case 'de':
                return 'Hallo, ';
            break;
            case 'fr':
                return 'Bonjour, ';
            break;
            case 'es':
                return 'Hola, ';
            break;
            default:
                return 'Hello, ';
            break;
        }
    }

    return (
        <div className="greetings-container">
            <p>{message(props.lang)}{props.children}</p>
        </div>
    )
};



export default Greetings;