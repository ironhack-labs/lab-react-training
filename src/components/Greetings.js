function Greetings(props) {
    let greetings = ""
    if (props.lang === "de") {
        greetings = "Hallo"
    }
    else if (props.lang === "fr") {
        greetings = "Bonjour"
    }
    else if (props.lang === "en") {
        greetings = "Hello"
    }
    else if (props.lang === "es") {
        greetings = "Hola"
    }
    
    return (
        <div>
           
        <p>{greetings} {props.children}</p>
        
        </div>
       
    )
}


export default Greetings;