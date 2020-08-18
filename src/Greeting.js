import React from 'react'

function Greeting(props) {
    let greets="";
    if(props.de) greets += "Halo"
    if(props.fr) greets += "Bonjour"
    if(props.es) greets += "Hola"
    if(props.en) greets += "Hello"

    return (
        <div>
        <p>{greets} {props.children}</p>
        </div>
    )
}

export default Greeting
