import './Greetings.css'
const Greetings = (greetingsData) => {

    const { lang, children } = greetingsData

    if (lang === "de") {
        return <p className="greetings">Hallo {children}</p>
    }
    if (lang === "fr") {
        return <p className="greetings">Bonjour {children}</p>
    }
    if (lang === "eng") {
        return <p className="greetings">Hello {children}</p>
    }
    if (lang === "es") {
        return <p className="greetings">Hola {children}</p>
    }

}

export default Greetings