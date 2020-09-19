import React from 'react'

const Greetings = (props) => {

const greetings = {
         de: 'Hallo',
         fr: 'Bonjour',
         es: 'Hola',
         en: 'Hello'
     }
     return(
         <div className="Greetings">
            <p>{greetings[props.lang]} {props.children}</p>
         </div>

    )
}

export default Greetings