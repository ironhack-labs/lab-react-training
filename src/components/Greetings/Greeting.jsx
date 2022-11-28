import './Greeting.css'
function Greetings({ lang, children }) {
    if (lang === 'de') {
        return (
            <div className="Greetings">
                <p>Hallo {children}</p>
            </div>
        )
    }
    if (lang === 'en') {
        return (
            <div className="Greetings">
                <p>Hello {children}</p>
            </div>
        )
    }
    if (lang === 'es') {
        return (
            <div className="Greetings">
                <p>Hola {children}</p>
            </div>
        )
    }
    if (lang === 'fr') {
        return (
            <div className="Greetings">
                <p>Bonjour {children}</p>
            </div>
        )
    }
}
export default Greetings