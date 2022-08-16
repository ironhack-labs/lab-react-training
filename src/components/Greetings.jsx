import React from 'react'

function Greetings(props) {
    const {lang, children} = props;
    switch(lang) {
        case 'en':
            return <h1>Hello {children}</h1>
        case 'es':
            return <h1>Hola {children}</h1>
        case 'fr':
            return <h1>Bonjour {children}</h1>
        case 'de':
            return <h1>Hallo {children}</h1>
        default:
            return <h1>{children}</h1>
    }
}

export default Greetings