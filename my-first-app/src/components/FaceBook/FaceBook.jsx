const FaceBook = ({ lang, children }) => {

    let message

    if (lang === "de") {
        message = "Hallo"
    } else if (lang === "en") {
        message = "Hello"
    } else if (lang === "es") {
        message = "Hola"
    } else if (lang === "fr") {
        message = "Bonjour"
    }

    return (<p>{message} {children}</p>)
}

export default FaceBook