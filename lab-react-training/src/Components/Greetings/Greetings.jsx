import './Greetings.css'
const Greetings = ({ lang, children }) => {
    let greeting = '';
    switch (lang) {
        case 'de':
            greeting = `hallo ${children}`;
            break;
        case 'es':
            greeting = `Hola ${children}`;
            break;
        case 'fr':
            greeting = `Bonjour ${children}`;
            break;
        default:
            greeting = `Hello ${children}`;
            break;
    }
    return (
        <p className="square">{greeting}</p>
    )
}

export default Greetings;
