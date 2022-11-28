const Greetings = (props) => {
    let textGreetings = ""
    switch (props.lang) {
        case "de":
            textGreetings = "hallo";
            break;
        case "en":
            textGreetings = "hello";
            break;
        case "es":
            textGreetings = "hola";
            break;
        case "fr":
            textGreetings = "bonjour";
            break;
        default:
            break
    }
    return (
        <div>
            <p>{textGreetings + " " + props.children}</p>
        </div>
    )
}
export default Greetings