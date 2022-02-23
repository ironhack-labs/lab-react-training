import "./Greetings.css"

const Greetings = ({lang, children}) => {

let language = ""

if (lang === "de") {
    language = "Hallo"
} 
if (lang === "en") {
    language = "Hello"
}

if (lang === "es") {
    language = "Hola"
}

if (lang === "fr") {
    language = "Bonjour"
}

return (
    <article className="Greetings">
    <p>{language} {children}</p>
    </article>
)


}



export default Greetings