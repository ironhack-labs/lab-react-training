import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
    let greeting ;

    if (props.lang === "de") {
        greeting = 'Halo';
    } else if (props.lang === "fr") {
        greeting = 'Bonjour';
    } else if (props.lang === "es") {
        greeting = 'Hola';
    } else if (props.lang === "en") {
        greeting = 'Hello';
    }

    return (<article>
        <p>{greeting} {props.text}</p>
    </article>)
}

export default Greetings