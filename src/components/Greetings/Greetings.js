import './Greetings.css'

const Greetings = props => {

    const { lang, children } = props

    let greeting = ''

    if (lang === 'es') {
        greeting = 'Hola'
    }
    if (lang === 'en') {
        greeting = 'Hello'
    }
    if (lang === 'fr') {
        greeting = 'Bonjour'
    }
    if (lang === 'de') {
        greeting = 'Hallo'
    }

    return (
        <div className="greetings">
            <p >{greeting} {children}</p>

        </div>
    )

}

export default Greetings