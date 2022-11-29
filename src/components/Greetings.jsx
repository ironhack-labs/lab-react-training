import './Greetings.css'
const Greetings = (props) => {

    const { children, lang } = props
    let saludo = ''
    switch (lang) {
        case 'de': saludo = 'Hallo'
            break;
        case 'en': saludo = 'Hello'
            break;
        case 'es': saludo = 'Hola'
            break;
        case 'fr': saludo = 'Bonjour'
            break;
    }

    return (
        <article className='Greetings'>
            <p>{saludo}</p>
            <p>{props.children}</p>
        </article>
    )
}

export default Greetings