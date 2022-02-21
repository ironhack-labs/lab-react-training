import "./Greetings.css"

function Greetings(props) {

    let text

    switch (props.lang) {
        case "de": text = "Hallo"
            break
        case "en": text = "Greetings"
            break
        case "es": text = "Buenos días"
            break
        case "fr": text = "Bonjour"
            break
    }

    return (
        <article>
            {text}  {props.children}
        </article>
    )
}




export default Greetings