function Greetings(props) {
    let message;
    switch (props.lang) {
        case 'de':
            message = 'Hallo';
            break;
        case 'fr':
            message = 'Bonjour';
            break;
        case 'en':
            message = 'Hello';
            break;
        case 'es':
            message = 'Hola'
            break;
        default:
            message = '✌🏼'
    }
    return (
        <div className="greetings-card">
            <h1>{message} {props.children}</h1>
        </div>
    )
}
export default Greetings;