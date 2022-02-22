
const Greetings = props => {
    let greetings = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }

    return (
        <div className="blackBox">
            <h1>{greetings[props.lang]} {props.children}</h1>
        </div>
    )
}

export default Greetings