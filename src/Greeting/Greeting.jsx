import './Greeting.css'

const Greeting = ({ lang, children }) => {

    let text = ""

    switch (lang) {
        case "en":
            text = "Hello"
            break;
        case "es":
            text = "Hola"
            break;
        case "de":
            text = "Hallo"
            break;
        case "fr":
            text = "Bonjour"
            break;
        default:

    }


    return (
        <div className='greet'>
            <p>{text} {children}</p>
        </div>
    )
}

export default Greeting