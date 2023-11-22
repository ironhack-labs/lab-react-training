const Greetings = ({
    lang,
    children
}) => {
    let greeting = ""
    switch (lang) {
        case 'de':
            greeting = "Hallo "
            break;
        case 'en':
            greeting = "Hello "
            break;
        case 'es':
            greeting = 'Hola '
            break;
        case 'fr':
            greeting = 'Bonjour'
            break;
    }

    return (
        <div className="greets" >{greeting} {children}</div>
    )

}
export default Greetings