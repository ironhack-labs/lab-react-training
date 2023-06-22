function Greetings(props){
    return(
        <div className="greetings">
            <p>
                {props.lang === 'fr'
                ? 'Bonjours, '
                : props.lang === 'de'
                ? 'Hallo, '
                : props.lang === 'es'
                ? "Hola, "
                : props.lang === 'en'
                ? 'Hello, '
                : "Hey, " }
                {props.children}
            </p>
        </div>
    )
}
export default Greetings