import './Greetings.css'

const Greetings = ({ lang, children }) => {

    if (lang === 'de') { return <p className='greetingText'>Hallo {children}</p> }
    if (lang === 'fr') { return <p className='greetingText'>Bonjour {children}</p> }
    if (lang === 'en') { return <p className='greetingText'>Hello {children}</p> }
    if (lang === 'es') { return <p className='greetingText'>Hola {children}</p> }

}

export default Greetings