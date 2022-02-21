

function Greetings(props) {
    
    const { lang, children } = props
    
    let greet = ''

    if (lang === 'es') {
        greet = 'Hola'
    }
    
    else if (lang === 'en') {
        greet = 'Hello'
    }
    
    else if (lang === 'de') {
        greet = 'Hallo'
    }
    
    else if (lang === 'fr') {
        greet = 'Bonjour'
    }

    return (
        <p lang={lang}> {greet} {children}</p>
    )
}

export default Greetings
