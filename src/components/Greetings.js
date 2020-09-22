import './Components.css'
import React from 'react'

export default function Greetings(props) {
    //console.log(typeof(props.lang))
let Greeting = ""
if (props.lang === "de"){
    Greeting = "Hallo";
} else if (props.lang === "en"){
    Greeting =  "Hello"
} else if (props.lang === "fr"){
    Greeting =  "Bonjour"
} else if (props.lang === "es"){
    Greeting = "Hola"
}
    return (
        <div className="greeting-div">
           <p>{Greeting} {props.children}</p>
        </div>
    )
}

