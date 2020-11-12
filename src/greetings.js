import React from 'react';

const Greetings = (props) => {
    function message(lang) {
        switch (lang) {
            case 'de':
                return 'Hallo ';
                break;
            
            case 'es':
                return 'Hola ';
                break;

            case 'fr':
                return 'Bonjour ';
                break;

            default:
                return 'Hello ';
                break;
        }
    }

    return (
        <div className="profile">
            <b>
                {message(props.lang)}
                {props.children}
            </b>
        </div>
    )
    
}

export default Greetings;