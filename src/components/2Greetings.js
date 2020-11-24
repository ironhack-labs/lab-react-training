import React from 'react'

const Greetings = (props) => {
    const borderStyle = {
        border: '2px solid black', 
        padding: '5px',
        width: '100%',
        textAlign: 'center',
        maxWidth: '600px'
    }

    let sentence = ""
    switch(props.language) {
        case 'fr':
            sentence = 'Bonjour François'
            break
        case 'de':
            sentence = 'Hallo Ludwig'
            break
        case 'es':
            sentence = 'Hola Jorge'
            break
        case 'en':
            sentence = 'Hello George'
            break
        default:
            break 
    }

    return (
        <p style={borderStyle}>{sentence}</p>
    )
}

export default Greetings