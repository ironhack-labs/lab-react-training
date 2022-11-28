import './Greeting.css'

const Greeting = props => {

    const { lang } = props

    const language = lg => {
        switch (lg) {
            case 'de':
                return 'Hallo'
            case 'en':
                return 'Hello'
            case 'es':
                return 'Hola'
            default:
                return 'Bonjour'
        }
    }

    return (
        <section className="Greeting">
            <span>{language(lang)}</span><span>{props.children}</span>
        </section>
    )
}

export default Greeting