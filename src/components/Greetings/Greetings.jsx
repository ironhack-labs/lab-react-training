import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let greetingsLanguage = ""
    switch (lang) {

        case 'de':
            greetingsLanguage = "Hallo"
            break;

        case 'en':
            greetingsLanguage = "Hello"
            break;

        case 'es':
            greetingsLanguage = "Hola"
            break;

        case 'fr':
            greetingsLanguage = "Bonjour"
            break;

    }

    return (
        <div className="greetings">{greetingsLanguage} {children}</div>
    )
}

export default Greetings
