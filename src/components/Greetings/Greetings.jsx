import './Greetings.css'

const Greetings = ({ lang, children }) => {
    {
        switch (lang) {
            case 'de':
                return <p>Hallo, {children}</p>
                break
            case 'en':
                return <p>Hello, {children}</p>
                break
            case 'es':
                return <p>Hola, {children}</p>
                break
            case 'fr':
                return <p>Bonjour, {children}</p>
                break
        }
    }
}

export default Greetings