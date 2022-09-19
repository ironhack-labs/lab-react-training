import './Greetings.css';

const Greetings = (props) => {
    let greet = "";
    switch (props.lang) {
        case "de":
            greet = "hallo"
            break;
        case "en":
            greet = "hello"
            break;
        case "es":
            greet = "hola"
            break;
        case "fr":
            greet = "salut"
            break;
    }
    return (
        <>
            <div class="flex">{greet} {props.children}</div>

        </>
    )
}

export default Greetings;