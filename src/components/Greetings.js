import React from 'react'

const Greetings = props => {
    let helloWord = 'Hello'
    if(props.lang === 'pt'){
        helloWord= 'Olá'
    }else if (props.lang === 'sp') {
        helloWord = 'Hola'
    }else if (props.lang === 'de') {
        helloWord = 'Hallo'
    }else if (props.lang === 'fr') {
        helloWord = 'Bonjour'
    }
    return (
        <div className='container'>
            <p>{helloWord}, {props.children}</p>
        </div>
    )
}

export default Greetings