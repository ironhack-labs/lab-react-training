import './Greetings.css'

const Greetings = props => {
    const { lang, children } = props

    if (lang === 'de') {
        return <p className='greetP'>Hallo {children}</p>
    } else if (lang === 'fr') {
        return <p className='greetP'>Bonjour {children}</p>
    } else if (lang === 'es') {
        return <p className='greetP'>Hola {children}</p>
    } else if (lang === 'en') {
        return <p className='greetP'>Hello {children}</p>
    }
}

export default Greetings