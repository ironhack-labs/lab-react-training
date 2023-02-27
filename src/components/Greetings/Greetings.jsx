import './Greetings.css'

const Greetings = ({ lang, children }) => {
    let greetings
    lang === 'de'
        ? greetings = 'Hallo'
        : lang === 'es'
            ? greetings = 'Hola'
            : lang === 'fr'
                ? greetings = 'Bonjour'
                : greetings = 'Ciao'
    return (
        <div className="GreetingsCard">
            <p>{greetings} {children}</p>
        </div>
    )
}

export default Greetings