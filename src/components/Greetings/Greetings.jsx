import "./Greetings.css"


const Greetings = ({ lang, children }) => {

    let message

    if (lang === "es") {
        message = "Hola"
    }

    if (lang == "fr") {
        message = "Salut"
    }

    if (lang === "de") {
        message = "Hallo"
    }

    if (lang == "en") {
        message = "Hello"
    }

    const text = message + " " + children


    return (
        <div className="BoxGreetings">
            <p> {text} </p>
        </div>
    )


}

export default Greetings