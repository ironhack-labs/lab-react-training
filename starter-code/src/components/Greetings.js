import React from 'react'

function Greetings({lang, children}) {
    console.log('Children',children);
    let saludo = ''
    switch(lang){
        case 'es':
            saludo = 'Hola ';
            break;
        case 'fr':
            saludo = 'Bonjour';
            break;
        case 'en':
            saludo = 'Hello';
            break;
        default:
            saludo = 'Hola';
    }
    
    return (
        <div className="greetings">
            {saludo} {children}
        </div>
    )
}

export default Greetings
