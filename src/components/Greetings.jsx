

const Greetings = ({ lang, children }) => {

    let word
    switch (lang) {
        case "es":
            word = "Hola"
            break;
        case "de":
            word = "Hallo"
            break;
        case "en":
            word = "Hello"
            break;
        case "fr":
            word = "Bonjour"
            break;
        default:
            console.log("error")
    }

    /* { lang === "es" ? 'Hola' `${children}` : undefined }
    { lang === "de" ? "Hallo" `${children}` : undefined }
    { lang === "en" ? "Hello" `${children}` : undefined }
    { lang === "fr" ? "Bonjour" `${children}` : undefined } */


    return (
        <article>
            <p>{word} {children}</p>
        </article>
    )

}

export default Greetings