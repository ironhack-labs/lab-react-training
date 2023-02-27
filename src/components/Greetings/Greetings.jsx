import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let greeting
    if (lang == 'de') {
        greeting = `Hallo ${children}`
    }
    else if (lang == 'en') {
        greeting = `Hello ${children}`
    }
    else if (lang == 'es') {
        greeting = `Holi ${children}`
    }
    else if (lang == 'fr') {
        greeting = `Bonjour ${children}`
    }

    return (
        <div className="Greetings">
            <p>{greeting}</p>
        </div>
    )
}

export default Greetings