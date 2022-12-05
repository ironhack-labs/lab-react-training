const Greetings = (lang, children) =>{
    const languageVariableGreeting = {
        "de": "Hallo",
        "en": "Hello",
        "es": "Hola",
        "fr": "Bonjour"
    }

    return (

    <div className="greeting">
        <p>{languageVariableGreeting[props.lang]} {props.children}</p>
    </div>
    )
}

export default Greetings