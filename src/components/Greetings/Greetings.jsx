import React from 'react';
import './Greetings.css'

function Greetings({lang, children}) {

    const identifyLang = () => {
        if( lang === "es") {
            return 'Hola'
        } else if ( lang === "en") {
            return 'Hello'
        } else if ( lang === "fr") {
            return 'Bonjour'
        } else if (lang === 'de') {
            return 'Hallo'
        }
    }

    return (
        <div className='Greetings-card'>
            <p>{identifyLang()} {children}</p>
        </div>
    )
}

export default Greetings;