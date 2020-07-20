import React from 'react'
import '../css/greetings.css'

//<Greetings lang="de">Ludwig</Greetings>

const Greetings = (props) => {

var greet = () => {
if (props.lang === "fr") {return  'Bonjour' }
else if (props.lang === "de") {return  'Hallo'}
else if (props.lang === "es") {return  'Hola'}
else if (props.lang === "en") {return  'Hello'}
}

    return (
        <div className="greetings">
            {greet()} {props.children}
        </div>
    )
}

export default Greetings
