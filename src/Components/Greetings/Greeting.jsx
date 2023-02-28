import './Greeting.css'

const Greeting = ({ lang, children }) => {

    let hi

    if (lang === "de") {
        hi = 'Hallo'
    }
    else if (lang === "fr") {
        hi = 'Bonjour'
    }
    else if (lang === "es") {
        hi = 'Hola'
    }
    else if (lang === "en")
        hi = 'Hello'

    return (
        <div className='greeting'>
            <p> {hi} {children}</p>
        </div>

    )
}

export default Greeting;