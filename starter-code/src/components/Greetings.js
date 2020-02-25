import React from 'react'

const Greetings = (props) => {

    let greeting

    switch (props.lang) {
        case 'de':
            greeting = 'Hallo'
            break
        case 'fr':
            greeting = 'Bonjour'
            break
        case 'en':
            greeting = 'Hello'
            break
        case 'es':
            greeting = 'Hola'
            break
        default:
            greeting = 'Hey'
    }

    return (
        <article className='greetings'>
            <p>{greeting} {props.children}</p>
        </article>
    )
}

export default Greetings