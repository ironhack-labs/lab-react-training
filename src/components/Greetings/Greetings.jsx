import './greetings.css'

const Greetings = (props) => {
    let language = ''
    switch (props.lang) {
        case 'de':
            language = 'Hallo'
            break;
        case 'en':
            language = 'Hello'
            break;
        case 'es':
            language = 'Hola'
            break;
        case 'fr':
            language = 'Bonjour'
            break;
        default:
            language = '你好'
    }
    return (
        <div className="greetings">
            <p>{language} {props.children}</p>
        </div>
    )
}

export default Greetings