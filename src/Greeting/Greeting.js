import './Greeting.css'
const Greeting = (props) => {
    let rrr = "";
    switch (props.lang) {
        case 'en':
            rrr = "Hello"
            break;
        case 'fr':
            rrr = "Bonjour"
            break;
        case "de":
            rrr = "Hallo"
            break;
        case "es":
            rrr = "Holla"
            break;
        default:
            console.log("err")
    }
    return (
        <div className="greeting-container">{rrr} {props.children}</div>
    )
}


export default Greeting;