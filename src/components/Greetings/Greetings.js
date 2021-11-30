import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
    const { lang, children } = props
    let greetings = ''

    switch (lang) {
        case 'de':
            greetings = 'Hallo'
            break
        case 'en':
            greetings = 'Hello'
            break
        case 'es':
            greetings = 'Hola'
            break
        case 'fr':
            greetings = 'Bonjour'
            break
        default:
            break
    }

    return (
        <div className="greetings-text">
            <p>
                {greetings} {children}
            </p>
        </div>
    )
}

     
export default Greetings