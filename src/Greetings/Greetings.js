import "./Greetings.css"


const Greetings = (props) => {

    let lang = ""

    if (props.lang === "de") {
        lang = "hallo"
    } else if (props.lang === "fr") {
        lang = "bonjour"
    } else if (props.lang === "en") {
        lang = "hello"
    } else {
        lang = "hola"
    }

    return (

        <article className="greetings">

            <p>{lang} {props.children} </p>

        </article>

    );
}
export default Greetings