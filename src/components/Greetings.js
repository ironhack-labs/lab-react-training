import React from 'react'

function Greetings({children,lang}) {
    let frase;
    switch (lang) {
        case "de": frase =`Hallo ${children}`
            break;
        case "en": frase =`Hello ${children}`
            break;
        case "es": frase =`Hola ${children}`
        break;
        case "fr": frase =`Bon Jour${children}` 
        break;
            default:
                break;
    }
    return (
        <div>
            <p>{frase}</p>
        </div>
    )
}

export default Greetings
