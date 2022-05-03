const Greetings = ({ lang, children }) => {

  let text = ""

    if (lang === "de") {
            text = "hallo"    
    }
    if (lang === "en") {
        text = "hello"
        
    }
    if (lang === "es") {
        text = "hola"
        
    }
    if (lang === "fr") {
        text = "bonjour"
        
    }

    return (
        <p>{ text}{ children}</p>
    )
   
   
}

export default Greetings 