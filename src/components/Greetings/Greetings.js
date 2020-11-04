import React from 'react';
import './Greetings.css';

const Greetings = (
    {
        lang,
        children
    }
) => {

const greetingsEnum = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Salut"
};

const setGreeting = lang => {
    return greetingsEnum[lang];
}    
return(
<div className="greeting-container">
    <p>{setGreeting(lang) } {children}</p>
</div>
);
};

export default Greetings;