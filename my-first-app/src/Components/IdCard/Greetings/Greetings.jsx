function Greetings({ lang, children }) {


    let text = ''
    if (lang === 'de') {
        text = 'hallo'
    }
    else if (lang === 'fr') {
        text = 'Bonjour'
    }
    else if (lang === 'es') {
        text = 'Hola'
    }
    else if (lang === 'en') {
        text = 'hello'
    }

    return (
        <article>
            <p>{text} {children}</p>
            <hr />
        </article>

    )
}

export default Greetings