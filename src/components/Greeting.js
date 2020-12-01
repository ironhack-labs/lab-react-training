import React from 'react'

export default function Greeting(props) {
    function message(lang) {
        switch (lang) {
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
        <div className="greeting">
            <p className="greetingBox">
                {message(props.lang)}{props.children}
            </p>
            

        </div>
    )
}