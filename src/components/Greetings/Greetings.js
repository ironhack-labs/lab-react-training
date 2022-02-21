import "./Greetings.css"
const Greetings = props => {

    const { lang, children } = props
    let greeting = ""
    if (lang === "de") greeting = "Hallo"
    if (lang === "fr") greeting = "Bonjour"
    if (lang === "es") greeting = "Hola"
    if (lang === "en") greeting = "Hello"

    return (
        <h3 className="greetingCard">{greeting} {children}</h3>
    )
}
export default Greetings