function Greetings (props) {
    let theGreeting;
    switch(props.lang){
        case "de":
            theGreeting = "Halo";
            break;
        case "fr":
            theGreeting = "Bonjour";
            break;
        case "es":
            theGreeting = "Hola"
            break;
        default:
            theGreeting ="Hello";
            break;
    }

    return (
        <div className="Greetings">
            <p>{theGreeting} {props.children}</p>
        </div>
    )
}
export default Greetings;