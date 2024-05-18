import './Greeting.css'

const Greetings = ({ lang, children }) => {


    if (lang === 'de') {
        return `Hallo ${children}`
    } else if (lang === 'es') {
        return `Hola ${children}`
    } else if (lang === 'en') {
        return `Hello ${children}`
    } else if (lang === 'fr') {
        return `Bonjour ${children}`
    }

}

export default Greetings