import "./index.css";
import React from 'react';

function Greetings({ lang, children }) {
    const greeting = (language) => {
        if(language === 'fr') {
            return ('Bonjour')
        } else if (language === 'de') {
            return ('Hallo')
        } else if (language === 'en') {
            return ('Hello')
        } else {
            return ( 'Other language')
        }
    }

    return (
        <div className="greetings-container">
            <h3>{greeting(lang)} {children}</h3>
        </div>
    )
};


export default Greetings;