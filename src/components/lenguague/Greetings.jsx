import './greetings.css'
const Greetings = ({ lang, text }) => {
    if (lang == "en") {
        return (
            <div className='greetings'>
                <h1>Hello {text}</h1>
            </div>
        )
    }
    else if (lang == "fr") {
        return (
            <div className='greetings'>
                <h1>Bonjour {text}</h1>
            </div>
        )

    }
}
export default Greetings