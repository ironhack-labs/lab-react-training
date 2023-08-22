const Greetings = ({ lang, children }) => {

    let greeting = ''
    switch (lang) {
        case "de":
            greeting = "hallo"
            break

        case "en":
            greeting = "hello"
            break
        case "es":
            greeting = "hola"
            break
        case "fr":
            greeting = "bonjour"
            break
    }

    return (
        <>
            <div>
                <p> {greeting} ,{children}</p>
            </div>
        </>
    )
}

export default Greetings
