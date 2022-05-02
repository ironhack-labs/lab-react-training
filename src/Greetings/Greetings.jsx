import './Greetings.css'

const Greetings = (props) => {
    let hi = ""
    if ("de" === props.lang) {
        hi = "Hallo"
    }
    if ("fr" === props.lang) {
        hi = "Bonjour"
    }
    if ("en" === props.lang) {
        hi = "Hello"
    }
    return (<p>{hi} {props.children}</p>)
}

export default Greetings