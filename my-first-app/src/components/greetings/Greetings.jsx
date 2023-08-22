import './Greetings.css'

const Greetings = ({ lang, children }) => {
    if (lang === 'de') {
        return (
            <p>Hallo {children}</p>)
    }
    if (lang === 'en') {
        return (
            <p>Hello {children}</p>)
    }
    if (lang === 'es') {
        return (
            <p>Hola {children}</p>)
    }
    if (lang === 'fr') {
        return (
            <p>Bonjour {children}</p>)
    }
}

export default Greetings