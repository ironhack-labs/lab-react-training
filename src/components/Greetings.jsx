import React from 'react'

function Greetings(props) {
    const languaje = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
        de: 'Hallo'
    }
    return (
        <div className="greetings">
            <p>
                {languaje[props.lang]} {props.children}
            </p>
        </div>
    )
}


export default Greetings