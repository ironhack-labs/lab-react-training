import React from 'react'
import '../assets/css/Greetings.css'

const Greetings = ({ lang, children }) => {
    let regards = ''

    switch (lang) {
        case 'de':
            { regards = 'Hallo' }
            break;
        case 'en':
            { regards = 'Hello' }
            break;
        case 'es':
            { regards = 'Hola' }
            break;
        case 'fr':
            { regards = 'Bonjour' }
            break;
            default:
                {regards = 'Hi'}
    }




    return (
        <div className="regards">
        <p>{regards} {children}</p>
        </div>
    )
}

export default Greetings