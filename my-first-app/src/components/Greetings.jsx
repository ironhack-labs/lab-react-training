const Greetings = (({ lang, children }) => {
    let hola
    if (lang == "de") {
        hola = "hallo"
    } else if (lang == "en") {
        hola = "hello"
    } else if (lang == "es") {
        hola = "hola"
    } else if (lang = "fr") {
        hola = "Bonjour"
    }

    return (
        <div className="Greetings">
            <p>{hola} {children}</p>
        </div>
    )
})

export default Greetings