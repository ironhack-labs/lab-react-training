import "./greeting.css";

const toGreet = (lang) => {
    let greet = ""
    switch(lang) {
        case "en":
            greet="Hello"
            break
        case "de":
            greet="Hallo"
            break
        case "fr":
            greet="Bonjour"
            break
        default:
            greet = "Hola"
    }

    return greet
}

const Greetings =({lang, children })=>{
        return(
            <h3 className="border text-start">{toGreet(lang)} {children}</h3>
        )
}


export default Greetings