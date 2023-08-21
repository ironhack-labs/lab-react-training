const Greetings = ({ lang, children }) => {

    let welcomeMessageLanguage
    switch (lang) {
        case 'de':
            welcomeMessageLanguage = 'Hallo'
            break;
        case 'en':
            welcomeMessageLanguage = 'Welcome'
            break;
        case 'es':
            welcomeMessageLanguage = 'Bienvenid@'
            break;
        case 'fr':
            welcomeMessageLanguage = 'Bonjour'
            break;

    }
    return (
        <>
            <h2 style={{ border: '2px solid black', textAlign: 'start' }}>{welcomeMessageLanguage} {children}</h2>
        </>
    )
}

export default Greetings