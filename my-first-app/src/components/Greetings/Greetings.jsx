const Greetings = ({ lang, children }) => {

    if (lang === 'de') {
        return (
            <div>
                <p>Hallo {children}</p>
            </div>
        )
    }

    if (lang === 'fr') {
        return (
            <div>
                <p>Bonjour {children}</p>
            </div>
        )
    }

    if (lang === 'es') {
        return (
            <div>
                <p>Que pasa {children}</p>
            </div>
        )
    }

    if (lang === 'en') {
        return (
            <div>
                <p>Hey {children}</p>
            </div>
        )
    }

}

export default Greetings