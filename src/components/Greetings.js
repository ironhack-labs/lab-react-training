import React from 'react';

let languageGreeting = (language) => {
    if (language === "en") {
        return "Hello";
    } else if (language === "fr") {
        return "Bonjour";
    } else if (language === "de") {
        return "Hallo";
    } else if (language === "es") {
        return "Hola";
    }
}

const Greetings = ({ lang, children }) => {
    return (
        <div>
        <h2 className='tc bg-light-green br3 pa3 ma3 dib bw2 shadow-5'>{languageGreeting(lang)} {children}</h2>
        </div>
    )
}
export default Greetings;
