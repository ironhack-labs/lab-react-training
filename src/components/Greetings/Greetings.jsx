const Greetings = ({ lang, children }) => {

    if ('en' === lang) {
        return <h2>hello {children}</h2>
    }
    else if ('de' === lang) {
        return <h2>hallo {children}</h2>
    }
    else if ('fr' === lang) {
        return <h2>bonjour {children}</h2>
    }
    else if ('es' === lang) {
        return <h2>hola {children}</h2>
    }
}


export default Greetings
