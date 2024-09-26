import './Greetings.css'

const Greetings = ({ lang, children }) => {

    console.log(children)

    if (lang === "de") {
        return (`Halo ${children}`)
    }

    if (lang === "fr") {
        return (`Bonjour ${children}`)
    }

    if (lang === "en") {
        return (`Hello ${children}`)
    }

    if (lang === "es") {
        return (`Hola ${children}`)
    }

}



export default Greetings



