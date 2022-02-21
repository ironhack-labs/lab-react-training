import "./Greetings.css"

const Greetings = (props) => {
    let { lang } = props

    let text = ""

    switch (lang) {
        case "es":
            text = "Hola "
            break;

        case "en":
            text = "Hello "
            break;

        case "de":
            text = "Hallo "
            break;

        case "fr":
            text = "Bonjour "
            break;
    }


    return (
        <div className="card">
            <h3 lang={lang}>{text}{props.children}</h3>
        </div>
    )
}

export default Greetings