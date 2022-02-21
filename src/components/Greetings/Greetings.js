import './Greetings.css'

const Greetings = ({ lang, children }) => {

    const hi = lang === 'de'
        ? 'Hallo'
        : lang === 'en'
            ? 'Hello'
            : lang === 'es'
                ? 'Hola'
                : 'Bonjour'

    return (
        <article className="greetings">
            <h3>{hi} {children}</h3>
        </article>
    )
}

export default Greetings