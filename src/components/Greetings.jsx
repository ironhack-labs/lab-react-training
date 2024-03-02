function Greetings(props){
    let text;
    if(props.lang === "de"){
        text = "Hallo"
    }
    else if (props.lang === "fr") {
        text = "Bonjour"
    }
    return (
        <div>
            <p>{text} {props.children}</p>
        </div>
    )
}
export default Greetings;