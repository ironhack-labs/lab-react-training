
function Greetings(props) {
    let greet = "Hello"
    if (props.lang === "de") {
        greet = "Hallo"
    };
    if (props.lang === "fr") {
        greet = "Bonjour"
    }
    if (props.lang === "es") {
        greet = "Hola"
    }

    return (
        <div className="box" lang={props.lang}><strong>{greet} {props.children} </strong></div>
    )
}

export default Greetings;