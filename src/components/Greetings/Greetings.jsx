
import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let hi

    if (lang === "de") {
        hi = 'Hallo'
    }
    else if (lang === "en") {
        hi = 'Hello'
    }
    else if (lang === "es") {
        hi = 'Hola'
    }
    else if (lang === "fr") {
        hi = 'Bonjour'
    }

    return <p className='Greetings'> {hi} {children}</p>

}

export default Greetings