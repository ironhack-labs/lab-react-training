import React from 'react';
import './Greetings.css';


function Greetings(props) {
    // console.log(props.lang);
    const languages = {
        de: 'Hallo',
        es: 'Hola',
        fr: 'Bonjour',
        it: 'Ciao',
        en: 'Hello'
    }
    return (
        // console.log(props.children)
        <div className="greetings-container">
            <p>{languages[props.lang]}  {props.children}</p>
        </div>
    );
}

export default Greetings; 