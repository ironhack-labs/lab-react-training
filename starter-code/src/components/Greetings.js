import React from 'react'

function Greetings(props) {
    let greeting

    switch (props.lang) {
        case "de":
            greeting = 'Hallo'
            break;
        case "fr":
            greeting = 'Salut'
            break;
        case "es":
            greeting = 'Hola'
            break;
        case "en":
            greeting = 'Hello'
            break;
        default: 
            greeting='Que ondiux'
            
    }
    return (
        <div className="greetings">
            <p>{greeting} {props.children} </p>


            
        </div>
    )
}

export default Greetings
