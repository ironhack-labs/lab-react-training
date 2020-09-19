import React from 'react';
import './Greetings.css';


function Greetings(props) {
    const langs = {
        de: 'Hallo',
        es: 'Hola',
        fr: 'Bonjour',
        it: 'Ciao',
        en: 'Hello'
    }
    return (
        <div className="Greetings">
            <p>{langs[props.lang]}  {props.children}</p>
        </div>
    );
}

export default Greetings;