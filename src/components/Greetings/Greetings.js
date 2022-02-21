import './Greetings.css'

const Greetings = (props) => {

    const { lang, children } = props

    let text = ''

    if (lang === 'de') {
        text = "Hallo"
    } 

    if (lang === 'fr') {
        text = "Bonjour"
    }

    if (lang === 'en') {
        text = 'Hello'
    }

    if (lang === 'es') {
        text = 'Hola'
    }

    
    return (

        <article className="greetings">

            <p>{text} {children}</p>

        </article>
    )
}

export default Greetings