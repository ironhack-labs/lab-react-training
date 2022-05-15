export default function Greetings(props) {

    const {lang, children} = props;
    let message;

    switch (lang) {
        case "en":
            message = "Hello"
            break;
        case "de":
            message = "Hallo"
            break;
        case "es":
            message = "Hola"
            break;
        case "fr":
            message = "Bonjour"
            break;
        default:
            message = "Welcome"
            break;
    }

    return (
        <div className="box">
            <h3>{message + " " + children}</h3>
        </div>
    )
}