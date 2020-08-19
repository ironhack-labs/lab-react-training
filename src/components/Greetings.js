import React from 'react'

const languageConverter = {
    de: 'Hallo',
    en: 'Howdie',
    fr: 'Bonjour',
    es: 'Hola'
}


function Greetings(props) {
    let message = `${languageConverter[props.lang]} ${props.children}`
    return (
        <div className='container'>
            <p>{message}</p>
        </div>
    )
}


export default Greetings