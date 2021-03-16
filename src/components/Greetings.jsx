import React from 'react';
import './../views/Blackborder.css';

const Greetings = ({lang, children}) => {
    const languages = {
        fr: "Bonjour",
        en: "Hello",
        de: "Halo",
        es: "Holà"
    };

    return (
        <div className="Greetings">
            <p>{languages[lang]} {children}</p>
        </div>
    )
}

export default Greetings
