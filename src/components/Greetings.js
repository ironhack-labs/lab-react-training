import React from 'react';
import '../assets/css/Greetings.css'


const Greetings = ({ lang, text }) => {

    let greet
    
    switch (lang) {
        case 'en':
            greet = 'Hello'
            break;
        case 'es':
            greet = 'Hola'
            break
        case 'fr':
            greet = 'Bonjour'
            break
        default:
            break;
    }

    return (
        <div className='Greetings'>
            <h3>{greet} {text}</h3>
        </div>
    )
}

export default Greetings