import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let greeting
    lang === 'de' ? greeting = 'Hallo' :
        lang === 'en' ? greeting = 'Hello' :
            lang === 'es' ? greeting = 'Hola' :
                lang === 'fr' ? greeting = 'Bonjour' :
                    greeting = 'Hello'


    return (
        <div className='card'>
            <p>{greeting} {children}</p>
        </div>
    )
}

export default Greetings