import './Greetings.css'

const Greetings = ({ lang, children }) => {

    switch (lang) {
        case 'de': return (<p className='greeting'>Hallo {children}</p>)
        case 'fr': return (<p className='greeting'>Bonjour {children}</p>)
        case 'en': return (<p className='greeting'>Hello {children}</p>)
        case 'es': return (<p className='greeting'>Hola {children}</p>)

    }
}

export default Greetings