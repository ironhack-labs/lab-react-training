function Greetings({lang, children}) {
    let Greeting = ""

    switch(lang) {
        case "de":
            Greeting = "Hallo"
            break;
        case "en":
            Greeting = "Hello"
            break;
        case "es":
            Greeting = "Hola"
            break;
        case "fr":
            Greeting = "Bonjour"
            break;
    }

    return(
        <div>
        <h1>{Greeting}: {children}</h1>
        </div>
    )
}

export default Greetings;