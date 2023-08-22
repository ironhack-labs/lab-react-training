const Greetings = ({ lang, children }) => {

    let greeting = ''

    switch (lang) {
        case "de":
            greeting = 'Hallo'

            break;

        case "en":
            greeting = 'Hello'
            break

        case "fr":
            greeting = "Bonjour"
            break

        case "es":
            greeting = "Hola"
        default: "hello"

    }

    return (

        <div>
            <p>{greeting}, {children}</p>
        </div>
    )
}

export default Greetings