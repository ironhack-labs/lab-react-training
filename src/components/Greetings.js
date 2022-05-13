import React from 'react'

function Greetings (props) {
    
    const {lang,children} = props
    let greet = "";
    lang ===  'de'? greet = 'hallo'
    :lang === 'es'? greet = 'Hola'
    :lang === 'fr'? greet = 'Bonjour'
    :lang === 'en'? greet = 'Hello'
    : <div></div>
    
    return (
        <p className='greetings'>{`${greet} ${children}`} </p>
    
        )
}

export default Greetings