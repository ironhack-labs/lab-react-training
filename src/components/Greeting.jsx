function Greeting(props) {
    switch(props.language) {
        case "de":
            return <p>Hallo {props.children}</p>
        case "en":
            return <p>Hello {props.children}</p>
        case "fr":
            return <p>Bonjour {props.children}</p>
        case "es":
            return <p>Hola {props.children}</p>
    }
}

export default Greeting