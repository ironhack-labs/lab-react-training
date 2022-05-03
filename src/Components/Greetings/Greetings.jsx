import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let idioma;
    if (lang == "fr") {
        idioma = "bonjour"
    } else {
        idioma = "buenos dias "
    }


    return (
        <div className="card1">
            <p>{idioma} {children}</p>
        </div>
    )
}

export default Greetings