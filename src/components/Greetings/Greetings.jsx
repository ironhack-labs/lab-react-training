import './Greetings.css'
function Greetings ({ lang, children }) {
    if (lang === "de") {
        return (
            <div className='Greeting'>
                <p>Hello { children }</p>
            </div>
        )
    } else if (lang === "en") {
        return (
            <div className='Greeting'>
                <p>Hola { children }</p>
            </div>
        )
    } else if (lang === "fr") {
        return (
            <div className='Greeting'>
                <p>Bonjour {children}</p>
            </div>
        )
    }
}
export default Greetings