import React from 'react';

const Greetings = ({lang, children}) =>{
    const greeting = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
    };

    return (
    <div>
    {greeting[lang]} {children}
    </div>
    )
}

export default Greetings;