import React from 'react';
import './Greetings.css'

function Greeting({lang, children}){
    let greeting = ''
    if (lang === 'de'){
        greeting = "Hallo"
    } else if (lang === 'en'){
        greeting = 'Hello'
    } else if (lang === 'es'){
        greeting = 'Hola'
    } else if (lang === 'fr'){
        greeting = 'Bonjour'
    }
    return (
        <div className='Greeting'>
            {greeting} {children}
        </div>

    )
}

export default Greeting;