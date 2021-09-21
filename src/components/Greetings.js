function Greetings(props) {
    let message;
    switch (props.lang) {
        case "de":
            message = "Hallo"
            break;

        case "en":
            message = "Hello"
            break;
    
        case "es":
            message = "Bongiourno"
            break;
            
        case "fr":
            message = "Bonjour"
            break;
    
        default:
            message = "Hello"
            break;
    }
  return (
    <div className="Greetings">
        {message}
        {props.children}
    </div>
  );
}

export default Greetings;
