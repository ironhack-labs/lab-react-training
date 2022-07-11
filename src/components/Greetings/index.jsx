import './greetings.css'

const Greetings = ({ lang, children }) => {
    let greeting = ''
    switch (lang) {
        case 'de':
            greeting = `Hallo`
            break
        case 'en':
            greeting = `Hello`
            break
        case 'es':
            greeting = `Hola`
            break
        case 'fr':
            greeting = `Bonjour`
            break
        default:
            greeting = '👋'
    }

    return (
        <article className='greeting'>
            <p>{greeting} {children}</p>
        </article>
    )
}

export default Greetings