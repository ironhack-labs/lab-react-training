import React from 'react'
import './Greetings.css'

const Greetings = (props) => {

const greetings = {
         de: 'Hallo',
         fr: 'Bonjour',
         es: 'Hola',
         en: 'Hello'
     }
     return (
         <div className="Greetings">
            {greetings[props.lang]} {props.children}
         </div>
    )
}

export default Greetings