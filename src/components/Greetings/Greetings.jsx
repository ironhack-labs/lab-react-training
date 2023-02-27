
import "./Greetings.css"

function Greetings({ lang, children }) {
    let greetings
    lang === "de"
        ? greetings = 'Hallo'
        : lang === "en"
            ? greetings = 'Hello'
            : lang === "es"
                ? greetings = 'Hola'
                : greetings = 'Bonjour'
    return (
        <div className="GreatinsContainer">
            <p>{greetings} {children}</p>
        </div>
    )
}

export default Greetings;
