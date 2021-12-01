import './Greetings.css'

function Greetings (props) {
    const {lang} = props
    let greet = ""

    if (lang==='de'){
        greet = 'Hallo'
    }else if(lang==='fr'){
        greet = 'Bonjour'
    }else if(lang==='en'){
        greet = 'Hello'
    }else if(lang==='es'){
        greet = 'Hola'
    }

    return(
        <p>{greet} {props.children}</p>
    )

}






export default Greetings