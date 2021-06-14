import React from 'react'
import '../App.css'


function Greetings(props){
    const greetings = {
        fr: 'Bonjour',
        en: 'Hello',
        de: 'Hallo',
        es: 'Hola'
    }
    return (
        <article className = "greetings">
            {greetings[props.lang]}, {props.children}
        </article>
    )
}

export default Greetings