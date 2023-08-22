import './Greetings.css'

const Greetings = ({ lang, children }) => {

    if (lang === 'es') {
        return <p>Hola {children}</p>
    }

    if (lang === 'en') {
        return <p>hello {children}</p>
    }

    if (lang === 'de') {
        return <p>bon dia {children}</p>
    }

    if (lang === 'fr') {
        return <p>bongour {children}</p>
    }


}

export default Greetings