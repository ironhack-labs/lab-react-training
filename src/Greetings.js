
import './Greetings.css'

const Greetings = (props) => {

    const { lang, children } = props

    if(lang === 'de'){
        return <p className="box">Hallo {children}</p>
    }
    if(lang === 'en'){
        return <p className="box" >Hellow {children}</p>
    }
    if(lang === 'es'){
        return <p className="box" >Hola {children}</p>
    }
    if(lang === 'fr'){
        return <p className="box" >Bonjour {children}</p>
    }
   


}

export default Greetings