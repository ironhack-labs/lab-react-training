function Greetings (props) {

    let greeting = "";
    if( props.lang === "de") {
        greeting = <span>Hallo</span>
    } else if (props.lang ==="fr") {
        greeting =<span>Bonjour</span>
    } else if (props.lang === "en") {
        greeting =<span>Hello</span>
    } else {
        greeting =<span>Hola</span>
    }
    
    return (
        <div className="BasicCard">
            <p>{greeting} {props.children}</p>
        </div>
    )
}

export default Greetings;