import React from 'react';
import './Greetings.css';

function Greetings(props) {
    const languages = {
        de: 'Hallo',
        es: 'Hola',
        fr: 'Bonjour',
        it: 'Ciao',
        en: 'Hello'
    }
    return (
        <div className="greetings-container">
            <p>{languages[props.lang]} {props.children}</p>
        </div>
    );
}

export default Greetings;