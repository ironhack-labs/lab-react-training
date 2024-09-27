import './Greeting.css'

const Greetings = ({ lang, children }) => {
    if (lang === "fr") {
        return <p className="greeting">Bonjour {children}!</p>
    }
    if (lang === "es") {
        return <p className="greeting">Hola {children}!</p>
    }
    if (lang === "en") {
        return <p className="greeting">Hello {children}!</p>
    }
    if (lang === "de") {
        return <p className="greeting">Halo {children}!</p>
    }
}
export default Greetings