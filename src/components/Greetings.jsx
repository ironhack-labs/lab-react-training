import React from 'react'

const Greetings = props => {
    const selectLang = (lang) => {
        switch (lang) {
            case 'de':
                return 'Hallo'
            case 'es':
                return 'Hola'
            case 'fr':
                return 'Bonjour'
            default:
                return 'Hello'       
        }
    }
    return (
        <p className='greetings'>{selectLang(props.lang)} {props.children}</p>
    )
}

export default Greetings
