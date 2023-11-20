const Greetings = ({ lang, children }) => {

    let message = ''

    if (lang === "de") {
        message = "Hallo"
    }
    if (lang === "fr") {
        message = "Bonjour"
    }
    if (lang === "es") {
        message = "Hola"
    }
    if (lang === "en") {
        message = "Hello"
    }

    return (
        <p> {message} {children} </p>
    )
}

export default Greetings