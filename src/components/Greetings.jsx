import './Greetings.css'

const Greetings = props => {

    const { lang, children } = props
    let greeting = ''
    switch (lang) {
        case 'fr':
            greeting = 'Bonjour'
            break;
        case 'de':
            greeting = 'Hallo'
            break;
        case 'en':
            greeting = 'Hello'
            break;
        case 'es':
            greeting = 'Hola'
            break;
    }
    return (
        <article className='Greetings'>
            <p> {greeting} {children} </p>
        </article>
    )
}

export default Greetings