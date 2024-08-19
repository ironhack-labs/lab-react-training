/* eslint-disable react/prop-types */
function Greetings(props) {
    const { lang, children } = props
    const hello = lang == 'en' ? "Hello" : lang == 'de' ? "Hallo" : lang == 'fr' ? "Bonjour" : "Hola"

    return (
        <div className="container">
            {hello} {children}
        </div>
    )
}

export default Greetings