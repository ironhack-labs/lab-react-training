import './greetings.css'

const Greetings = (props) => {

    const { lang, children } = props

    let greetings = ''
    if (lang === 'de') {
        greetings = 'Hallo'
    } else if (lang === 'fr') {
        greetings = 'Bonjour'
    }

    return (
        <p className="greets">{greetings} {children}</p>
    )
}

export default Greetings