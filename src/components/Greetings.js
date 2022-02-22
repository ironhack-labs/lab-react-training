import react from 'react'

function Greetings({ lang, children }) {
    let greeting = ''
    if (lang === 'es') {
        greeting = 'hola'
    }
    if (lang === 'en') {
        greeting = 'hello'
    }
    if (lang === 'fr') {
        greeting = 'bonjour'
    }
    if (lang === 'de') {
        greeting = 'hallo'
    }
    return (
        <div>
            <p>{greeting}, {children}</p>

        </div>
    )
}


export default Greetings