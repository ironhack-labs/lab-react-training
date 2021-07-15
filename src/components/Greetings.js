import React from 'react'

function Greetings({ lang, children }) {

    const greetingPerLanguage = {
        de: "Hallo", 
        en: "Hi",
        es: "Hola", 
        fr: "Bonjour"
    }

    const greetingText = () => {
        for (let key in greetingPerLanguage) {
            if (key === lang) {
                return greetingPerLanguage[key];
            }
        }
        return "Goedemorgen";
    }

    return (
        <div className="iteration-container">
            <h5>{greetingText()} {children}</h5>
        </div>
    )
}

export default Greetings;
