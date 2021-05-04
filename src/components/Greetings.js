import React from 'react';

const greets = {
    'de': 'Hallo',
    'en': 'Hello',
    'es': 'Hola',
    'fr': 'Bonjour',
}

const Greetings = ({ lang, children }) => {
    const salute = greets[lang];

    return (
        <p>{salute + ' ' + children}</p>
    );
};

export default Greetings;