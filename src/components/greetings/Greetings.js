function Greetings (props) {
    const text = {
        de: 'Hallo',
        en: 'Hello', 
        es: 'Hola',
        fr: 'Bonjour', 
    }

    return(
        <div className="Greetings">
            {text[props.lang]} {props.children}
        </div>
    )
}

export default Greetings