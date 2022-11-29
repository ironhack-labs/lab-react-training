import "./Greetings.css";

function Greetings (props){
    const greetins = {
        "de": "Hallo",
        "en": "Hello",
        "es": "Hola",
        "fr": "Bonjour"
    }
 
    return(
        <div className = "Greetings">
            <p>{greetins[props.lang]} {props.children}</p> 
        </div>   
    )
}

export default Greetings;