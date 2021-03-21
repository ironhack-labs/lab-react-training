import React from 'react';
import '../assets/css/Greetings.css'


const Greetings = ({ lang, children }) => {
    const language = () => {
        switch (lang) {
            case 'de':
                return <p>Hallo {children}</p>
            case 'en':
                return <p>Hello {children}</p>
            case 'es':
                return <p>Hola {children}</p>
            case 'fr':
                return <p>Bonjour {children}</p>
            default:
                return <p>Hello {children}</p>
        }
    }
    return (
        <div className='greetings'>
            {language()}
        </div>)
}

export default Greetings;