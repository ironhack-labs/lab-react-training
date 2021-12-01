import React from 'react'

export default function Greetings(props) {
    <h1> Greeting </h1>
    if (props.lang === 'fr')
    return (
        <div>
           <p> Bonjour {props.children}</p>
            
        </div>
    )
    else if (props.lang === 'de')
    return (
        <div>
           <p> Hallo {props.children}</p>
            
        </div>
    )
}
