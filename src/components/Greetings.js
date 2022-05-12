const Greetings = (props) => {
    //console.log(props.children)
    const {lang, children} = props
    let greetings = "";

    switch (lang) {
        case "de":
            greetings = "Hallo"
            break;
        case "en":
            greetings = "Hello"
            break;
        case "es":
            greetings = "Hola"
            break;
        case "fr":
            greetings = "Bonjour"
            break;

        default:
            greetings = "Hello"
            break;
    }

    return (
        <div className="greeting">
            {greetings}
            {children}
        </div>
    )

}

export default Greetings