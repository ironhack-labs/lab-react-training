import React from 'react'

export default function Greetings(props) {
    console.log("props:",props)

    let word=""

    switch(props.lang){
        case "de": word="Hallo"
        break;
        case "en": word="Hello"
        break;
        case "es": word="Hola"
        break;
        case "fr": word="Bonjur"
        break;
        default:
        break;
    }

  return (
    <div className="boxGeneric">
        <p>
            {word} {props.children}
        </p>
    </div>  
    
 )
}
