import './Greetings.css'

const Greeting = ({ lang, children }) => {
    if (lang === "de") {
        return (
            <div className='Greeting'>
                <p>Hallo {children}</p>
            </div>
        )
    }
    else if (lang === "en") {
        return (
            <div className='Greeting'>
                <p>Hello {children}</p>
            </div>
        )
    }
    else if (lang === "es") {
        return (
            <div className='Greeting'>
                <p>Hola {children}</p>
            </div>
        )
    }
    else if (lang === "fr") {
        return (
            <div className='Greeting'>
                <p>Bonjour {children}</p>
            </div>
        )
    }
}

export default Greeting