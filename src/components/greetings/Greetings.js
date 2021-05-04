import React from 'react';
import './Greetings.css';

function Greetings({lang, children}) {
    const languages = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Holla',
        fr: 'Bonjour'
    }
  
    return (
        <div className="greetings-container">
            <p>{languages[lang] + ' ' + children}</p>
        </div>
    );
}

export default Greetings;
