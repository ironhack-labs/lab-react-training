const Greetings = ({ lang, children }) => {
    let text = ''

    if (lang === "de") {
        text = "Halo"
    }
    if (lang === "en") {
        text = "Hello"
    }
    if (lang === "es") {
        text = "Hola"
    }
    if (lang === "fr") {
        text = "Bonjour"
    }

    return (

        <article>
            <p>{text} {children}</p>
        </article>
    )
}

export default Greetings