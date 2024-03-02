import React from 'react'


function Greetings({ lang, children }) {
    const language = (lang) => {
        if (lang === 'de') return 'Hallo'
        else if (lang === 'fr') return 'Bonjour'
    }
    return (
        <div>
            <h1>
                {language(lang)} {children}
            </h1>
        </div>
    )
}

export default Greetings