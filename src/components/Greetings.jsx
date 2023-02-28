import './Greetings.css'

const Greetings = ({ lang, children }) => {
    let Greeting = ''
    if (lang === 'de') {
        Greeting = 'Hallo'
    } else if (lang === 'en') {
        Greeting = 'Hello'

    } else if (lang === 'es') {
        Greeting = 'Hola'
    } else if (lang === 'fr') {
        Greeting = 'Bonjour'
    }

    return (
        <section className="newChildren">
            <p> {Greeting} {children}</p>
        </section>)

}

export default Greetings