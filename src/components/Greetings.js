import React from 'react'

const Greetings = props => {
    const greetings = {
        en: 'Hello',
        es: 'Hola',
        de: 'Hallo',
        fr: 'Bonjour',
        pt: 'Olá'
    }
    
    let helloWord = greetings[props.lang] || 'Hello'
    
    return (
        <h1>{helloWord} {props.children}</h1>
    )
}


export default Greetings