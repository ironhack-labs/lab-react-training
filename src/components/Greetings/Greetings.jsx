import './Greetings.css';

const Greetings = (props) => {
    let langText = "";
    switch (props.lang) {
        case "de":
            langText = "Hallo";
            break;
        case "en":
            langText = "Hello";
            break;
        case "es":
            langText = "Hola";
            break;
        case "fr":
            langText = "Bonjour";
            break;
        default:
            break;
    }
    return (
        <div>
            <h1 className="greetingsText">{langText + " " + props.children}</h1>
        </div>
    );
}

export default Greetings;