import React from 'react'

const Greetings = (props) => {
    let greeting = 'Hello';

    if (props.lang === 'es') {
        greeting = 'Hola';
    } else if (props.lang === 'fr') {
        greeting = 'Bonjour';
    } else if (props.lang === 'de') {
        greeting = 'Hallo'
    }

    return (
        <div>
            <p class="box" lang={props.lang}>{greeting} {props.children}</p>
        </div>
    )
}

export default Greetings
