import React from 'react';
import './Greetings.css';

// Create a Greetings component with 2 props:
// lang: A string that can have values: "de", "en", "es" or "fr"
// children: A text

const Greetings = (props) => {
    if (props.lang === "de") return (
        <div className="greetings-wrapper"><p>Hallo {props.children}</p></div>
    )
    if (props.lang === "fr") return (
        <div className="greetings-wrapper"><p>Bonjour {props.children}</p></div>
    )
    return (
        <div className="greetings-wrapper"><p>Hello {props.children}</p></div>
    )
}

export default Greetings;


