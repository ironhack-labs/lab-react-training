
function Greetings(props) {
    let lenguage = 'Hello'
    if (props.lang === 'fr') lenguage = "Bonjour"
    if (props.lang === 'es') lenguage = "Hola"
    if (props.lang === 'de') lenguage = "Hallo"
    if (props.lang === 'pt') lenguage = "Ola"

    return (
        <div className="Greetings">
            {lenguage} {props.children}
        </div>
    )
}

export default Greetings