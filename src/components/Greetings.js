import React from 'react'

function Greetings({children, lang}) {
  
    let frase;
    switch (lang) {
        case "de": frase = `hallo ${children}`
            break;
        case "en": frase = `hello ${children}`
            break;
        case "es": frase = `hola ${children}`
            break; 
        case "fr": frase = `bonjour ${children}`
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
// 3. EXPORTACIÓN
export default Greetings