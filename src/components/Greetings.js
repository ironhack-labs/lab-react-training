const Greetings = ({ lang, children }) => {

    let greet

    if (lang === "de") greet = "Hallo"

    if (lang === "es") greet = "Hola"

    if (lang === "en") greet = "Hello"

    if (lang === "fr") greet = "Bonjour"



    return (
        <p lang={lang}>{greet} {children}</p>
    )
}
export default Greetings