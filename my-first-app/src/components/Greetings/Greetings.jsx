
const Greetings = ({ lang, children }) => {

    if (lang === 'en') {
        return <p>Hello {children}</p>
    } else if (lang === 'es') {
        return <p>Hola {children}</p>
    } else if (lang === 'de') {
        return <p>Hallo {children}</p>
    } else if (lang === 'fr') {
        return <p>Bonjour {children}</p>
    }
    return null
}

export default Greetings