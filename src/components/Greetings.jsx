import React from 'react';
import './../views/Blackborder.css';

const Greetings = (props) => {
    const languages = {
        fr: "Bonjour",
        en: "Hello",
        de: "Halo",
        es: "Holà"
    };

    return (
        <div className="Greetings">
            <p>{languages[props.lang]} {props.children}</p>
        </div>
    )
}

export default Greetings
