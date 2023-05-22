const Greetings = ({ lang, children }) => {

    let greet

    if (lang === "en") {
        greet = "Hello"
    }
    if (lang === "de") {
        greet = "Hallo"
    }
    if (lang === "es") {
        greet = "Hola"
    }
    if (lang === "fr") {
        greet = "Bonjour"
    }

    const text = greet + " " + children

    return (
        <p>{text}</p>
    )

}


export default Greetings