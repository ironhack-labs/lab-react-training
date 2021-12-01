import '../Greetings/Greetings.Styles.css'

const Greetings =(props)=>{
const {lang, children} = props
if(lang === 'de'){
    return <p>Hallo {children}</p>
}else if(lang === 'fr'){

    return <p>Bonjour {children}</p>
}

}

export default Greetings;