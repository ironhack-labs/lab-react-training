import React from 'react';
import "./index.css";

const langConfig = {
    en: 'Hello',
    es: 'Hola',
    de: 'Halo',
    fr: 'Bonjour'
}

const Greetings = ({ lang , children}) => {

    return (
        <div className="Greetings">
            {langConfig[lang]} {children}
        </div>
    );
};

export default Greetings;