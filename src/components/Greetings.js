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
        <h3 style={{'border':'solid', 'fontSize': '2em'}}>{languageVariableGreeting[lang]} {children}</h3>
    </div>
    )
}

export default Greetings