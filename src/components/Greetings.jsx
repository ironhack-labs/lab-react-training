const Greetings = (props) => {
    let detectedLanguage = {};
    switch (props.lang) {
        case "fr":
            detectedLanguage = "Bonjour"
            break;
        case "de":
            detectedLanguage = "Hallo"
            break;
        case "en":
            detectedLanguage = "Hello"
            break;
        case "es":
            detectedLanguage = "Hola"
            break;
        default:
            detectedLanguage = "Pon un idioma válido puto"
            break;
    }
    return (
        <p className="greetingBox">{detectedLanguage} {props.children}</p>)

}

export default Greetings

