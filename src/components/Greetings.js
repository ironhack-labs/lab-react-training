const Greetings = (props) => {
    let language = "";
    
    if(props.lang === "de") {
        language = "Hallo";
    } else if(props.lang === "en") {
        language = "Hello";
    } else if(props.lang === "es") {
        language = "Hola";
    } else if(props.lang === "fr") {
        language = "Bonjour";
    }

    return(
        <div className="greetingsList">
            <p>{language} {props.children}</p>
        </div>
    )
}

export default Greetings