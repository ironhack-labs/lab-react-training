import React from 'react';

function Greetings({lang, children} ) {

    if (lang === 'en') {
        return `Hello ${children}`
    } else if (lang === 'fr') {
        return `Bonjour ${children}`
    } 

    return (
        <div>
            <p>{lang}</p>
        </div>
    )
}

export default Greetings;