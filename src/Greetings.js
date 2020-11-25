import React from 'react'

const Greetings = ({lang, name}) => {
    let greet
    switch (lang) {
        case 'de':
            greet = "Hallo"
            break
        case "en":
            greet = "Hello"
            break
        case 'es':
            greet = "Hola"
            break
        case "fr":
            greet = "Bonjour"
            break
    }
    return (
        <div>
            <p>{greet} {name}</p>
        </div>
    )
}

export default Greetings
