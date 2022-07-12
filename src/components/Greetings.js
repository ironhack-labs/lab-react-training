import "../components/css/Greetings.css"

const Greetings = ({lang, children}) => { 

    switch (lang) { 
        case 'de': 
            return <h4 className="welcome">Hallo {children}</h4>
        case 'en': 
            return <h4 className="welcome">Hello {children}</h4>
        case 'es': 
            return <h4 className="welcome">Hola {children}</h4>
        case 'fr':
            return <h4 className="welcome">Bonjour {children}</h4>
        default: return 'Unknown'
    }    
};

export default Greetings;