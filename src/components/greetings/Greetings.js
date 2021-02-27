const Greetings = ({ lang, children }) => {
    let greeting = '';

    switch (lang) {
        case 'en':
            greeting = 'Hello';
            break;
        case 'es':
            greeting = 'Hola';
            break;
        case 'de':
            greeting = 'Hallo';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
    }

    return (
        <div className="border border-dark p-3 mb-2">
            <p>{greeting} {children}</p>
        </div>
    )
}

export default Greetings;