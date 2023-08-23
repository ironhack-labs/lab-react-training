import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let greeting

    switch (lang) {
        case 'de':
            greeting = 'Hallo'
            break
        case 'es':
            greeting = 'Hola'
            break
        case 'fr':
            greeting = 'Bonjour'
            break
        default:
            greeting = 'Hello'
    }

    return (

        <h2 className="Greetings">{greeting} {children}</h2>
    )
}

export default Greetings