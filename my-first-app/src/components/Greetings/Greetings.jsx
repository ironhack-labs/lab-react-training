const Greetings = ({ lang, children }) => {

    let greeting

    if (lang === "en") {
        greeting = <h2>Hello, {children}</h2>
    } else if (lang === "fr") {
        greeting = <h2>Bonjour, {children}</h2>
    } else if (lang === "de") {
        greeting = <h2>Hallo, {children}</h2>
    } else if (lang === "es") {
        greeting = <h2>Hola, {children}</h2>
    } else {
        greeting = <h2>Unknown language, {children}</h2>
    }

    return <article>{greeting}</article>
}

export default Greetings