import "./Greetings.css"

function Greetings(props) {
    const {lang, children} = props;
    let greeting = "Hello";
    
    switch(lang) {
        case "de":
        greeting = "Hallo" 
        break;
    
        case "en":
        greeting = "Hello"
        break;
    
        case "es":
        greeting = "Hola"
        break
    
        case "fr":
        greeting = "Bonjour"
        break

        default:
    
    }
     
        return (
    <div className="greetings">
        <h1>{ greeting } { children }</h1>
    </div>
     )
}

export default Greetings;