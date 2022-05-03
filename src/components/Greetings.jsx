import './Greetings.css'

const Greetings = ({lang, children}) => {
    if (lang==='de') {
        return (
            <div className="greetings">
            Hallo {children}
            </div>
        )
    } else if (lang==='en'){
        return (
            <div className="greetings">
            Hello {children}
            </div>
        )
    } else if (lang==='es'){
        return (
            <div className="greetings">
            Hola {children}
            </div>
        )
    } else if (lang==='fr'){
        return (
            <div className="greetings">
            Bonjour {children}    
            </div>
        )
    }

}

export default Greetings