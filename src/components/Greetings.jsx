import './Greetings.css'

function Greetings({ lang, children }) {

    let languageGreet = ""
    switch (lang){
        case "de":
            languageGreet = "Hallo"
            break
        case "es":
            languageGreet = "Hola"
            break
        case "en":
            languageGreet = "Hello"
            break
        case "fr":
            languageGreet = "Bonjour"
            break
    }
    return (
        <p className = "greetings">{languageGreet + " " + children}</p>

    )
}


export default Greetings