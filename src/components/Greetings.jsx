import React from 'react'

const Greetings = ({ lang, children }) => {

    const salu2 = (l) => {
        switch (l) {
            case 'es':
                return 'Hola'
            case 'en':
                return 'Hello'
            case 'de':
                return 'Hallo'
            case 'fr':
                return 'Bonjour'
            default:
                return 'Hello'
        }
    }

    return (
        <div className="Greetings">
            { salu2(lang) } { children }
        </div>
    )
}

export default Greetings
