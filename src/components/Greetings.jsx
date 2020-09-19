import React from 'react'

function Greetings(props) {
    const languages = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
        de: 'Hallo'
    }
    return (
        <div className="greetings">
            <p>
                {languages[props.lang]} {props.children}
            </p>
        </div>
    )
}


export default Greetings