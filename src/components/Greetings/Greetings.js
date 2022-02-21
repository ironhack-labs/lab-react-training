import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let translatedGreeting = ""

    if (lang === "de") {
        translatedGreeting = 'Hallo '
    }

    if (lang === "en") {
        translatedGreeting = 'Hi '
    }

    if (lang === "es") {
        translatedGreeting = 'Hola '
    }

    if (lang === "fr") {
        translatedGreeting = 'Bonjour '
    }

    return (

        <p className="greetings">{translatedGreeting}{children}</p>

    )

}

export default Greetings