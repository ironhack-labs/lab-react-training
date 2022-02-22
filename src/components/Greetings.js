const Greetings = ({ lang, greeting, children }) => {
    
    if (lang === 'de') {
        greeting = "Hallo"
    }
    
    if (lang === 'en') {
        greeting = "Hello"
    }
    
    if (lang === 'es') {
        greeting = "Hola"
    }
    
    if (lang === 'fr') {
        greeting = "Bonjour"
    }
    return (
        <article>
            <p lang={lang}>{greeting} {children}</p>
        </article>
    )
}

export default Greetings