import './Greeting.css'
const Greetings = ({ lang, children }) => {

    let grt
    if (lang === 'de') grt = 'Hallo'
    if (lang === 'en') grt = 'Hello'
    if (lang === 'es') grt = 'Hola'
    if (lang === 'fr') grt = 'Bonjour'

    const txt = grt + ' ' + children
    return (
        <div className="greetCard">
            <p>{txt}</p>
        </div>
    )
}

export default Greetings