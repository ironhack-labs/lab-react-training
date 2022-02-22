
export default function Greetings(props) {
    let word = ''
    switch (props.lang) {
        case 'de':
            word = 'Hallo'
            break;
        case 'en':
            word = 'Hello'
            break;
        case 'es':
            word = 'Hola'
            break;
        case 'fr':
            word = 'Bonjour'
            break;
        default:
            break;
    }
    return (
        <div>
            <p>{word} {props.children}</p>
        </div>

    )
}
