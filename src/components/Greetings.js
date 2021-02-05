import React from 'react';
import './IdCard.css';

function Greetings(props) {

    let greeting = '';

    if (props.lang === 'en') {
        greeting = "Hello ";
    }
    if (props.lang === 'fr') {
        greeting = "Bonjour ";
    }
    if (props.lang === 'de') {
        greeting = "Hallo ";
    }
    if (props.lang === 'es') {
        greeting = "Hola ";
    }

    return (
        <div className="box">
            <h2 lang={'en' || 'fr' || 'de' || 'es'} border="2px">
            {greeting}{props.children}</h2>
        </div>
    )
}
export default Greetings;