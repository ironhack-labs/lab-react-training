const Greetings = ({ lang, children }) => {

    const greetingsLanguage = (lang) => {

        let greeting = ''

        switch (lang) {
            case 'de': greeting = 'Hallo'
                break;
            case 'en': greeting = 'Hello'
                break;
            case 'es': greeting = 'Hola'
                break;
            case 'fr': greeting = 'Bonjour'
                break;

            default: greeting = ''
        }
        return greeting
    }
    return (
        <>
            <p>{greetingsLanguage(lang)} {children}</p>
        </>
    )
}

export default Greetings