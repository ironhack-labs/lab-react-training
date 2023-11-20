function Greetings({ lang, children }) {
    let greetingsText = ''
    if (lang === 'de') {
        greetingsText = 'Hallo'
    }
    else if (lang === 'en') {
        greetingsText = 'Hello'
    }
    else if (lang === 'es') {
        greetingsText = 'Hola'
    }
    else if (lang === 'fr') {
        greetingsText = 'Bonjour'
    }
    else {
        greetingsText = 'Tiki Tiki'
    }
    
    return (
        <h3>{ greetingsText } { children }!</h3>
    )
}

export default Greetings