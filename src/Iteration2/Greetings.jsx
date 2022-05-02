import "./iteration2.css"

const Greetings = ({ lang, children }) => {

    if (lang === 'de') {
        return <h5 className="box">Hallo {children}</h5>
    } else if (lang === 'en') {
        return <h5 className="box">Hello {children}</h5>
    } else if (lang === 'es') {
        return <h5 className="box">Hola {children}</h5>
    } else if (lang === 'fr') {
        return <h5 className="box">Bonjour {children}</h5>
    }
}

export default Greetings