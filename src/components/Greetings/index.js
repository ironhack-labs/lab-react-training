import "./style.css"

function Greetings(props){
    const {lang, children} = props
        if(lang === "de")
            return <p className="caja">Hallo {children}</p>
        if(lang === "en")
            return <p className="caja">Hello {children}</p>
        if(lang === "es")
            return <p className="caja">Hola {children}</p>
        if(lang === "fr")
            return <p className="caja">Bonjour {children}</p>
            
}

export default Greetings