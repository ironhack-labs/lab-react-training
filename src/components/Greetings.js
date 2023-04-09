function Greetings({ lang, children }) {
    return (
        <div className="greetings">
            {lang === "en" && <p>Hello {children}</p>}
            {lang === "de" && <p>Hallo {children}</p>}
            {lang === "es" && <p>Hola {children}</p>}
            {lang === "fr" && <p>Bonjour {children}</p>}
        </div>
    )
}


export default Greetings;