import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let exp = '';

    switch (lang) {
        case 'de':
            exp = 'Hallo'
            break;
        case 'fr':
            exp = 'Bonjour'
            break;
        case 'en':
            exp = 'Hello'
            break
        default:
        
    }

    return (

        <article>
            <p>{exp}, {children}</p>
        </article>
    )

}

export default Greetings