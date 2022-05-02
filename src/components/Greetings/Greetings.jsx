import './Greetings.css'

const Greetings = (props) => {
    let word = ""

    if ("de" === props.lang) {
        word = "Hallo"
    } if ("fr" === props.lang) {
        word = "Bonjour"
    } if ("en" === props.lang) {
        word = "Hello"
    } if ("es" === props.lang) {
        word = "Hola"
    }

    return (
        <p>{word}  {props.children}</p>
    )

}

export default Greetings