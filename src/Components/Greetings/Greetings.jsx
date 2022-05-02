

const Greetings = (props) => {
    
    let greet = ""
    
    
    if (props.lang === "de") {
        greet = "Hallo"
    } else {
        greet = "Bonjour"
    }
    
    return (
        <div>
            <p>{greet} {props.children}</p>
        </div>
    )
}

export default Greetings