function GreetingCard (props){
    switch (props.lang) {
            case "fr":
            return <p className="Greeting">Bonjour {props.children}</p>

            case "en":
            return <p className="Greeting">Hello! {props.children}</p>

            case "es":
            return <p className="Greeting">Buenas! {props.children}</p>

            case "de":
            return <p className="Greeting">Hallo {props.children}</p>

            default:
            return <p className="Greeting">Hello! {props.children}</p>
        }
    }  

export default GreetingCard; 