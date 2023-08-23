const Greetings = ({ lang, children }) => {
    if (lang === "de") {
        return (
            <>
                <p>Hallo {children}</p>
            </>
        )
    } else if (lang === "es") {
        return (
            <>
                <p>Hola {children}</p>
            </>
        )
    } else if (lang === "en") {
        return (
            <>
                <p>Hello {children}</p>
            </>
        )
    } else if (lang === "fr") {
        return (
            <>
                <p>Bonjour {children}</p>
            </>
        )
    }

}

export default Greetings