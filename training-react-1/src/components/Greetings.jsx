const Greetings = ({ lang, children }) => {

    let greeting

    if (lang === "de") {
        greeting = <p>Hallo {children}</p>
    }
    if (lang === "en") {
        greeting = <p>Hello {children}</p>
    }
    if (lang === "es") {
        greeting = <p>Hola {children}</p>
    }
    else if (lang === "fr") {
        greeting = <p>Bonjour {children}</p>
    }

    return (
        <div className="greetings">
            {greeting}
        </div>

    )
}

export default Greetings