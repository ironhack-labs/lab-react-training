import "./Greetings.css"

const Greetings = props => {

    const { lang } = props

    const getGreeting = (lang) => {
        switch (lang) {
            case "de": return "Hallo"
                break;
            case "fr": return "Bonjour"
                break;
            case "en": return "Hello"
                break;
            case "es": return "Hola"
                break;
            default:
                break;
        }
    }

    return (
        <div className="greetCard">
            <p><span>{getGreeting(lang)}</span> {props.children}</p>
        </div>
    )

}

export default Greetings