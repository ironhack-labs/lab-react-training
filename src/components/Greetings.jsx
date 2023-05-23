function Greetings(props) {
    let {lang} = props
    let greeting = ""
    if (lang == "de") {
        greeting = "Hallo " + props.children
    } else if (lang == "en") {
        greeting = "Hello " + props.children
    } else if (lang == "es") {
        greeting = "Hola " + props.children
    } else if (lang == "fr") {
        greeting = "Bonjour " + props.children
    }

    return(<div>
        {greeting}
        </div>)
}

export default Greetings