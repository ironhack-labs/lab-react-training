import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
    if (props.lang === "de") return (
        <div className="greetings"><p>Hallo {props.children}</p></div>
    )
    if (props.lang === "fr") return (
        <div className="greetings"><p>Bonjour {props.children}</p></div>
    )
    return (
        <div className="greetings"><p>Hello {props.children}</p></div>
    )
}

export default Greetings;


