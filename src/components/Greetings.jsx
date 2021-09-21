function Greetings(props){
    let languages = {
        "de":"Hallo",
        "en":"Hello",
        "es":"Hola",
        "fr":"Bonjour",
    }
    return(
        <div div className = "bordered" >
            <p>{languages[props.lang]} {props.children}</p>
        </div>
    )
}
export default Greetings