import React from 'react'

const Greetings = ({lang, children}) => {
    let greet = ''
            if (lang === 'es') {greet = 'Hola'}
            else if (lang === 'fr') {greet = 'Bonjour'}
            else if (lang === 'de') {greet = 'Hallo'}
            else {greet = 'Hi'}
    return (
        <div className="Greetings card mb-3">
            <div className="row g-0">
                <div className="card-body">
                    <p className="card-text">{greet}, <strong>{children}</strong>!</p>
                </div>
            </div>
        </div>
    )
}

export default Greetings