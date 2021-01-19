import React from 'react';
import './Greetings.css';

function Greetings(props) {
    let hello = '';
    if(props.lang == 'en') {
        hello = 'Hello';
    }
    if(props.lang == 'de') {
        hello = 'Hallo';
    }
    if(props.lang == 'es') {
        hello = 'Hola';
    }
    if(props.lang == 'fr') {
        hello = 'Bonjour';
    }

    return (
        <div>
            <p className="border-box" lang={'en' || 'de' || 'es' || 'fr'}>{hello} {props.children}</p>
        </div>
    )
}

export {Greetings};