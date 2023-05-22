const Greetings = ({ lang, children }) => {

    let greeting
    lang === 'de' ? greeting = 'Hallo' :
        lang === 'en' ? greeting = 'Hello' :
            lang === 'es' ? greeting = 'Hola' :
                lang === 'fr' ? greeting = 'Bonjour' :
                    greeting = 'Hello'
    return (
        <section className="greeting">
            <p>{greeting} {children}</p>
        </section>
    )
}

export default Greetings