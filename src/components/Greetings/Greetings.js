const Greetings = ({ lang, children }) => {

    let text = ''

    switch (lang) {
        case "de":
            text = 'Hallo'
            break
        case "en":
            text = 'Hello'
            break
        case "es":
            text = 'Hola'
            break
        case "fr":
            text = 'Bonjour'
            break
    }

    return (
        <article className="Greetings">
            <h5>{text} {children}</h5>
        </article>
    )
}

export default Greetings