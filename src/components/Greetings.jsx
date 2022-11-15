import React from 'react'

function Greetings(props) {
    const {lang, children} = props
    let greeting = ''
    switch (lang) {
        case 'de':
            greeting = 'hallo' 
            break;
        case 'en':
            greeting = 'hello'
            break;
        case 'es':
            greeting = 'hola'
            break;
        case 'fr':
            greeting = 'bonjour'
            break;
        default:
            break;
    }
  return (<p>{greeting} {children}</p>
  )
}

export default Greetings