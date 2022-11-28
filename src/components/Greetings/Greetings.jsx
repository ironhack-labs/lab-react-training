import './Greetings.css'

const Greetings = props => {
    const { children, lang } = props
    let saludo = ''
    switch (lang) {
        case 'de': saludo = 'Hallo'
            break;
        case 'fr': saludo = 'Bonjour'
            break;
        case 'es': saludo = 'Hola'
            break;
        case 'en': saludo = 'Hello'
            break;
    }

    return (
        <>
            <p>{saludo}</p>
            <p>{props.children}</p>
        </>
    )
}
export default Greetings