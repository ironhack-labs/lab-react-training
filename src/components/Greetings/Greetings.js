import React from 'react'

const Greetings = (props) => {
    var language = 'Hello';

    if (props.lang === 'es') {
        language = 'Hola';
    } else if (props.lang === 'fr') {
        language = 'Bonjour';
    } else if (props.lang === 'de') {
        language = 'Hallo'
    }

    return (
        <div>
            <p lang={props.lang}>{language} {props.children}</p>
        </div>
    )
}

export default Greetings