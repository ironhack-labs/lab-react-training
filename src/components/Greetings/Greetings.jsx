import "./Greetings.css"

const Greetings = ({ lang, children }) => {

    switch (lang) {
        case 'de':
            return <h5 className="border">Hallo {children}</h5>
            break;
        case 'en':
            return <h5 className="border">Hello {children}</h5>
            break;
        case 'es':
            return <h5 className="border">Hola {children}</h5>
            break;
        case 'fr':
            return <h5 className="border">Bonjour {children}</h5>
            break;

    }

    }
export default Greetings