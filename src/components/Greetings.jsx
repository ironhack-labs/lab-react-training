const Greetings = ({ lang, children }) => {
    switch (lang) {
        case "de":
            return <div className="box">Hallo {children}</div>
        case "en":
            return <div className="box">Hello {children}</div>
        case "es":
            return <div className="box">Hola {children}</div>
        case "fr":
            return <div className="box">Bonjour {children}</div>
        default:
            break;
    }
}

export default Greetings