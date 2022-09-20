import './Greeting.css'
const Greetings = (props) => {
    let greeting
    switch (props.lang) {
        case 'es': greeting = 'Hola'; break;
        case 'en': greeting = 'Hello'; break;
        case 'de': greeting = 'Hallo'; break;
        case 'fr': greeting = 'Bonjour'; break;
    }

    return (
        <div className="greeting">
            <h3>{greeting} {props.children}</h3>
        </div>
    )
}

export default Greetings