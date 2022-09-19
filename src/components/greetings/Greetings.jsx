function Greetings({ children, lang }) {
    let say;
    switch (lang) {
        case 'de':
            say = 'Hallo';
            break;

        case 'fr':
            say = 'Bonjour';
            break;

        case 'es':
            say = 'Hola';
            break;

        case 'es':
            say = 'Hello';
            break;

        default:
            say = 'Hola';
            break;
    }

    return (
        <div className="say">
            <p>{say} {children}</p>

        </div>
    )


}

export default Greetings;