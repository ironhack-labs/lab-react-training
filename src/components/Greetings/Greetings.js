import './Greetings.css'

const Greetings = ({lang, children}) => {
let text = ''

    if (lang === 'de'){
        text = 'Hallo'
    }else if (lang === 'en'){
        text = 'Hello'
    }else if (lang === 'es'){
        text= 'Hola'
    }else if (lang === 'fr'){
        text = 'Bonjour'
    }
    return(

        <div className="greetings">
            <p>{text}</p>
            <p>{children}</p>

        </div>
    )
}

export default Greetings