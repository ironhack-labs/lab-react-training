
import './Greetings.css'

const Greetings = (props) => {

    const { lang, children } = props

    const selectLanguage = ()=>{
        let greeting = ''
        if(lang === 'de') greeting = 'Hallo'
        if(lang === 'en') greeting = 'Hellow'
        if(lang === 'es') greeting = 'Hola'
        if(lang === 'fr') greeting = 'Bonjour'

        return greeting
    }
    return <p className="box">{selectLanguage()} {children}</p>
   


}

export default Greetings