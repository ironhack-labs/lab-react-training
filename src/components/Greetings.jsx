const Greetings = ({ lang, children }) => {
    let greetingText;

    switch (lang) {
        case 'de':
            greetingText = `Hallo ${children}!`
            break;

        case 'en':
            greetingText = `Hello ${children}!`
            break;

        case 'es':
            greetingText = `¡Hola ${children}!`
            break;

        case 'fr':
            greetingText = `Bonjour ${children}!`
            break;
    
        default:
            greetingText = `Hello ${children}!`
            break;
    }

    return(
        <div className="card">
            {greetingText}
        </div>
    )
}

export default Greetings