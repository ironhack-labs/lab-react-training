import './Greetings.css'
export const Greetings = ({ lang, children }) => {
    switch (lang) {
        case 'de':
            return (
                <p className="greetings-p">Hallo {children}</p>
            )
        case 'en':
            return (
                <p className="greetings-p">Hello {children}</p>
            )
        case 'es':
            return (
                <p className="greetings-p">Hola {children}</p>
            )
        case 'fr':
            return (
                <p className="greetings-p">Salut {children}</p>
            )
        default:
            return (
                <p className="greetings-p">Hello {children}</p>
            )
    }
}