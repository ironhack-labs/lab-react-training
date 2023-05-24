import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let languageGretting
    if (lang === "en") {
        languageGretting = "Hello"
    }
    if (lang === "fr") {
        languageGretting = "Bonjour"
    }
    if (lang === "es") {
        languageGretting = "Hola"
    }
    if (lang === "de") {
        languageGretting = "Hallo"
    }

    return (
        <div className='Greetings'>
            <p>{languageGretting} {children}</p>
        </div>



    )

}

export default Greetings