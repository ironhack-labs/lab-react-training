import React from 'react';
import './Greetings.css';

const handleLang = (lang) => {
    switch (lang) {
        case 'de':
            return 'Hallo';
        case 'en':
            return 'Hello';
        case 'fr':
            return 'Bonjour';
        case 'es':
            return 'Hola';
    }
}

const Greetings = ({lang, children}) => <div className="container">{handleLang(lang)} {children}</div>;

export default Greetings;