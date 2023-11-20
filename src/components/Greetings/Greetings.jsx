const Greetings = ({ lang, children }) => {
    switch (lang) {
        case 'de':
            return <h2>Hallo {children}</h2>
        case 'en':
            return <h2>Hello {children}</h2>
        case 'es':
            return <h2>Hola {children}</h2>
        case 'fr':
            return <h2>Bonjour {children}</h2>
        default:
            return <h2>Hello {children}</h2>
    }

}
export default Greetings