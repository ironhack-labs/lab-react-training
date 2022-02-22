const Greetings = ({ lang, children }) => {
    let greet

    if (lang === 'es') {
        greet = 'Hola'
    }
    if (lang === 'en') {
        greet = 'Hello'
    }
    if (lang === 'fr') {
        greet = 'Bonjour'
    }
    if (lang === 'de') {
        greet = 'Hallo'
    }

    return (
        <p className="greetings" lang={lang}>{greet} {children}</p>
    )
}

export default Greetings