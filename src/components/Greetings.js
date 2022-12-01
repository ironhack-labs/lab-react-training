const Greetings = props => {
    const { lang, children } = props
    let language = ' '

    if (lang === 'en') {
        language = 'Hello'
    } else if (lang === 'es') {
        language = 'Hola'
    } else if (lang === 'de') {
        language = 'Hallo'
    } else {
        language = 'Bonjour'
    }
    return (
        <article className="greetings">
            <h3>{language} {children}</h3>
        </article>
    )
}

export default Greetings