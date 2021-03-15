import React from 'react'

function Greetings(props) {
    if (props.lang === "de") return `Hallo ${props.children}`
    else if (props.lang === "es") return `Hola ${props.children} todo bien ?`
    else if (props.lang === "fr") return `Salut ${props.children}`
    else if (props.lang === "en") return `Hello ${props.children}`
    
    return (
        <div className="Greetings">
            
        <p >{props.lang}</p>


        </div>
    )
}


export default Greetings