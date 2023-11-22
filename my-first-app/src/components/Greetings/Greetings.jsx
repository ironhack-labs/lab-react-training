
const Greetings = ({ lang, children }) => {

    let text = ''

    if (lang === 'de') {
        text = 'Hallo'
    } else if
        (lang === 'fr') {
        text = 'Bonjour'
    }
    else if (lang === 'en') {
        text = 'Hello'
    }
    else if (lang === 'es') {
        text = 'Hola'
    }

    return (
        <section>
            <h3> {text}</h3>
            {children}
        </section>
    )
}

export default Greetings