const Greetings = (props) =>{
    const {lang, children} = props
    const languageVariableGreeting = {
        "de": "Hallo",
        "en": "Hello",
        "es": "Hola",
        "fr": "Bonjour"
    }

    return (

    <div className="greeting">
        <p>{languageVariableGreeting[lang]} {children}</p>
    </div>
    )
}

export default Greetings