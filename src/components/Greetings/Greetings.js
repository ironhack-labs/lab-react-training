import "./Greetings.css"

function Greetings (props) {

    let greet = ""

    if (props.lang === "de") {
        greet = "Hallo"
    } else if (props.lang === "fr") {
        greet = "Bonjour"
    } else if(props.lang === "en") {
        greet = "Hello"
    } else if (props.lang === "es") {
        greet = "Hola"
    }

    return (
        <div className = "greetingDiv">
            <p>{greet} {props.children}</p>
        </div>
    )
}

export default Greetings