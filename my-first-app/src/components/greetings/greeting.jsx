import "./greeting.css"

const Greetings = ({ lang }) => {

    let greeting = ""
    if (lang === "de") {
        greeting = "Hallo"
    } else if (lang = "fr") {
        greeting = "Bonjour"
    } else if (lang = "es") {
        greeting = "Hello"
    } else {
        greeting = "Hola"
    }

    return (
        <div className="greeting">
            {greeting}
        </div>
    )
}

export default Greetings