import React from 'react'

function Greetings({lang, children}) {

    let greeting = '';

    switch (lang) {
        case 'de':
            greeting = 'Hallo';
            break;
        case 'en':
            greeting = 'Hello';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        default:
            greeting = 'Hola'
            break;
    }
  return (
    <div>
        {greeting}
        {children}
    </div>
  )
}

Greetings.defaultProps = {
    lang: 'es',
    children: ''
}

export default Greetings