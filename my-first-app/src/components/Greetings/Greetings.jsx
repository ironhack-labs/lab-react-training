import './Greetings.css'

const Greetings = ({ lang, children }) => {
    
    if ( lang === 'de'){
        return <h2>hallo {children}</h2>
    }
    if ( lang === 'en'){
        return <h2>hello {children}</h2>
    }
    if ( lang === 'es'){
        return <h2>hola {children}</h2>
    }
    if ( lang === 'fr'){
        return <h2>salut {children}</h2>
    }

}

export default Greetings