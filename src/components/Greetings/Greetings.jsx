import './Greetings.css'

const Greetings = ({ lang, children }) => {
    if (lang === "de")
        return (`Halo ${children}`)

    if (lang === "en")
        return (`Hello ${children}`)

    if (lang === "es")
        return (`Hola ${children}`)

    if (lang === "fr")
        return (`Bonjour ${children}`)

}

export default Greetings;