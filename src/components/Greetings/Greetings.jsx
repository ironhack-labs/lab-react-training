import './Greetings.css'

const Greetings = ({ lang, children }) => {
    if (lang === 'de') { return <div className="salutation"><p><b>Hallo {children}</b></p></div> }
    else if (lang === 'en') { return <div className="salutation"> <p><b>Hello {children}</b></p></div> }
    else if (lang === 'es') { return <div className="salutation"><p><b>Hola {children}</b></p></div> }
    else if (lang === 'fr') { return <div className="salutation"><p><b>Bonjour {children}</b></p></div> }
}

export default Greetings