function Greetings(props){
    switch(props.lang){
        case 'de':
            return <p>Hallo {props.children}</p>
        case 'en':
            return <p>Hello {props.children}</p>
        case 'es':
            return <p>Hola {props.children}</p>
        default: 
            return <p>Bonjour {props.children}</p>
    }
}

export default Greetings;